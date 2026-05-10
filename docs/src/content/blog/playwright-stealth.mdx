---
title: playwright 如何伪造浏览器指纹
description: 探索当前隐藏浏览器指纹的各种技术
pubDate: 2026-05-10
category: playwright
readingTime: 8 min read
draft: false
---

## 核心反检测策略

### 1. 使用 playwright-stealth 插件

这是最有效的方式，可以隐藏大量自动化特征：

```python
# Python 版本
# pip install playwright-stealth

from playwright_stealth import stealth_async
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        await stealth_async(page)  # 注入 stealth
        await page.goto("https://target.com/login")
```

```js
// Node.js 版本
# npm install playwright-extra playwright-extra-plugin-stealth

const { chromium } = require('playwright-extra')
const stealth = require('playwright-extra-plugin-stealth')
chromium.use(stealth())

const browser = await chromium.launch({ headless: false })
```

### 2. 修改 Navigator 指纹

```python
await page.add_init_script("""
    // 隐藏 webdriver 特征
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    
    // 模拟真实插件数量
    Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3] });
    
    // 修改语言
    Object.defineProperty(navigator, 'languages', { get: () => ['zh-CN', 'zh', 'en'] });
""")
```

### 3. 模拟真实用户行为

```python
import random, asyncio

async def human_type(page, selector, text):
    await page.click(selector)
    for char in text:
        await page.keyboard.type(char)
        # 随机打字间隔，模拟人类速度
        await asyncio.sleep(random.uniform(0.08, 0.25))

async def human_move_and_click(page, selector):
    element = await page.query_selector(selector)
    box = await element.bounding_box()
    
    # 随机点击位置（不总是点中心）
    x = box['x'] + box['width'] * random.uniform(0.3, 0.7)
    y = box['y'] + box['height'] * random.uniform(0.3, 0.7)
    
    # 模拟鼠标移动轨迹
    await page.mouse.move(x - 50, y - 30)
    await asyncio.sleep(random.uniform(0.1, 0.3))
    await page.mouse.move(x, y)
    await page.mouse.click(x, y)
```

### 4. 配置真实浏览器环境

```python
browser = await p.chromium.launch(
    headless=False,  # 优先使用有头模式
    args=[
        '--disable-blink-features=AutomationControlled',  # 关键！
        '--no-sandbox',
        '--disable-dev-shm-usage',
        f'--window-size={random.randint(1200,1920)},{random.randint(800,1080)}',
    ]
)

context = await browser.new_context(
    user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36...',
    viewport={'width': 1366, 'height': 768},
    locale='zh-CN',
    timezone_id='Asia/Shanghai',
    # 使用真实设备的 geolocation
    geolocation={'latitude': 31.23, 'longitude': 121.47},
    permissions=['geolocation'],
)
```

### 5. 使用持久化 Cookie / Session

```python
# 首次手动登录后保存 state
await context.storage_state(path="auth.json")

# 下次直接复用，跳过登录
context = await browser.new_context(storage_state="auth.json")
```

### 6. 代理 IP 轮换

```python
context = await browser.new_context(
    proxy={
        "server": "http://proxy-server:port",
        "username": "user",
        "password": "pass"
    }
)
```

### 7. Canvas / WebGL 指纹混淆

```python
await page.add_init_script("""
    // Canvas 指纹混淆
    const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
    HTMLCanvasElement.prototype.toDataURL = function(type) {
        const canvas = this;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            // 添加细微噪点，使指纹每次不同
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < imageData.data.length; i += 4) {
                imageData.data[i] += Math.floor(Math.random() * 3) - 1;
            }
            ctx.putImageData(imageData, 0, 0);
        }
        return originalToDataURL.apply(this, arguments);
    };

    // WebGL 指纹混淆
    const getParameter = WebGLRenderingContext.prototype.getParameter;
    WebGLRenderingContext.prototype.getParameter = function(parameter) {
        if (parameter === 37445) return 'Intel Open Source Technology Center';
        if (parameter === 37446) return 'Mesa DRI Intel(R) HD Graphics 620';
        return getParameter.apply(this, arguments);
    };
""")
```

### 8. 鼠标轨迹贝塞尔曲线模拟

```python
import math, random, asyncio

async def bezier_mouse_move(page, start_x, start_y, end_x, end_y, steps=30):
    """使用贝塞尔曲线模拟真实鼠标移动轨迹"""
    
    # 随机控制点，产生自然弯曲
    cp1_x = start_x + random.randint(-100, 100)
    cp1_y = start_y + random.randint(-50, 50)
    cp2_x = end_x + random.randint(-100, 100)
    cp2_y = end_y + random.randint(-50, 50)
    
    points = []
    for i in range(steps + 1):
        t = i / steps
        # 三阶贝塞尔曲线公式
        x = ((1-t)**3 * start_x + 
             3*(1-t)**2*t * cp1_x + 
             3*(1-t)*t**2 * cp2_x + 
             t**3 * end_x)
        y = ((1-t)**3 * start_y + 
             3*(1-t)**2*t * cp1_y + 
             3*(1-t)*t**2 * cp2_y + 
             t**3 * end_y)
        points.append((x, y))
    
    for i, (x, y) in enumerate(points):
        await page.mouse.move(x, y)
        # 速度不均匀，模拟人类加速减速
        speed = 0.01 + 0.03 * math.sin(math.pi * i / steps)
        await asyncio.sleep(speed)

async def smart_click(page, selector):
    element = page.locator(selector)
    box = await element.bounding_box()
    
    # 获取当前鼠标位置（从随机位置开始）
    start_x = random.randint(100, 800)
    start_y = random.randint(100, 500)
    
    target_x = box['x'] + box['width'] * random.uniform(0.35, 0.65)
    target_y = box['y'] + box['height'] * random.uniform(0.35, 0.65)
    
    await bezier_mouse_move(page, start_x, start_y, target_x, target_y)
    
    # 点击前随机停顿
    await asyncio.sleep(random.uniform(0.1, 0.4))
    await page.mouse.click(target_x, target_y)
```

### 9. 完整的浏览器指纹伪装

```python
async def setup_browser_fingerprint(page):
    await page.add_init_script("""
        (() => {
            // 1. 修复 Chrome 运行时检测
            window.chrome = {
                runtime: {
                    connect: () => {},
                    sendMessage: () => {},
                },
                loadTimes: () => ({
                    requestTime: Date.now() / 1000 - Math.random() * 2,
                    startLoadTime: Date.now() / 1000 - Math.random() * 3,
                    commitLoadTime: Date.now() / 1000 - Math.random(),
                    finishDocumentLoadTime: Date.now() / 1000,
                    finishLoadTime: Date.now() / 1000 + Math.random(),
                }),
            };

            // 2. 模拟屏幕分辨率
            Object.defineProperty(screen, 'width', { get: () => 1920 });
            Object.defineProperty(screen, 'height', { get: () => 1080 });
            Object.defineProperty(screen, 'availWidth', { get: () => 1920 });
            Object.defineProperty(screen, 'availHeight', { get: () => 1040 });
            Object.defineProperty(screen, 'colorDepth', { get: () => 24 });
            Object.defineProperty(screen, 'pixelDepth', { get: () => 24 });

            // 3. 隐藏 HeadlessChrome 痕迹
            const userAgent = navigator.userAgent.replace('HeadlessChrome', 'Chrome');
            Object.defineProperty(navigator, 'userAgent', { get: () => userAgent });

            // 4. 伪造 Permission API
            const originalQuery = window.navigator.permissions.query;
            window.navigator.permissions.query = (parameters) => (
                parameters.name === 'notifications' ?
                    Promise.resolve({ state: Notification.permission }) :
                    originalQuery(parameters)
            );

            // 5. 音频指纹混淆
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                const originalGetChannelData = AudioBuffer.prototype.getChannelData;
                AudioBuffer.prototype.getChannelData = function() {
                    const results = originalGetChannelData.apply(this, arguments);
                    for (let i = 0; i < results.length; i += 100) {
                        results[i] += Math.random() * 0.0001;
                    }
                    return results;
                };
            }
        })();
    """)
```

