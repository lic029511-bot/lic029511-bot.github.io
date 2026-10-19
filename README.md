# 双语实验室官网 · GitHub Pages 展示版

对应账号：lic029511-bot
目标仓库：lic029511-bot/lic029511-bot.github.io
发布后的网址：https://lic029511-bot.github.io/

这是可由 GitHub Pages 免费托管的静态展示版本，包含中英文、研究项目、成员、论文、新闻、课程资源、活动和关联详情。它使用当前站点已发布的内容，不包含数据库草稿、管理员身份和登录凭据。

## 发布到 GitHub Pages

1. 在自己的账号下创建 Public 仓库，名称准确填写 `lic029511-bot.github.io`。
2. 把本源码包中的文件上传到仓库根目录。保留 `.github/workflows/pages.yml`。
3. 打开仓库 Settings → Pages，把 Source 设为 GitHub Actions。
4. 在 Actions 中查看 Publish lab website，等待成功后访问网站。

源码通过 GitHub Actions 自动构建；本地可用 Node.js 22 或以上版本运行：

```
npm ci
npm run build
npm run preview
```

浏览器预览地址：http://127.0.0.1:5180/

另一个“静态发布文件”压缩包已经构建好，可直接使用其中的文件。若仅上传该包至仓库，则在 Settings → Pages 中选择 Deploy from a branch，再选择 main / root；以后更新资料需要重新构建并上传。推荐使用源码包的自动构建方式。

## 编辑资料

- 实验室信息：content/site.json
- 研究项目：content/projects/
- 团队成员：content/people/
- 论文成果：content/publications/
- 新闻：content/news/
- 课程资源：content/resources/
- 日历讲座：content/events/

文字字段包含 zh、en 两种语言。某种语言留空时，前台使用另一种语言。图片和 PDF 可放在 public/media/，资料中填写 /media/文件名。

GitHub 网页编辑文件并提交后，Actions 将重新生成展示网页。站点不需要单独运行数据库，也不需要 Docker。

## 可视化后台的当前状态

/admin/ 已包含 Decap CMS 的内容结构与中英文表单配置，但尚未接入 GitHub OAuth 授权服务，当前页面会明确显示“后台登录授权待配置”。此时不会提供虚假的保存或发布操作。已有 Sites 网站的管理后台继续保持原状。

若要启用可视化后台，还需在你控制的服务上配置兼容 Decap 的 GitHub OAuth 登录代理，并将其 HTTPS 地址填写到 public/admin/settings.json 的 authBaseUrl 中。OAuth 回调地址和 GitHub OAuth App 应对应这台代理；Client Secret 不得写进仓库、settings.json 或网页脚本。可以选择在 Cloudflare Workers 免费额度内运行授权代理，但这需要你自己的 Cloudflare 账号及后续配置，尚未部署。

CMS 将使用 GitHub 账号登录，仅有仓库写入权限的成员可修改。编辑后的内容保存到 GitHub，发布触发 Actions 更新页面。由于这是公开仓库，源码、内容文件、图片及编辑草稿分支均可能被他人查看，请只放适合公开展示的资料。后台不会沿用 Sites 的 ChatGPT 登录。

## 费用边界

GitHub Free 的公开仓库可使用 GitHub Pages，并提供 github.io 网址，无需购买域名或租云服务器。服务限制和政策以 GitHub 官方说明为准。此包没有购买或开通付费服务。

官方说明：
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://decapcms.org/docs/github-backend/
