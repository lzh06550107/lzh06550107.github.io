---
title: hermes 如何通过 mcp 连接 chrome
description: 探索 hermes 如何通过 mcp 连接 chrome
pubDate: 2026-05-10
category: chrome
readingTime: 8 min read
draft: false
---
## wsl 中 hermes 如何控制 windows 系统中的 chrome

下面是在 WSL 中用 Hermes 控制 Windows Chrome 的完整方案。

---

### 核心原理

Hermes 运行在 WSL2 内部，而你想控制的是 Windows 宿主机上的 Chrome。直接用 `/browser connect` 跨越 WSL2/Windows 边界往往不可靠。推荐的架构是：

```
Hermes (WSL) → MCP stdio 桥接 → Windows Chrome
```

这样你可以保留 Windows 浏览器的真实 Profile、Cookie 和登录状态，同时 Hermes 留在 WSL 的 Unix 环境中。

---

### 推荐方案：通过 `chrome-devtools-mcp` 桥接

#### 第一步：让 Windows Chrome 开启远程调试

以调试模式启动 Chrome（在 Windows 的 PowerShell 或运行框中执行）：

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" `
  --remote-debugging-address=0.0.0.0 `
  --remote-debugging-port=9222 `
  --user-data-dir="C:\temp\chrome-debug-profile"
```

或者在 Chrome 中访问 `chrome://inspect/#remote-debugging` 确认已开启。

> 注意：--remote-debugging-address=0.0.0.0 让 Chrome 监听所有网卡，WSL 才能访问。

---

#### 第二步：查询 WSL 的 IP 地址

在 Windows PowerShell 中执行，找到 WSL 网关 IP：

```powershell
Get-NetIPAddress -AddressFamily IPv4 `
  | Where-Object { $_.InterfaceAlias -like "vEthernet (WSL*)" } `
  | Select-Object IPAddress
```

记下输出的 IP，例如 `172.27.0.1`。

#### 第三步：添加端口转发规则（Windows 侧）

在 管理员 PowerShell 中执行（将 <WSL_IP> 替换为上一步查到的 IP）：

```powershell
# 添加端口转发
netsh interface portproxy add v4tov4 `
  listenaddress=<WSL_IP> `
  listenport=9222 `
  connectaddress=127.0.0.1 `
  connectport=9222

# 添加防火墙规则
New-NetFirewallRule -DisplayName "WSL Chrome DevTools" `
  -Direction Inbound `
  -LocalPort 9222 `
  -Protocol TCP `
  -Action Allow
```

```powershell
# 检查 Chrome 是否真的在监听 9222
netstat -an | findstr "9222"
```

#### 第四步：在 WSL 中验证连通性

```bash
curl http://<WSL_IP>:9222/json/version
```

有 JSON 输出说明连接成功。

#### 第五步：在 WSL 中添加 MCP 桥接

如果 Windows Chrome 已开启远程调试，在 WSL 中执行：

```bash
hermes mcp add chrome-devtools-win \
  --command cmd.exe \
  --args /c "npx -y chrome-devtools-mcp@latest --autoConnect --no-usage-statistics"
```

这个命令通过 Windows 互操作（`cmd.exe`）启动一个 MCP server，该 server 会附加到你的 Windows Chrome 会话上。

该步骤会报错，推荐直接改 ~/.hermes/config.yaml

先编辑配置：

```bash
vim ~/.hermes/config.yaml
```

加入：

```yaml
mcp_servers:
  chrome-devtools-win:
    command: "npx"
    args:
      - "-y"
      - "chrome-devtools-mcp@latest"
      - "--browser-url=http://<WSL_IP>:9222"
    connect_timeout: 60
    timeout: 120
```

如果你原来已经有 `mcp_servers:`，不要重复写两个顶层 `mcp_servers:`，要合并进去，例如：

```yaml
mcp_servers:
  chrome-devtools-win:
    command: "npx"
    args:
      - "-y"
      - "chrome-devtools-mcp@latest"
      - "--browser-url=http://172.22.240.1:9222"
    connect_timeout: 60
    timeout: 120

  other-server:
    command: "xxx"
    args:
      - "xxx"
```

保存后执行：

```bash
hermes mcp list
```

---

#### 第三步：验证连接

加载后，在 Hermes 中可以直接使用 MCP 工具，例如：

```
列出当前浏览器标签页
```

Hermes 会调用 MCP 工具 `mcp_chrome_devtools_win_list_pages`，列出当前浏览器标签页。

---

### 注意事项

| 问题 | 说明 |
|------|------|
| **工作目录** | 如果 Hermes 当前目录在 WSL 的 `~` 下，Windows 可能会报 UNC 路径警告。此时从 `/mnt/c/` 下的某个目录启动 Hermes，确保 Windows 进程有一个驱动器字母路径。 |
| **网络隔离** | WSL2 运行在独立的轻量虚拟机中，WSL 内的 `localhost` 与 Windows 上的 `localhost` 是两个不同的主机，不能简单互通。 |
| **不要用 `/browser connect`** | `/browser connect` 是交互式 CLI 命令，不能在 WebUI、Telegram、Discord 等 Gateway 中使用；且跨 WSL/Windows 边界时不可靠，优先用 MCP 桥接替代。 |

---

### 方案对比

| 方案 | 适用场景 |
|------|----------|
| **MCP + chrome-devtools-mcp**（推荐） | 控制有登录状态的 Windows Chrome，跨环境最稳定 |
| **本地 Chromium（agent-browser）** | 不设置云凭据也不用 `/browser connect` 时，Hermes 可以通过本地 Chromium 安装来使用浏览器工具。适合无状态任务 |
| **云浏览器（Browserbase 等）** | 无需本地 Chrome，适合无头自动化 |

最推荐的路径就是 **MCP 桥接**，既稳定又能复用你 Windows Chrome 的真实登录状态。