### 10. 随机化请求时序和页面行为

```python
import random, asyncio

class HumanBehaviorSimulator:
    
    @staticmethod
    async def random_scroll(page):
        """随机滚动页面，模拟阅读行为"""
        scroll_times = random.randint(2, 5)
        for _ in range(scroll_times):
            distance = random.randint(200, 600)
            await page.evaluate(f"window.scrollBy(0, {distance})")
            await asyncio.sleep(random.uniform(0.5, 2.0))
        # 有时候往回滚
        if random.random() > 0.5:
            await page.evaluate(f"window.scrollBy(0, -{random.randint(100, 300)})")
            await asyncio.sleep(random.uniform(0.3, 1.0))

    @staticmethod
    async def random_pause(min_sec=0.5, max_sec=2.5):
        """随机停顿"""
        await asyncio.sleep(random.uniform(min_sec, max_sec))

    @staticmethod
    async def simulate_reading(page):
        """模拟页面阅读时间"""
        reading_time = random.uniform(2, 6)
        await asyncio.sleep(reading_time)
        # 偶尔移动鼠标
        for _ in range(random.randint(1, 3)):
            x = random.randint(200, 1000)
            y = random.randint(200, 600)
            await page.mouse.move(x, y)
            await asyncio.sleep(random.uniform(0.3, 0.8))

    @staticmethod
    async def human_type(page, selector, text):
        """模拟真人打字，含错误和修正"""
        await page.click(selector)
        await asyncio.sleep(random.uniform(0.3, 0.8))
        
        i = 0
        while i < len(text):
            char = text[i]
            # 1% 概率输入错误然后删除
            if random.random() < 0.01 and i > 0:
                wrong_char = random.choice('abcdefghijk')
                await page.keyboard.type(wrong_char)
                await asyncio.sleep(random.uniform(0.1, 0.3))
                await page.keyboard.press('Backspace')
                await asyncio.sleep(random.uniform(0.1, 0.2))
            
            await page.keyboard.type(char)
            # 变速打字：空格后稍慢
            delay = random.uniform(0.05, 0.2)
            if char == ' ':
                delay += random.uniform(0.05, 0.15)
            await asyncio.sleep(delay)
            i += 1
```

### 11. 完整登录流程封装

```python
async def safe_login(url, username, password):
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=False,
            args=['--disable-blink-features=AutomationControlled']
        )
        
        context = await browser.new_context(
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                       'AppleWebKit/537.36 (KHTML, like Gecko) '
                       'Chrome/120.0.0.0 Safari/537.36',
            viewport={'width': 1366, 'height': 768},
            locale='zh-CN',
            timezone_id='Asia/Shanghai',
            # 如需代理：
            # proxy={"server": "http://your-proxy:port"}
        )
        
        page = await context.new_page()
        
        # 注入反检测脚本
        await stealth_async(page)
        await setup_browser_fingerprint(page)
        
        sim = HumanBehaviorSimulator()
        
        # 访问页面前随机等待
        await sim.random_pause(1, 3)
        await page.goto(url, wait_until='networkidle')
        
        # 模拟阅读首页
        await sim.simulate_reading(page)
        await sim.random_scroll(page)
        
        # 输入账号
        await smart_click(page, '#username')
        await sim.random_pause(0.3, 0.8)
        await sim.human_type(page, '#username', username)
        
        await sim.random_pause(0.5, 1.5)
        
        # 输入密码
        await smart_click(page, '#password')
        await sim.random_pause(0.3, 0.6)
        await sim.human_type(page, '#password', password)
        
        await sim.random_pause(0.8, 2.0)
        
        # 点击登录
        await smart_click(page, '#login-btn')
        await page.wait_for_load_state('networkidle')
        
        # 登录成功后保存 session
        await context.storage_state(path='auth_state.json')
        
        return context, page
```


## 常见被检测点对照表

| 检测维度 | 风控信号 | 解决方案 |
|---------|---------|---------|
| JS 特征 | `navigator.webdriver = true` | stealth 插件 / 覆写属性 |
| 行为特征 | 点击精准、无鼠标轨迹 | 随机延迟 + 鼠标轨迹模拟 |
| 请求头 | 缺少正常 Headers | 设置完整 User-Agent |
| IP | 短时间高频请求 | 代理轮换 + 请求限速 |
| 环境 | 无 Canvas/WebGL 指纹 | 使用真实浏览器环境 |
| Session | 每次全新 Cookie | 持久化 storage_state |


## 终极方案对比

| 方案 | 效果 | 成本 | 适用场景 |
|------|------|------|---------|
| stealth 插件 | ⭐⭐⭐ | 低 | 普通风控 |
| 指纹伪装 + 行为模拟 | ⭐⭐⭐⭐ | 中 | 中等风控 |
| 真实代理 IP | ⭐⭐⭐⭐ | 中高 | IP 封锁 |
| 真实浏览器 Profile | ⭐⭐⭐⭐⭐ | 高 | 强风控 |
| 打码平台处理验证码 | ⭐⭐⭐⭐⭐ | 按需付费 | 含验证码 |

## 推荐优先级

1. **首选**：`playwright-stealth` + `headless=False` + 模拟人类行为
2. **中级**：持久化 Session，避免频繁重新登录
3. **高强度风控**：搭配真实代理 IP + 随机指纹

如果目标网站有特别强的风控（如滑块验证码 如**滑块验证码**、**图形验证码**、行为分析），可以进一步讨论针对性方案。


## 工具

以下是常用的检测工具网站，按检测维度分类：

## 综合指纹检测

| 网站 | 地址 | 特点 |
|------|------|------|
| BrowserLeaks | `browserleaks.com` | 最全面，涵盖所有维度 |
| CreepJS | `abrahamjuliot.github.io/creepjs` | 专注爬虫/自动化检测 |
| Pixelscan | `pixelscan.net` | 自动化工具专项检测 |
| Sannysoft | `bot.sannysoft.com` | Selenium/Playwright 专项 |
| Incolumitas | `bot.incolumitas.com` | 行为分析 + 指纹双检测 |

---

## IP / 代理检测

| 网站 | 地址 | 特点 |
|------|------|------|
| IP.SB | `ip.sb` | 简洁，显示真实 IP |
| ipinfo.io | `ipinfo.io` | 归属地、ASN、组织 |
| ipapi.co | `ipapi.co` | 详细地理位置 |
| Whoer | `whoer.net` | 匿名度评分 |
| IPLeak | `ipleak.net` | IP + DNS + WebRTC 泄露 |
| Scamalytics | `scamalytics.com` | IP 风险评分（风控视角）|

---

## WebRTC 泄露检测

