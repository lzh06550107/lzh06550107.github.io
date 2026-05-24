---
title: cloudflare 风控分析
description: 探索 cloudflare 风控分析
pubDate: 2026-05-24
category: crawl
readingTime: 5 min read
draft: false
---

![Cloudflare](/images/cloudflare_risk_control_mindmap.svg)

思维导图涵盖了 Cloudflare 风控的六大检测维度：

- **网络层指纹** — TLS/JA3/JA4 + HTTP/2 参数，在握手阶段即可识别非浏览器客户端
- **JavaScript 层检测** — JS Challenge 挑战 + Canvas/WebGL 指纹，验证是否具备真实浏览器环境
- **HTTP 请求细节** — Header、Cookie、User-Agent 的一致性校验
- **行为分析** — 鼠标轨迹、滚动行为、请求频率等人类行为特征
- **IP 信誉** — 请求频率限制 + 数据中心 IP 黑名单
- **Bot Score 综合评分** — 将所有信号汇总为 0–99 的可信度评分，分数超过 30 触发 Turnstile 验证或直接拦截

底部流程条展示了完整的检测链路：任何一层异常都会拉低信任分，形成层层递进的防御机制。

以下是 Cloudflare 风控（Bot Management）所涉及的主要检测维度，按检测层次整理：

---

## 一、网络层指纹

### 1. TLS 指纹（JA3 / JA4）
Cloudflare 通过分析客户端 TLS 握手的特征来判断请求是否来自真实浏览器。TLS 握手中涉及加密参数（如密码套件）的协商，不同客户端之间存在差异，Cloudflare 利用这些差异生成唯一的 JA3 哈希值。如果哈希值与已知浏览器指纹不匹配，请求就会被标记为可疑。

### 2. HTTP/2 指纹
Cloudflare 利用 HTTP/2 参数与已知的机器人特征进行匹配。Cloudflare Bot Management 会将观察到的 TLS + HTTP/2 指纹与已知浏览器配置文件数据库进行比对，不匹配或未知的指纹会触发 JavaScript 挑战或直接封锁。

---

## 二、JavaScript 层检测

### 3. JavaScript 挑战（JS Challenge）
挑战的核心是运行复杂的混淆 JavaScript 代码，生成一个通行 token。无头浏览器可以执行该脚本，但通常会携带可检测的自动化指纹。

Turnstile 加载时在后台静默执行一系列非交互式 JS 挑战，收集环境信号

- 工作量证明 (Proof-of-Work)：要求客户端完成 SHA-256 计算难题，对真实浏览器轻松完成，对大规模机器人造成资源压力
- 空间证明 (Proof-of-Space)：测试设备存储空间利用特性，真实设备与虚拟环境在此维度有明显差异
- Web API 探测：调用 Canvas、WebGL、AudioContext 等 API，检测返回值是否与真实浏览器一致
- 浏览器怪癖检测：检测各浏览器版本特有的细微行为差异，识别伪装成浏览器的爬虫工具

研究人员逆向发现：ChatGPT 部署的 Turnstile 程序包含 25 个字段指纹 + SHA-256 hashcash，72% 的正常请求在 5ms 内完成工作量证明

### 4. 浏览器 / 硬件指纹（Canvas、WebGL、Audio）
包括异步 JavaScript 挑战、Canvas/WebGL 浏览器指纹采集，以及 TLS/JA3 签名校验。Managed Challenge 作为硬边界屏障，阻止任何源服务器 HTML 加载，直到挑战通过，有效阻止依赖 DOM 解析的自动化爬虫。

JavaScript 指纹会收集浏览器、操作系统和硬件信息，以区分机器人与真实用户。

Turnstile 收集的浏览器与设备信号（共 55+ 个属性维度）

- 浏览器环境：GPU / 渲染器、屏幕分辨率、字体列表、Canvas 指纹、WebGL 参数、Audio 指纹、navigator 属性
- 应用层信号（针对 SPA）：React 路由上下文、页面加载状态、框架运行时标记
- Cloudflare 边缘信息：城市 / 地区、IP 地址、边缘节点 headers
- 自动化检测标志：webdriver 属性、自动化框架痕迹、headless 特征、Phantom / Selenium

