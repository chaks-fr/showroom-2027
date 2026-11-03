# CHAKS — Invitation multilingue FR / DE / IT / EN

基于无刮刮乐版本，包含四种语言的海报、网页文案、预约按钮和 slogan。

## 更新现有 GitHub 网站

1. 解压 ZIP。
2. 把以下项目全部上传到 GitHub 仓库根目录，覆盖同名文件并保留 assets 文件夹结构：
   - index.html
   - styles.css
   - translations.js（新增）
   - languages.js（新增）
   - assets/ 文件夹（4 张海报，必须一起上传）
   - .nojekyll（若上传界面不显示此隐藏文件，可保留原有版本）
3. 点击 Commit changes，等待 GitHub Pages 发布完成。
4. 刷新网页；如仍显示旧版，在 Mac 按 Command + Shift + R。

不要只上传 index.html 和 styles.css：多语言功能还需要两个 JS 文件和海报图片。

## 客户邀请链接

上传完成后使用：

| 语言 | 链接 |
| --- | --- |
| 自动选择 / 手动切换 | https://chaks-fr.github.io/showroom-2027/ |
| 法语 | https://chaks-fr.github.io/showroom-2027/?lang=fr |
| 德语 | https://chaks-fr.github.io/showroom-2027/?lang=de |
| 意大利语 | https://chaks-fr.github.io/showroom-2027/?lang=it |
| 英语 | https://chaks-fr.github.io/showroom-2027/?lang=en |

指定 lang 参数优先；没有有效 lang 参数时，按浏览器语言选择 FR / DE / IT / EN，不支持的语言回退为法语。页面顶部始终可以手动切换，切换时网址会同步更新。

## 日后修改

- translations.js：四种语言文案。
- languages.js：语言切换逻辑。
- styles.css：样式，包含居中的 Waterfall slogan 和镂空预约按钮。
- index.html：预约链接、官网与社交账号链接。
- assets/invitation-fr.jpg、invitation-de.jpg、invitation-it.jpg、invitation-en.jpg：对应语言海报。

原始法语海报保留，三张外语海报通过内置图像工具进行文字本地化，主要装饰和布局沿用原图，细节可能与原图略有不同。已人工检查海报文字及浏览器切换效果；外语文案可在正式大规模发送前由销售团队复核。

## 第三方页面

预约按钮仍打开用户提供的 Microsoft Bookings 原始链接。Bookings、官网、Instagram、LinkedIn 和 YouTube 的页面语言由各平台控制，这个网站只翻译本页内容。

## WhatsApp 预览

网页内的语言和海报会随 lang 参数切换。社交平台抓取预览时可能不执行 JavaScript，因此链接预览的标题可能仍显示默认法语，不影响客户打开后的对应语言页面。

## 本地预览

可以直接打开 index.html（需保持相对文件结构）。Google Fonts 需要网络连接。也可在这个文件夹启动静态服务器。

无需安装依赖、构建、数据库或 API 密钥。

## Slogans validés

- English: Together, let’s make it different!
- Deutsch: Gemeinsam machen wir den Unterschied!

英语页面与海报已同步采用上述新版 slogan，德语保留确认文字。