| 网站 | 地址 | 特点 |
|------|------|------|
| BrowserLeaks WebRTC | `browserleaks.com/webrtc` | 最权威 |
| IPLeak WebRTC | `ipleak.net` | 同时检测 DNS 泄露 |
| Mullvad | `mullvad.net/check` | VPN 厂商出品，严格 |

---

## DNS 泄露检测

| 网站 | 地址 | 特点 |
|------|------|------|
| DNSLeakTest | `dnsleaktest.com` | 专项 DNS 检测 |
| DNS Checker | `dnschecker.org` | 全球 DNS 传播检测 |

---

## TLS 指纹检测

| 网站 | 地址 | 特点 |
|------|------|------|
| TLS Fingerprint | `tls.browserleaks.com` | JA3/JA4 指纹 |
| howsmyssl | `howsmyssl.com` | TLS 安全等级评估 |
| tlsfingerprint.io | `tlsfingerprint.io` | 实时 JA4 指纹 |

---

## 自动化/爬虫专项检测

| 网站 | 地址 | 检测重点 |
|------|------|---------|
| Sannysoft | `bot.sannysoft.com` | webdriver、插件、UA |
| CreepJS | `abrahamjuliot.github.io/creepjs` | 综合爬虫特征评分 |
| Rebrowser | `rebrowser.net/bot-detector` | 新兴，检测细节多 |
| Cloudflare | `cloudflare.com/cdn-cgi/trace` | CF 自身检测接口 |

---

## 推荐测试流程

```
测试裸 Playwright/Selenium
        ↓
browserleaks.com   →  查看完整指纹
bot.sannysoft.com  →  自动化特征
pixelscan.net      →  综合风险评分
ipleak.net         →  IP + WebRTC 泄露
        ↓
加上 stealth + 代理 后再次对比
        ↓
CreepJS 最终评分验证
```

**重点关注**：CreepJS 和 Pixelscan 最接近真实风控系统的检测逻辑，建议作为主要验收标准。

## 使用 playwright-stealth 后，你需要单独修改 Navigator 指纹吗

不需要单独修改，但有细节要了解：

### playwright-stealth 已覆盖的内容

`playwright-stealth` 本质是把 `puppeteer-extra-plugin-stealth` 移植过来的，默认注入以下脚本：

| 模块 | 覆盖内容 |
|------|---------|
| `navigator.webdriver` | 设为 `undefined` |
| `navigator.plugins` | 模拟真实插件列表 |
| `navigator.languages` | 注入语言列表 |
| `navigator.permissions` | 修复 Permission API |
| `chrome.runtime` | 注入 chrome 对象 |
| `WebGL` | 伪造渲染器信息 |
| `hairline` | 修复 1px 检测 |
| `iframe` | 修复 iframe 内 webdriver |

---

### 但仍需手动补充的场景

#### 1. 语言 / 时区与代理 IP 不匹配
```python
# stealth 不会自动匹配代理所在地区
# 需要在 context 层面设置
context = await browser.new_context(
    locale='zh-CN',
    timezone_id='Asia/Shanghai',
)
```

#### 2. Canvas / 音频指纹（stealth 覆盖较弱）
```python
# 需要手动加强
await page.add_init_script("""
    const orig = HTMLCanvasElement.prototype.toDataURL;
    HTMLCanvasElement.prototype.toDataURL = function() {
        const ctx = this.getContext('2d');
        if (ctx) {
            const img = ctx.getImageData(0, 0, this.width, this.height);
            for (let i = 0; i < img.data.length; i += 50) {
                img.data[i] ^= Math.floor(Math.random() * 3);
            }
            ctx.putImageData(img, 0, 0);
        }
        return orig.apply(this, arguments);
    };
""")
```

#### 3. headless 模式下 UserAgent 残留 `HeadlessChrome`
```python
# stealth 会处理，但建议显式指定更保险
context = await browser.new_context(
    user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
               'AppleWebKit/537.36 (KHTML, like Gecko) '
               'Chrome/120.0.0.0 Safari/537.36'
)
```

#### 4. WebRTC 真实 IP 泄露（stealth 不处理）
```python
# 必须手动禁用或用代理覆盖
await page.add_init_script("""
    const origRTC = window.RTCPeerConnection;
    window.RTCPeerConnection = function(config) {
        if (config && config.iceServers) config.iceServers = [];
        return new origRTC(config);
    };
""")
```

---

### 结论

```
playwright-stealth
        ↓
覆盖 80% 常见检测点（webdriver / plugins / chrome对象）
        ↓
仍需手动补充：
  ├── context 层：locale / timezone / userAgent
  ├── Canvas 指纹加噪
  ├── WebRTC 泄露屏蔽
  └── headless=False（终极保险）
```

**一句话**：stealth 是基础底座，高强度风控下还需配合 `context` 参数 + 少量手动脚本才能达到最佳效果。


## 使用 playwright-stealth 后，你需要单独模拟真实用户行为吗

需要，这是两个完全不同的层面：

### 两者的本质区别

```
playwright-stealth        用户行为模拟
      ↓                        ↓
  静态指纹伪装            动态行为特征
  （我是谁）              （我怎么操作）
```

| 维度 | playwright-stealth | 行为模拟 |
|------|-------------------|---------|
| 作用层 | JS 环境 / 浏览器指纹 | 鼠标、键盘、时序 |
| 检测方式 | 代码扫描 / 属性读取 | 行为分析 / 机器学习 |
| 能否互替 | ❌ | ❌ |
| 典型检测方 | Cloudflare Bot管理 | 网易易盾、数美、同盾 |

---

### 风控系统实际采集的行为数据

```javascript
// 真实风控 SDK 会采集这些维度
{
  mouse: {
    trajectory: [...],      // 完整轨迹坐标序列
    velocity: [...],        // 每段速度
    acceleration: [...],    // 加速度变化
    straightLineRatio: 0.98, // 接近1说明是直线移动 → 机器特征
    clickPressure: 0,       // 点击压力（移动端）
  },
  keyboard: {
    dwellTime: [...],       // 每键按下时长
    flightTime: [...],      // 键间时间间隔
    rhythm: "uniform",      // 节奏均匀 → 机器特征
  },
  scroll: {
    events: 0,              // 从不滚动 → 机器特征
    pattern: "instant",     // 瞬间到底 → 机器特征
  },
  timing: {
    loginPageDwell: 300,    // 停留300ms直接提交 → 机器特征
    formFillDuration: 150,  // 150ms填完表单 → 机器特征
  }
}
```

---

### stealth 管不了的行为层检测

#### 检测1：鼠标轨迹是否为直线
```python
# ❌ Playwright 默认行为 - 直接teleport，无轨迹
await page.click('#login-btn')

# ✅ 需要手动模拟曲线轨迹
await bezier_mouse_move(page, start_x, start_y, end_x, end_y)
await page.mouse.click(end_x, end_y)
```

#### 检测2：表单填写速度
```python
# ❌ 默认 fill() 是瞬间完成
await page.fill('#username', 'admin123')  # 0ms，机器特征

# ✅ 需要逐字符模拟
for char in 'admin123':
    await page.keyboard.type(char)
    await asyncio.sleep(random.uniform(0.08, 0.20))
```

