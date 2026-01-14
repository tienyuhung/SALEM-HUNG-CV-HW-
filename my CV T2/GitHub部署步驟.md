# GitHub Pages 部署详细步骤

## 前置准备
- 需要一个 GitHub 账号（如果没有，请先到 https://github.com 注册）

---

## 步骤一：创建 GitHub 仓库

1. **登录 GitHub**
   - 访问 https://github.com
   - 登录您的账号

2. **创建新仓库**
   - 点击右上角的 "+" 号
   - 选择 "New repository"

3. **设置仓库信息**
   - **Repository name**: 输入仓库名称，例如：`my-cv-t2` 或 `salem-hung-portfolio`
   - **Description**: （可选）输入描述，例如："Personal Portfolio Website"
   - **Visibility**: 选择 **Public**（GitHub Pages 免费版需要公开仓库）
   - **不要勾选** "Initialize this repository with a README"（因为我们已有文件）
   - 点击 "Create repository"

---

## 步骤二：上传项目文件到 GitHub

### 方法 A：使用 GitHub 网页界面上传（最简单）

1. **进入新创建的仓库页面**
   - 创建仓库后，您会看到一个空仓库页面

2. **上传文件**
   - 点击 "uploading an existing file" 链接
   - 或者直接拖放文件到页面上

3. **选择所有项目文件**
   - 将整个 `my CV T2` 文件夹中的所有文件上传：
     - `index.html`
     - `styles.css`
     - `script.js`
     - `hero-image.jpg`
     - `salemhung2025-3.jpg`
     - 所有 `portfolio*.jpg`、`portfolio*.webp`、`portfolio*.png` 文件
     - 其他所有图片文件

4. **提交文件**
   - 在页面底部填写：
     - **Commit message**: 例如 "Initial commit - Personal portfolio website"
   - 点击 "Commit changes"

### 方法 B：使用 Git 命令行（适合熟悉命令行的用户）

1. **打开终端（Terminal）**
   - 在 Mac 上按 `Cmd + Space`，输入 "Terminal"

2. **进入项目文件夹**
   ```bash
   cd "/Users/salemhung/Library/Mobile Documents/com~apple~CloudDocs/Desktop/台科碩班研究所/Cursor HW/my CV T2"
   ```

3. **初始化 Git 仓库**
   ```bash
   git init
   ```

4. **添加所有文件**
   ```bash
   git add .
   ```

5. **提交文件**
   ```bash
   git commit -m "Initial commit - Personal portfolio website"
   ```

6. **连接到 GitHub 仓库**
   ```bash
   git branch -M main
   git remote add origin https://github.com/您的用户名/您的仓库名.git
   git push -u origin main
   ```
   （将 "您的用户名" 和 "您的仓库名" 替换为实际值）

---

## 步骤三：启用 GitHub Pages

1. **进入仓库设置**
   - 在仓库页面，点击右上角的 "Settings"（设置）

2. **找到 Pages 选项**
   - 在左侧菜单中，向下滚动找到 "Pages" 选项
   - 点击进入

3. **配置 Pages**
   - **Source**: 选择 "Deploy from a branch"
   - **Branch**: 选择 `main`（或 `master`）
   - **Folder**: 选择 `/ (root)`
   - 点击 "Save"

4. **等待部署**
   - GitHub 会开始构建您的网站
   - 通常需要 1-2 分钟
   - 页面会显示 "Your site is live at..." 和您的网站链接

---

## 步骤四：获取网站链接

部署完成后，您的网站链接格式为：
```
https://您的用户名.github.io/您的仓库名
```

例如：
- 如果用户名是 `salemhung`，仓库名是 `my-cv-t2`
- 链接就是：`https://salemhung.github.io/my-cv-t2`

---

## 步骤五：更新网站内容

### 如果使用网页界面：
1. 在仓库中点击要修改的文件
2. 点击右上角的铅笔图标（Edit）
3. 修改内容
4. 滚动到底部，填写 commit message
5. 点击 "Commit changes"
6. 等待几分钟，网站会自动更新

### 如果使用 Git 命令行：
```bash
# 修改文件后
git add .
git commit -m "更新网站内容"
git push
```

---

## 常见问题

### Q1: 网站显示 404 错误？
- **解决**：等待 5-10 分钟，GitHub Pages 需要时间部署
- 检查仓库设置中的 Pages 配置是否正确

### Q2: 图片不显示？
- **解决**：检查图片文件是否都已上传到仓库
- 确认图片路径在代码中正确（相对路径）

### Q3: 如何更改网站链接？
- **解决**：在仓库 Settings → Pages 中可以更改分支
- 或者创建新仓库并使用新名称

### Q4: 如何添加自定义域名？
- **解决**：在 Settings → Pages → Custom domain 中添加您的域名
- 需要在域名 DNS 设置中添加 CNAME 记录

---

## 重要提示

1. **仓库必须是 Public**：GitHub Pages 免费版只支持公开仓库
2. **文件路径**：确保所有文件路径使用相对路径（如 `hero-image.jpg` 而不是绝对路径）
3. **更新延迟**：每次更新后，网站可能需要几分钟才能看到变化
4. **文件大小**：GitHub 对单个文件有大小限制（100MB），但您的图片应该没问题

---

## 检查清单

部署前确认：
- [ ] 所有文件都已上传到 GitHub 仓库
- [ ] `index.html` 在仓库根目录
- [ ] 所有图片文件都在仓库中
- [ ] 仓库设置为 Public
- [ ] GitHub Pages 已启用并配置正确
- [ ] 等待几分钟后，网站可以正常访问

---

## 需要帮助？

如果遇到问题：
1. 检查 GitHub 仓库的 Actions 标签页，查看是否有错误
2. 确认所有文件路径正确
3. 检查浏览器控制台（F12）是否有错误信息

