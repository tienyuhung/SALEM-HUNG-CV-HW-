# GitHub Desktop 使用详细步骤

## 第一步：下载并安装 GitHub Desktop

1. **访问下载页面**
   - 网址：https://desktop.github.com
   - 点击 "Download for macOS"

2. **安装应用**
   - 下载完成后，打开下载的 `.dmg` 文件
   - 将 GitHub Desktop 拖拽到 Applications 文件夹
   - 在 Applications 中找到 GitHub Desktop 并打开

3. **首次启动设置**
   - 如果是首次使用，GitHub Desktop 会引导您完成设置

---

## 第二步：登录 GitHub 账号

1. **登录账号**
   - 打开 GitHub Desktop
   - 点击 "Sign in to GitHub.com"
   - 输入您的 GitHub 用户名和密码
   - 或者点击 "Sign in with your browser" 使用浏览器登录

2. **授权 GitHub Desktop**
   - 如果使用浏览器登录，会跳转到浏览器
   - 点击 "Authorize GitHub Desktop"
   - 返回 GitHub Desktop，应该已经登录成功

3. **配置 Git（首次使用）**
   - GitHub Desktop 可能会要求配置 Git
   - 输入您的姓名和邮箱（用于提交记录）
   - 点击 "Finish"

---

## 第三步：添加本地项目

### 方法 A：添加现有项目文件夹（推荐）

1. **打开 GitHub Desktop**
   - 确保已登录

2. **添加本地仓库**
   - 点击菜单栏 "File" → "Add Local Repository"
   - 或者点击左上角的 "+" 号 → "Add" → "Add Existing Repository"

3. **选择项目文件夹**
   - 点击 "Choose..." 按钮
   - 浏览并选择项目文件夹：
     ```
     /Users/salemhung/Library/Mobile Documents/com~apple~CloudDocs/Desktop/台科碩班研究所/Cursor HW/my CV T2
     ```
   - 点击 "Add Repository"

4. **如果提示 "This directory does not appear to be a Git repository"**
   - 勾选 "Create a repository" 选项
   - 或者点击 "Create a repository" 按钮
   - 输入仓库名称（例如：`my-cv-t2`）
   - 点击 "Create Repository"

---

## 第四步：发布到 GitHub

1. **查看更改**
   - 添加仓库后，GitHub Desktop 会显示所有文件
   - 左侧会列出所有未提交的文件

2. **提交文件**
   - 在左下角填写：
     - **Summary（摘要）**: 例如 "Initial commit - Personal portfolio website"
     - **Description（描述）**: （可选）可以留空
   - 点击 "Commit to main" 按钮

3. **发布到 GitHub**
   - 提交后，点击右上角的 "Publish repository" 按钮
   - 或者点击菜单栏 "Repository" → "Publish repository"

4. **设置仓库信息**
   - **Name**: 输入仓库名称（例如：`my-cv-t2`）
   - **Description**: （可选）输入描述
   - **Keep this code private**: **不要勾选**（GitHub Pages 需要公开仓库）
   - 点击 "Publish Repository"

5. **等待上传**
   - GitHub Desktop 会开始上传所有文件
   - 底部会显示上传进度
   - 大文件可能需要几分钟，请耐心等待

---

## 第五步：启用 GitHub Pages

1. **在浏览器中打开 GitHub**
   - 上传完成后，GitHub Desktop 会显示 "View on GitHub" 按钮
   - 点击该按钮，或访问 https://github.com/您的用户名/您的仓库名

2. **进入仓库设置**
   - 在仓库页面，点击 "Settings"（设置）标签

3. **启用 Pages**
   - 在左侧菜单中找到 "Pages"
   - 点击进入

4. **配置 Pages**
   - **Source**: 选择 "Deploy from a branch"
   - **Branch**: 选择 `main`
   - **Folder**: 选择 `/ (root)`
   - 点击 "Save"

5. **获取网站链接**
   - 等待 1-2 分钟
   - 页面会显示 "Your site is live at..."
   - 您的网站链接格式为：
     ```
     https://您的用户名.github.io/您的仓库名
     ```
   - 例如：`https://salemhung.github.io/my-cv-t2`

---

## 第六步：后续更新网站

### 如果以后需要更新网站内容：

1. **修改文件**
   - 在项目文件夹中修改文件（例如：编辑 `index.html`）

2. **在 GitHub Desktop 中查看更改**
   - 打开 GitHub Desktop
   - 左侧会显示修改的文件

3. **提交更改**
   - 填写 Summary（例如："更新首页内容"）
   - 点击 "Commit to main"

4. **推送到 GitHub**
   - 点击 "Push origin" 按钮
   - 或者点击菜单栏 "Repository" → "Push"

5. **等待更新**
   - GitHub Pages 会自动更新
   - 通常需要几分钟

---

## 常见问题

### Q1: 找不到项目文件夹？
**解决**：
- 确保路径正确
- 可以点击 "Choose..." 后，在 Finder 中浏览到项目文件夹

### Q2: 上传很慢？
**解决**：
- 这是正常的，因为图片文件较大
- 请耐心等待，不要关闭 GitHub Desktop
- 可以在底部查看上传进度

### Q3: 上传失败？
**解决**：
- 检查网络连接
- 确认 GitHub 账号已登录
- 可以尝试重新点击 "Push origin"

### Q4: 如何查看上传进度？
**解决**：
- GitHub Desktop 底部会显示当前操作
- 可以看到 "Pushing to origin" 或 "Uploading files" 等提示

### Q5: 如何确认文件已上传？
**解决**：
- 上传完成后，点击 "View on GitHub" 按钮
- 在浏览器中查看仓库，确认所有文件都在

---

## 界面说明

### GitHub Desktop 主要区域：

1. **左侧面板**：
   - 显示文件更改列表
   - 可以查看哪些文件被修改、添加或删除

2. **中间面板**：
   - 显示文件内容差异
   - 可以查看具体修改内容

3. **底部**：
   - Summary 和 Description 输入框
   - Commit 按钮
   - 当前操作状态显示

4. **顶部工具栏**：
   - 仓库名称
   - 分支名称（通常是 `main`）
   - 同步状态

---

## 重要提示

1. **首次上传需要时间**：因为图片文件较大，首次上传可能需要 5-10 分钟
2. **不要关闭应用**：上传过程中不要关闭 GitHub Desktop
3. **保持网络连接**：确保网络连接稳定
4. **仓库必须是公开的**：GitHub Pages 免费版需要公开仓库
5. **等待 Pages 部署**：启用 Pages 后，需要等待 1-2 分钟才能访问

---

## 检查清单

完成以下步骤后，您的网站就可以访问了：

- [ ] GitHub Desktop 已安装并登录
- [ ] 项目文件夹已添加到 GitHub Desktop
- [ ] 所有文件已提交（Commit）
- [ ] 仓库已发布到 GitHub（Publish）
- [ ] GitHub Pages 已启用
- [ ] 等待 1-2 分钟后，网站可以正常访问

---

## 需要帮助？

如果在使用过程中遇到问题：
1. 检查 GitHub Desktop 底部的错误信息
2. 确认网络连接正常
3. 确认 GitHub 账号已正确登录
4. 查看本文档的"常见问题"部分