#### 检测3：页面停留时间
```python
# ❌ 打开页面立刻操作
await page.goto('https://target.com/login')
await page.click('#username')  # 立刻点击，机器特征

# ✅ 模拟人类浏览停顿
await page.goto('https://target.com/login')
await asyncio.sleep(random.uniform(1.5, 3.5))  # 先"看"一下页面
await page.mouse.move(random.randint(300,800), random.randint(200,500))
await asyncio.sleep(random.uniform(0.5, 1.2))
await page.click('#username')
```

#### 检测4：有无滚动行为
```python
# ❌ stealth 不会自动滚动
# 风控系统：用户从不滚动 = 机器人

# ✅ 登录前随机滚动
await page.evaluate("window.scrollBy(0, 300)")
await asyncio.sleep(random.uniform(0.8, 1.5))
await page.evaluate("window.scrollBy(0, -150)")
```

---

### 完整结论

```
单独用 stealth
    能过：静态扫描型风控（检查 navigator.webdriver）
    过不了：行为分析型风控（数美、同盾、易盾）

单独用行为模拟
    能过：简单行为检测
    过不了：浏览器指纹检测（仍暴露 webdriver）

两者结合
    能过：绝大多数商业风控系统
    仍需补充：强验证码、设备信誉积累
```

**一句话**：stealth 负责"看起来像真浏览器"，行为模拟负责"用起来像真人"，缺一不可。

## 使用 playwright-stealth 后，你需要单独修改配置真实浏览器环境吗

需要，原因和上面一样，是不同层面的事：

### 三层防护的职责边界

```
playwright-stealth          浏览器环境配置          行为模拟
        ↓                         ↓                    ↓
   JS属性伪装              启动参数/上下文            动态操作
  （navigator等）         （UA/分辨率/代理等）       （鼠标/键盘）
```

---

### stealth 覆盖 vs 环境配置覆盖

| 配置项 | stealth 是否处理 | 需要手动配置 |
|-------|----------------|------------|
| `navigator.webdriver` | ✅ | ❌ |
| `navigator.plugins` | ✅ | ❌ |
| `chrome.runtime` | ✅ | ❌ |
| User-Agent | ⚠️ 部分 | ✅ 建议显式设置 |
| 分辨率 / viewport | ❌ | ✅ |
| 语言 / locale | ❌ | ✅ |
| 时区 | ❌ | ✅ |
| 代理 IP | ❌ | ✅ |
| WebRTC | ❌ | ✅ |
| Cookie / Storage | ❌ | ✅ |
| 启动参数 args | ❌ | ✅ |

---

### 必须手动配置的部分

#### 1. 启动参数（launch 层）
```python
# stealth 不处理这层
browser = await p.chromium.launch(
    headless=False,  # 优先有头模式
    args=[
        '--disable-blink-features=AutomationControlled',  # 最关键
        '--no-sandbox',
        '--disable-infobars',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--window-size=1366,768',
    ]
)
```

#### 2. Context 上下文（context 层）
```python
# stealth 完全不涉及这层
context = await browser.new_context(
    # UA 与下面的 viewport 要匹配，不能乱搭
    user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
               'AppleWebKit/537.36 (KHTML, like Gecko) '
               'Chrome/120.0.0.0 Safari/537.36',
    viewport={'width': 1366, 'height': 768},

    # 语言时区要与代理 IP 所在地匹配
    locale='zh-CN',
    timezone_id='Asia/Shanghai',

    # 地理位置
    geolocation={'latitude': 31.23, 'longitude': 121.47},
    permissions=['geolocation'],

    # 代理
    proxy={'server': 'http://your-proxy:port'},

    # 持久化 session
    storage_state='auth.json',  # 如有
)
```

#### 3. stealth 注入时机必须在 context 之后、goto 之前
```python
page = await context.new_page()

# ✅ 正确顺序
await stealth_async(page)       # 先注入 stealth
await page.goto('https://...')  # 再访问页面

# ❌ 错误：goto 后注入已经来不及
await page.goto('https://...')
await stealth_async(page)
```

---

### 典型的不匹配问题

```python
# ❌ 危险组合：UA 是 Windows 但时区是 America/New_York，
#    分辨率是 1920x1080 但代理是上海 IP
context = await browser.new_context(
    user_agent='...Windows...',
    timezone_id='America/New_York',   # 与代理 IP 地区不符
    locale='en-US',                   # 与 UA 语言不符
    viewport={'width': 1920, 'height': 1080},
)
# 风控系统：各维度互相矛盾 → 判定为异常

# ✅ 正确：所有维度自洽
context = await browser.new_context(
    user_agent='...Windows NT 10.0...Chrome/120...',
    timezone_id='Asia/Shanghai',      # 与代理 IP（上海）匹配
    locale='zh-CN',                   # 与时区匹配
    viewport={'width': 1366, 'height': 768},  # 常见分辨率
)
```

---

### 完整配置模板

```python
async def create_context(playwright):
    browser = await playwright.chromium.launch(
        headless=False,
        args=[
            '--disable-blink-features=AutomationControlled',
            '--no-sandbox',
            '--window-size=1366,768',
        ]
    )

    context = await browser.new_context(
        user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                   'AppleWebKit/537.36 (KHTML, like Gecko) '
                   'Chrome/120.0.0.0 Safari/537.36',
        viewport={'width': 1366, 'height': 768},
        locale='zh-CN',
        timezone_id='Asia/Shanghai',
        geolocation={'latitude': 31.23, 'longitude': 121.47},
        permissions=['geolocation'],
        proxy={'server': 'http://proxy:port'},
    )

    page = await context.new_page()
    await stealth_async(page)  # stealth 最后注入
    return context, page
```

---

### 结论

```
stealth         →  修JS属性，让"检测代码读到正确的值"
环境配置         →  修浏览器底层，让"整体环境自洽可信"

缺少环境配置的后果：
  ├── UA 与系统特征不匹配 → 被识别
  ├── 时区与 IP 不一致   → 被识别
  ├── headless 特征残留  → 被识别
  └── 无代理直接暴露真实 IP → 被封锁
```

**一句话**：stealth 是化妆，环境配置是换衣服，两件事都得做，缺一都会露馅。

## 使用 playwright-stealth 后，你需要修改Canvas / WebGL 指纹混淆吗

需要手动加强，但程度取决于风控强度：

### stealth 对 Canvas/WebGL 的覆盖情况

```
playwright-stealth 源码实际包含的模块：

✅ webdriver          - 完整覆盖
✅ chrome.runtime     - 完整覆盖  
✅ navigator.plugins  - 完整覆盖
✅ navigator.permissions - 完整覆盖
⚠️ WebGL             - 仅伪造 Vendor/Renderer 字符串
⚠️ Canvas            - 基本未处理
❌ Canvas 噪点        - 不处理
❌ Canvas toBlob      - 不处理
❌ WebGL 参数枚举      - 不处理
❌ WebGL 扩展列表      - 不处理
❌ 音频指纹            - 不处理
```

---

### stealth 处理了什么 vs 没处理什么

#### WebGL：只改了两个字符串
```javascript
// stealth 源码实际只做了这些
getParameter(37445) → 'Intel Inc.'           // UNMASKED_VENDOR
getParameter(37446) → 'Intel Iris OpenGL...' // UNMASKED_RENDERER

// ❌ 没有处理的：
getParameter(35724)  // SHADING_LANGUAGE_VERSION
getParameter(7936)   // VENDOR
getParameter(7937)   // RENDERER
getParameter(7938)   // VERSION
getSupportedExtensions()  // 扩展列表
getShaderPrecisionFormat() // 精度信息
```