指纹经 JSON 序列化 → XOR 加密 → 回传父框架，形成不可伪造的环境令牌
---

## 三、HTTP 请求细节

### 5. 请求头 & Cookie 检查
Cloudflare 检查请求头信息和 Cookie，以识别疑似机器人的配置。

### 6. IP 信誉 & 频率限制
Cloudflare 会根据同一 IP 发送过多请求来识别并阻止机器人。

---

## 四、行为分析

### 7. 行为信号（鼠标、滚动、停留时间）
Cloudflare 通过机器学习监测请求频率、鼠标移动、空闲时间等来检测机器人。

Turnstile 内置的 Signal Orchestrator 持续监听 36 个行为属性

- 鼠标 / 触摸
    - 移动速度与加速度
    - 轨迹曲率（人类非直线）
    - 点击位置分布
    - 停顿与空闲时间
- 键盘 / 输入
    - 按键节奏（timing）
    - 键间隔分布
    - 粘贴事件检测
    - 输入错误与修正
- 页面交互
    - 滚动模式与速度
    - 标签页切换行为
    - 焦点获得/失去
    - 页面停留时长
- 事件监听器
    - keydown / pointermove
    - click / scroll / wheel
    - paste
    - window.__oai_so_* 属性

机器学习模型实时分析这些行为模式，挑战难度根据感知风险动态调整
---

## 五、综合评分机制

Cloudflare 的 Bot Score 将 TLS 指纹、HTTP/2 指纹、JavaScript 挑战结果和行为信号综合成一个 0–99 的信任评分，分数高于 30 的请求会被挑战或封锁。

每个请求都会根据其行为的"人类相似度"获得一个评分，分数越低则可疑程度越高；同时通过静态规则识别异常 Header、缺失浏览器元数据或异常请求频率等模式。

最终判定与令牌流程

所有信号汇总后，Turnstile 给出最终判定并签发 cf-turnstile-response 令牌

- 通过：签发 cf-turnstile-response 令牌，前端随表单提交，后端调用 Siteverify API 验证真实性
- 挑战：Managed 模式下展示可见复选框，要求用户主动确认；通过后重新评分
- 拦截：Bot Score 持续过高，返回错误令牌，后端 Siteverify 验证失败，请求被拒绝

令牌签发后带有匹配指纹，任何后续不一致的指纹请求将立即使令牌失效。后端验证通过 POST 到 https://challenges.cloudflare.com/turnstile/v0/siteverify 完成。
---

## 六、Turnstile（验证码替代品）

Turnstile 作为现代验证码(CAPTCHA)的替代方案，以交互或非交互组件的形式嵌入应用中，主要依靠后台遥测数据来区分人类用户和自动化脚本。

### 三种工作模式

- Managed 托管模式（推荐）：根据风险等级自动决定是否展示勾选框。低风险用户无感通过，高风险用户才会看到交互组件
- Non-interactive 非交互模式：访客永远不需要与 Widget 交互，完全依赖后台信号自动判断
- Invisible 隐形模式：Widget 完全对用户不可见，适合 SPA 和需要程序化控制验证时机的场景

挑战难度根据感知风险动态调整：正常环境立即通过，可疑信号触发更密集的检测。
---

## 总结

| 检测层 | 技术手段 |
|--------|----------|
| 网络层 | TLS/JA3/JA4 指纹、HTTP/2 指纹 |
| 脚本层 | JS Challenge、混淆 token 生成 |
| 浏览器层 | Canvas/WebGL/Audio 指纹 |
| 请求层 | Header、Cookie、User-Agent 校验 |
| 行为层 | 鼠标轨迹、滚动、停留时长 |
| 网络信誉 | IP 频率、IP 信誉库 |
| 综合评分 | Bot Score (0–99) |

Cloudflare 的检测体系是**多层链式**的，任何一层异常都会拉低信任分，触发挑战或封锁。