#### Canvas：基本未处理
```javascript
// stealth 对 Canvas 几乎没有处理
// toDataURL()    → 原始值，可被采集
// toBlob()       → 原始值，可被采集
// getImageData() → 原始值，可被采集
```

---

### 什么情况下必须手动加强

```
普通网站登录（无专业风控）
        ↓
    stealth 足够，不需要额外处理

━━━━━━━━━━━━━━━━━━━━━━━━━━

中等风控（网易、京东、微博）
        ↓
    需要加强 Canvas 噪点 + WebGL 参数

━━━━━━━━━━━━━━━━━━━━━━━━━━

强风控（数美、同盾、易盾、Cloudflare）
        ↓
    Canvas + WebGL + 音频 + 字体 全部需要处理
```

---

### 手动加强的完整代码

#### Canvas 指纹加噪
```python
await page.add_init_script("""
(() => {
    // toDataURL 加噪
    const origToDataURL = HTMLCanvasElement.prototype.toDataURL;
    HTMLCanvasElement.prototype.toDataURL = function(type, quality) {
        const ctx = this.getContext('2d');
        if (ctx) {
            const imgData = ctx.getImageData(0, 0, this.width, this.height);
            // 细微噪点，人眼不可见但指纹不同
            for (let i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i]   += Math.floor(Math.random() * 3) - 1; // R
                imgData.data[i+1] += Math.floor(Math.random() * 3) - 1; // G
                imgData.data[i+2] += Math.floor(Math.random() * 3) - 1; // B
            }
            ctx.putImageData(imgData, 0, 0);
        }
        return origToDataURL.apply(this, arguments);
    };

    // toBlob 同样处理
    const origToBlob = HTMLCanvasElement.prototype.toBlob;
    HTMLCanvasElement.prototype.toBlob = function(callback, ...args) {
        const ctx = this.getContext('2d');
        if (ctx) {
            const imgData = ctx.getImageData(0, 0, this.width, this.height);
            for (let i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i]   += Math.floor(Math.random() * 3) - 1;
                imgData.data[i+1] += Math.floor(Math.random() * 3) - 1;
            }
            ctx.putImageData(imgData, 0, 0);
        }
        return origToBlob.call(this, callback, ...args);
    };
})();
""")
```

#### WebGL 完整参数伪造
```python
await page.add_init_script("""
(() => {
    const getParam = WebGLRenderingContext.prototype.getParameter;
    WebGLRenderingContext.prototype.getParameter = function(param) {
        const overrides = {
            37445: 'Intel Inc.',
            37446: 'Intel(R) Iris(TM) Plus Graphics 640',
            35724: 'WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)',
            7936:  'WebKit',
            7937:  'WebKit WebGL',
            7938:  'WebGL 1.0 (OpenGL ES 2.0 Chromium)',
            3379:  16384,   // MAX_TEXTURE_SIZE
            36347: 1024,    // MAX_VERTEX_UNIFORM_VECTORS
            36348: 16,      // MAX_FRAGMENT_UNIFORM_VECTORS
            34076: 16384,   // MAX_CUBE_MAP_TEXTURE_SIZE
            34024: 16,      // MAX_TEXTURE_IMAGE_UNITS
        };
        return overrides[param] !== undefined
            ? overrides[param]
            : getParam.apply(this, arguments);
    };

    // WebGL2 同样处理
    if (window.WebGL2RenderingContext) {
        const getParam2 = WebGL2RenderingContext.prototype.getParameter;
        WebGL2RenderingContext.prototype.getParameter = function(param) {
            const overrides = {
                37445: 'Intel Inc.',
                37446: 'Intel(R) Iris(TM) Plus Graphics 640',
            };
            return overrides[param] !== undefined
                ? overrides[param]
                : getParam2.apply(this, arguments);
        };
    }
})();
""")
```

#### 音频指纹混淆
```python
await page.add_init_script("""
(() => {
    const origGetChannelData = AudioBuffer.prototype.getChannelData;
    AudioBuffer.prototype.getChannelData = function() {
        const data = origGetChannelData.apply(this, arguments);
        // 每隔一段加极小噪点，不影响听感
        for (let i = 0; i < data.length; i += 200) {
            data[i] += Math.random() * 0.00001;
        }
        return data;
    };
})();
""")
```

---

### 加强前后的检测对比

```
browserleaks.com/canvas 检测结果：

加强前（只用 stealth）：
  Canvas 指纹: a3f2c8d1...（固定值，每次相同）
  WebGL Vendor: Intel Inc.（stealth改了）
  WebGL Renderer: Intel Iris...（stealth改了）
  WebGL 扩展: 暴露真实列表

加强后：
  Canvas 指纹: 每次不同（噪点随机）
  WebGL Vendor: Intel Inc.
  WebGL Renderer: Intel(R) Iris(TM) Plus Graphics 640
  WebGL 参数: 全部符合目标设备
```

---

### 结论

```
只用 stealth
  ├── WebGL Vendor/Renderer → ✅ 已伪造
  ├── WebGL 其他参数        → ❌ 暴露真实值
  ├── Canvas 指纹           → ❌ 固定可追踪
  └── 音频指纹              → ❌ 暴露真实值

需要手动补充的优先级：
  高频风控  →  Canvas 噪点（最常被检测）
  中频风控  →  WebGL 完整参数
  强风控    →  音频指纹 + 字体列表
```

**一句话**：stealth 只改了 WebGL 的门面，Canvas 几乎没动，面对专业风控系统必须手动补强。


## 使用 playwright-stealth 后，你需要浏览器指纹伪装吗

需要，原因和前面几个问题一致，是不同层面：

### stealth 的指纹伪装边界

```
playwright-stealth 本质：
修改 JS 可读属性
        ↓
只能影响「JS 层面」的指纹
        ↓
无法影响「网络层 / 系统层 / 行为层」指纹
```

---

### 完整指纹维度 vs stealth 覆盖率

| 指纹维度 | 具体内容 | stealth 覆盖 |
|---------|---------|-------------|
| **JS 环境** | navigator.webdriver | ✅ 完整 |
| **JS 环境** | navigator.plugins | ✅ 完整 |
| **JS 环境** | chrome.runtime | ✅ 完整 |
| **JS 环境** | navigator.permissions | ✅ 完整 |
| **WebGL** | Vendor / Renderer | ⚠️ 仅两个字段 |
| **Canvas** | 2D 绘图指纹 | ❌ 未处理 |
| **音频** | AudioContext 指纹 | ❌ 未处理 |
| **字体** | 系统字体枚举 | ❌ 未处理 |
| **屏幕** | 分辨率 / 色深 | ❌ 未处理 |
| **TLS** | JA3 / JA4 握手指纹 | ❌ 完全不涉及 |
| **HTTP** | 请求头顺序 / 大小写 | ❌ 完全不涉及 |
| **WebRTC** | 真实 IP 泄露 | ❌ 完全不涉及 |
| **设备** | 硬件并发数 / 内存 | ❌ 未处理 |
| **行为** | 鼠标轨迹 / 键盘节奏 | ❌ 完全不涉及 |

---

### 各层指纹需要的额外处理

#### 1. 屏幕 / 硬件指纹
```python
await page.add_init_script("""
(() => {
    // 硬件并发数（CPU核心数）
    Object.defineProperty(navigator, 'hardwareConcurrency', {
        get: () => 8
    });

    // 设备内存
    Object.defineProperty(navigator, 'deviceMemory', {
        get: () => 8
    });

    // 屏幕分辨率（需与 viewport 一致）
    Object.defineProperty(screen, 'width',       { get: () => 1366 });
    Object.defineProperty(screen, 'height',      { get: () => 768  });
    Object.defineProperty(screen, 'availWidth',  { get: () => 1366 });
    Object.defineProperty(screen, 'availHeight', { get: () => 728  });
    Object.defineProperty(screen, 'colorDepth',  { get: () => 24   });
    Object.defineProperty(screen, 'pixelDepth',  { get: () => 24   });

    // 设备像素比
    Object.defineProperty(window, 'devicePixelRatio', {
        get: () => 1
    });
})();
""")
```

#### 2. 字体指纹
```python
await page.add_init_script("""
(() => {
    // 拦截字体枚举，返回固定的常见字体列表
    const allowedFonts = [
        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
        'Georgia', 'Impact', 'Times New Roman', 'Trebuchet MS',
        'Verdana', 'Microsoft YaHei', 'SimSun', 'SimHei'
    ];

    const origCheck = document.fonts.check.bind(document.fonts);
    document.fonts.check = function(font, text) {
        const family = font.replace(/\\d+px\\s+/, '').replace(/['"]/g, '');
        if (allowedFonts.includes(family)) return true;
        if (['monospace','sans-serif','serif'].includes(family)) return true;
        return false;
    };
})();
""")
```

#### 3. WebRTC 泄露屏蔽
```python
await page.add_init_script("""
(() => {
    // 完全禁用 WebRTC 防止真实 IP 泄露
    const noOp = () => {};
    const fakePC = function() {
        return {
            createDataChannel: noOp,
            createOffer: () => Promise.resolve(),
            setLocalDescription: noOp,
            close: noOp,
        };
    };
    window.RTCPeerConnection        = fakePC;
    window.webkitRTCPeerConnection  = fakePC;
    window.mozRTCPeerConnection     = fakePC;
})();
""")
```

#### 4. TLS 指纹（网络层，JS 无法处理）
```python
# stealth 完全无法影响 TLS 层
# 必须换工具解决

# 方案A：使用 curl_cffi 发请求（模拟 Chrome TLS 指纹）
from curl_cffi import requests
session = requests.Session(impersonate="chrome120")

# 方案B：配置真实 Chrome 的 TLS 设置
# 通过 launch 参数控制
browser = await p.chromium.launch(
    args=['--ssl-version-min=tls1.2']
)
```

#### 5. HTTP 请求头指纹
```python
# stealth 不处理请求头顺序
# 需要在 context 层面设置完整的请求头

context = await browser.new_context(
    extra_http_headers={
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'sec-ch-ua': '"Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
    }
)
```

---

### 各维度自洽性检查

```
❌ 典型错误组合（互相矛盾会被识别）：

UA        = Windows Chrome 120
locale    = zh-CN
timezone  = Asia/Shanghai
但是：
hardwareConcurrency = 2   ← 现代电脑不可能只有2核
deviceMemory        = 0.5 ← 极低内存，异常
screen.width        = 800 ← 与1366的viewport不符
WebGL Renderer      = 苹果GPU ← 但UA是Windows

✅ 正确：所有维度保持自洽

UA         = Windows NT 10.0, Chrome 120
viewport   = 1366 x 768
screen     = 1366 x 768, colorDepth=24
hardware   = 8核, 8GB内存
locale     = zh-CN
timezone   = Asia/Shanghai
WebGL      = Intel Windows 显卡
fonts      = Windows 常见字体
```

---

### 完整加强模板

```python
async def full_fingerprint_setup(page, context):

    # 1. stealth 基础层
    await stealth_async(page)

    # 2. 硬件 / 屏幕指纹
    await page.add_init_script(HARDWARE_SCRIPT)

    # 3. Canvas / WebGL / 音频指纹
    await page.add_init_script(CANVAS_SCRIPT)
    await page.add_init_script(WEBGL_SCRIPT)
    await page.add_init_script(AUDIO_SCRIPT)

    # 4. 字体指纹
    await page.add_init_script(FONT_SCRIPT)

    # 5. WebRTC 屏蔽
    await page.add_init_script(WEBRTC_SCRIPT)

    # context 层（网络 / 系统层）
    # 已在 new_context() 时配置：
    # user_agent / viewport / locale /
    # timezone / proxy / extra_http_headers
```

---

### 结论

```
stealth 覆盖的指纹：
  JS 环境属性（webdriver / plugins / chrome对象）
  约占完整指纹体系的 20%

需要手动补充的指纹：
  ├── 屏幕 / 硬件          → add_init_script
  ├── Canvas / 音频 / 字体 → add_init_script  
  ├── WebRTC              → add_init_script
  ├── HTTP 请求头          → new_context 参数
  └── TLS 握手            → curl_cffi 或真实Chrome

所有维度必须互相自洽，
单点伪造反而会暴露异常。
```

**一句话**：stealth 只解决了入门级检测，完整指纹伪装需要覆盖 JS / 网络 / 系统三层，且所有维度必须自洽，否则局部伪造比不伪造更容易被识别。

## 使用 playwright-stealth 后，你需要随机化请求时序和页面行为吗

需要，这是 stealth 完全不涉及的维度：

### 直接看 stealth 源码模块

```
playwright-stealth 的所有模块：

utils.py
chrome.app.js
chrome.csi.js
chrome.loadTimes.js
chrome.runtime.js
iframe.contentWindow.js
media.codecs.js
navigator.hardwareConcurrency.js
navigator.languages.js
navigator.permissions.js
navigator.plugins.js
navigator.vendor.js
navigator.webdriver.js          ← 最核心
sourceurl.js
webgl.vendor.js
window.outerdimensions.js

━━━━━━━━━━━━━━━━━━━━━━━━
没有任何一个模块涉及：
❌ 请求时序
❌ 页面停留时间
❌ 鼠标移动
❌ 键盘节奏
❌ 滚动行为
❌ 表单填写速度
```

---

### 风控系统的时序 / 行为采集维度

```javascript
// 真实风控 SDK（数美、同盾、易盾）实际采集内容：
{
    timing: {
        pageLoadToFirstClick:  150,    // 150ms就开始操作 → 机器
        formFillDuration:      200,    // 200ms填完表单   → 机器
        submitAfterFill:       50,     // 填完立刻提交    → 机器
        totalPageDwell:        800,    // 只停留0.8秒     → 机器
    },
    mouse: {
        eventCount:            0,      // 从无鼠标事件    → 机器
        trajectoryPoints:      [],     // 空轨迹          → 机器
        clickPositionVariance: 0,      // 每次点同一像素  → 机器
        moveBeforeClick:       false,  // 直接点击无移动  → 机器
    },
    keyboard: {
        avgDwellTime:    0,            // 按键无停留      → 机器
        avgFlightTime:   0,            // 键间无间隔      → 机器
        rhythmVariance:  0,            // 节奏完全均匀    → 机器
        hasBackspace:    false,        // 从不出错        → 机器
    },
    scroll: {
        totalEvents:     0,            // 从不滚动        → 机器
        pattern:        'instant',     // 瞬间到底        → 机器
        direction:      'down-only',   // 只往下滚        → 机器
    }
}
```

---

### 必须手动处理的时序场景

#### 1. 页面加载后的停留时间
```python
# ❌ 默认行为：加载完立刻操作
await page.goto('https://target.com/login')
await page.click('#username')  # 风控：0ms后操作 = 机器

# ✅ 模拟人类：先"看"页面
await page.goto('https://target.com/login')
await asyncio.sleep(random.uniform(1.5, 4.0))  # 人类需要时间看页面

# 期间随机移动鼠标（模拟视线扫描）
for _ in range(random.randint(2, 4)):
    await page.mouse.move(
        random.randint(200, 1000),
        random.randint(100, 500)
    )
    await asyncio.sleep(random.uniform(0.3, 0.8))
```

#### 2. 表单填写节奏
```python
# ❌ 默认：瞬间填完
await page.fill('#username', 'admin@example.com')  # 0ms

# ✅ 逐字符 + 变速 + 偶发错误
async def human_type(page, selector, text):
    await page.click(selector)
    await asyncio.sleep(random.uniform(0.3, 0.8))  # 点击后思考

    i = 0
    while i < len(text):
        # 偶发输错后删除
        if random.random() < 0.03:
            wrong = random.choice('qwertyuiop')
            await page.keyboard.type(wrong)
            await asyncio.sleep(random.uniform(0.1, 0.3))
            await page.keyboard.press('Backspace')
            await asyncio.sleep(random.uniform(0.08, 0.15))

        await page.keyboard.type(text[i])

        # 变速：空格/标点后停顿更久
        if text[i] in ' @._-':
            delay = random.uniform(0.15, 0.35)
        else:
            delay = random.uniform(0.06, 0.18)
        await asyncio.sleep(delay)
        i += 1

    # 填完后停顿，不要立刻跳下一个字段
    await asyncio.sleep(random.uniform(0.4, 1.0))
```

#### 3. 字段间切换节奏
```python
# ❌ 默认：立刻切换
await page.fill('#username', 'user')
await page.fill('#password', 'pass')  # 无停顿

# ✅ 模拟人类：填完一个字段后停顿
await human_type(page, '#username', 'user@example.com')

# 人类会停一下，看看填的对不对
await asyncio.sleep(random.uniform(0.5, 1.5))

# 有时用 Tab 切换，有时用鼠标点击
if random.random() > 0.5:
    await page.keyboard.press('Tab')
    await asyncio.sleep(random.uniform(0.2, 0.5))
else:
    await smart_click(page, '#password')

await human_type(page, '#password', 'mypassword')
```

#### 4. 提交前的停顿
```python
# ❌ 默认：填完立刻提交
await page.fill('#password', 'pass')
await page.click('#submit')  # 风控：0ms后提交 = 机器

# ✅ 模拟检查行为
await human_type(page, '#password', 'mypassword')
await asyncio.sleep(random.uniform(0.8, 2.5))  # 人类会回看一眼

# 有时鼠标会先移到提交按钮上悬停
submit = page.locator('#submit')
box = await submit.bounding_box()
await page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
await asyncio.sleep(random.uniform(0.2, 0.6))  # 悬停犹豫
await page.mouse.click(box['x'] + box['width']/2, box['y'] + box['height']/2)
```

#### 5. 滚动行为
```python
# ❌ 默认：从不滚动
# 风控：用户从不滚动 = 机器人

# ✅ 登录前随机滚动，模拟浏览页面
async def random_scroll(page):
    scroll_count = random.randint(1, 3)
    for _ in range(scroll_count):
        distance = random.randint(100, 400)
        await page.evaluate(f"window.scrollBy({{top: {distance}, behavior: 'smooth'}})")
        await asyncio.sleep(random.uniform(0.6, 1.8))

    # 有时往回滚
    if random.random() > 0.6:
        back = random.randint(50, 200)
        await page.evaluate(f"window.scrollBy({{top: -{back}, behavior: 'smooth'}})")
        await asyncio.sleep(random.uniform(0.4, 1.0))
```

---

### 完整时序流程

```python
async def human_login(page, username, password):

    # 1. 页面加载后先停留
    await page.goto('https://target.com/login', wait_until='networkidle')
    await asyncio.sleep(random.uniform(1.5, 3.5))

    # 2. 随机滚动（模拟浏览）
    await random_scroll(page)

    # 3. 鼠标扫视
    for _ in range(random.randint(2, 4)):
        await page.mouse.move(
            random.randint(300, 900),
            random.randint(200, 500)
        )
        await asyncio.sleep(random.uniform(0.2, 0.6))

    # 4. 点击用户名（贝塞尔曲线移动）
    await bezier_click(page, '#username')
    await asyncio.sleep(random.uniform(0.3, 0.7))

    # 5. 变速打字
    await human_type(page, '#username', username)

    # 6. 字段间停顿
    await asyncio.sleep(random.uniform(0.6, 1.5))

    # 7. 切换到密码框
    await bezier_click(page, '#password')
    await asyncio.sleep(random.uniform(0.2, 0.5))

    # 8. 输入密码（稍慢，像在回忆）
    await human_type(page, '#password', password)

    # 9. 提交前停顿（像在检查）
    await asyncio.sleep(random.uniform(1.0, 2.5))

    # 10. 点击提交
    await bezier_click(page, '#submit-btn')
    await page.wait_for_load_state('networkidle')
```

---

### 结论

```
stealth 解决的问题：
    浏览器"是什么"  →  静态指纹

时序 / 行为解决的问题：
    用户"怎么用"    →  动态特征

两者被不同系统检测：
    stealth     →  对抗 JS 扫描型风控
    行为时序     →  对抗 ML 行为分析型风控（数美/同盾）

缺少行为时序的后果：
  ├── 表单 200ms 填完    → 直接封号
  ├── 无鼠标轨迹         → 行为异常告警
  ├── 无滚动事件         → 机器人标记
  └── 提交间隔为 0ms     → 触发验证码
```

**一句话**：stealth 让你看起来像真浏览器，行为时序让你用起来像真人，现代风控两者都查，缺一必被识别。

## claudflare 使用了哪些风控技术

以下是 Cloudflare 风控技术的完整详解：

### Cloudflare 风控技术体系全景

```
Cloudflare 风控分为四大层：

网络层          传输层          JS层           行为层
  ↓               ↓              ↓              ↓
IP信誉         TLS指纹        浏览器指纹      行为分析
ASN检测        HTTP/2帧       JS注入检测      ML评分
```

---

### 第一层：网络层检测（请求到达前）

#### IP 信誉评分
Cloudflare 维护着一个设备、IP 地址和行为模式的目录，已知与恶意僵尸网络相关联的 IP 会被自动封锁或面临额外挑战。IP 信誉评分基于地理位置、ISP 和历史记录等因素，数据中心或已知 VPN 提供商的 IP 信誉远低于住宅 IP。

```
IP 分级：
住宅 IP     →  高信誉，基本放行
VPN IP      →  中低信誉，触发挑战
数据中心 IP →  低信誉，大概率封锁
代理 IP     →  视类型，商业代理已被大量标记
```

---

### 第二层：传输层检测（握手阶段）

#### TLS 指纹：JA3 / JA4
JA3 通过对 TLS ClientHello 中的密码套件顺序、支持的扩展、椭圆曲线和签名算法进行哈希生成唯一标识符，JA4 是更新的方案，在随机化扩展顺序时更稳定，并添加了更多 HTTP 和 QUIC 上下文。反机器人厂商和 CDN（包括 Cloudflare、Akamai、DataDome）都维护着 JA3/JA4 指纹数据库：正常 Windows 10 上的 Chrome 122 指纹会被白名单放行，而 Python requests 默认 OpenSSL 指纹极有可能被封锁。关键在于：TLS 指纹检测发生在任何 HTTP 头或 JavaScript 运行之前，因此无法通过修改应用层指纹来绕过。

JA4 通过对 ClientHello 扩展进行排序并减少现代浏览器唯一指纹的总数来新增功能，JA3 和 JA4 指纹仅对购买了 Bot Management 的企业客户可用。

#### HTTP/2 帧指纹
HTTP/2 的 SETTINGS 帧、WINDOW_UPDATE 增量以及 HEADERS 帧伪头顺序在不同浏览器实现中各不相同，Akamai 的 HTTP/2 指纹检测可以识别出那些呈现完美 Chrome User-Agent 和 JA4 但 HTTP/2 帧布局不匹配的机器人。

```
Python requests   → HTTP/1.1，无 HTTP/2 特征
Playwright 默认   → HTTP/2 但帧参数异常
真实 Chrome      → 标准 HTTP/2 帧布局
```

---

### 第三层：JS 注入检测层

#### 四大检测引擎

Cloudflare 使用多个检测引擎是因为不同类型的机器人需要不同的检测策略：简单机器人可以通过已知签名的模式匹配来捕获，而复杂机器人则需要机器学习和行为分析。

启发式引擎处理所有请求，对请求进行一系列启发式检查来识别自动化流量，并将请求与不断增长的恶意指纹数据库进行匹配。JavaScript 检测引擎（JSD）识别无头浏览器和其他恶意指纹，在客户端对任何请求执行轻量级、不可见的 JavaScript 注入。机器学习引擎占所有检测的大多数，通过监测数十亿日常请求，使用监督学习方法确定最终的 Bot Score（1-99）。

```
四引擎协作流程：

请求进入
    ↓
启发式引擎 → 匹配已知恶意指纹 → 直接封锁(bot score=1)
    ↓（未匹配）
JSD引擎   → 注入JS采集浏览器信号 → pass/fail
    ↓
ML引擎    → 综合所有信号打分 1-99
    ↓
Bot Score < 30  → 放行
Bot Score 30-70 → Turnstile挑战
Bot Score > 70  → 封锁
```

#### JSD 具体采集内容
当启用时，Cloudflare 将 JavaScript 片段注入到 HTML 响应中以收集客户端信号，与挑战页面不同，JavaScript 检测在每个 HTML 请求上运行，不会暂停或中断访问者。它填充一个通过/失败结果，可以通过 WAF 自定义规则来处理。浏览器扩展修改用户代理值或 Canvas、WebGL 等 Web API 会影响检测结果。

---

### 第四层：Turnstile 挑战系统

#### 工作原理
Turnstile 根据个别访客或浏览器调整挑战结果。首先运行一系列小型非交互式 JavaScript 挑战来收集访客或浏览器环境的信号，这些挑战包括工作量证明（计算谜题）、空间证明、探测 Web API，以及各种检测浏览器特性和人类行为的挑战。因此，可以针对特定请求微调挑战难度，避免向用户显示视觉或交互式谜题。

#### 三种模式
```
Managed（托管）    → 自动判断，低风险直接放行，高风险显示复选框
Non-interactive   → 访客永远不需要交互
Invisible         → 完全隐藏，全后台验证
```

#### Token 验证机制
Turnstile 分两步工作：JavaScript 组件在访客浏览器中运行挑战并生成 token，然后服务器将该 token 发送给 Cloudflare 进行验证。Token 在 300 秒（5 分钟）后过期，每个 token 只能验证一次，过期或已使用的 token 必须用新的挑战替换。

---

### 第五层：ML 行为分析

#### 训练数据规模
Cloudflare 的机器学习基于每天数千亿次请求的精选子集进行训练，为每个请求创建可靠的机器人评分，分析流量中的行为并检测网络流量如何偏离基线的异常情况。

#### 启发式规则库（2025年最新）
在 Cloudflare 的机器人检测中，从软件库指纹、HTTP 请求特征和内部威胁情报等属性构建启发式规则，用于机器人识别、训练 ML 模型，以及为新模型创建高置信度的标注数据集。监控登录尝试和失败的检测 ID 将在 2025 年晚些时候开始影响机器人评分，检测 ID 201326592 监控异常登录失败上升（通常与暴力破解相关），ID 201326593 监控登录尝试异常上升（通常与撞库攻击相关）。

### 跨站指纹追踪
自 2025 年 6 月以来，Cloudflare 的机器人检测安全分析师编写了 50 条启发式规则，通过包括 HTTP/2 指纹和 Client Hello 扩展在内的各种信号来捕获机器人。通过观察数百万个网站的流量，Cloudflare 建立了常见浏览器和良性设备合法指纹的基线，当一个新的独特指纹突然出现在许多不同网站上时，这是分布式僵尸网络或新自动化工具的明显信号，使分析师能够封锁该机器人的签名本身，无论其使用多少个不同的 IP 地址。

---

### 完整风控流程图

```
用户请求
    │
    ▼
┌─────────────────┐
│   网络层         │  IP信誉 / ASN / 代理检测
│   (毫秒级)       │  → 黑名单直接封锁
└────────┬────────┘
         │
    ▼
┌─────────────────┐
│   传输层         │  TLS JA3/JA4指纹
│   (握手阶段)     │  HTTP/2 帧特征
└────────┬────────┘
         │
    ▼
┌─────────────────┐
│   HTTP头层       │  UA合法性
│                 │  Header顺序/完整性
│                 │  sec-ch-ua匹配验证
└────────┬────────┘
         │
    ▼
┌─────────────────┐
│   JS注入层       │  navigator检测
│   (JSD引擎)     │  Canvas/WebGL指纹
│                 │  headless特征
│                 │  Web API探测
└────────┬────────┘
         │
    ▼
┌─────────────────┐
│   行为分析层     │  鼠标轨迹
│   (ML引擎)      │  键盘节奏
│                 │  页面停留时间
│                 │  滚动模式
└────────┬────────┘
         │
    ▼
   Bot Score 1-99
    │         │
   <30        >70
    │         │
   放行      封锁/Turnstile挑战
```

---

### 各检测层对应的绕过难度

| 检测层 | 技术手段 | 绕过难度 | 绕过方案 |
|-------|---------|---------|---------|
| IP 信誉 | ASN/黑名单 | ★★☆ | 住宅代理 |
| TLS 指纹 | JA3/JA4 | ★★★ | curl_cffi / 真实Chrome |
| HTTP/2 帧 | 帧格式检测 | ★★★ | 真实浏览器内核 |
| JS 环境 | navigator检测 | ★★☆ | playwright-stealth |
| Canvas/WebGL | 指纹采集 | ★★★ | 手动混淆脚本 |
| 行为分析 | ML模型评分 | ★★★★ | 行为模拟 |
| Turnstile | 综合挑战 | ★★★★★ | 打码平台/真人浏览器 |

**一句话总结**：Cloudflare 是多层防御体系，stealth 只能对抗 JS 环境层，TLS 指纹、行为分析、Turnstile 挑战三层必须用不同手段分别应对，没有单一工具能通吃所有层。

