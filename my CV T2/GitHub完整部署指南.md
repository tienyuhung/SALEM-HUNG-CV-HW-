# GitHub 完整部署指南 - 个人网站

参考示例：https://github.com/AmberHo91121/DITL_winterTraining_HW01

## 📋 部署步骤总览

1. 创建 GitHub 账号（如果还没有）
2. 在 GitHub 上创建新仓库
3. 将项目文件上传到 GitHub
4. 启用 GitHub Pages
5. 获取网站链接

---

## 步骤一：创建 GitHub 仓库

### 1.1 登录 GitHub
- 访问 https://github.com
- 如果没有账号，点击 "Sign up" 注册

### 1.2 创建新仓库
1. 点击右上角的 **"+"** 号
2. 选择 **"New repository"**

### 1.3 设置仓库信息
- **Repository name**: `my-cv-t2` 或 `salem-hung-portfolio`（建议使用小写字母和连字符）
- **Description**: `Personal Portfolio Website - 个人作品集网站`
- **Visibility**: 选择 **Public** ⚠️（GitHub Pages 免费版需要公开仓库）
- **不要勾选** "Add a README file"（因为我们已有文件）
- **不要勾选** "Add .gitignore" 和 "Choose a license"
- 点击 **"Create repository"**

---

## 步骤二：上传项目文件

### 方法 A：使用 GitHub 网页界面（推荐新手）

1. **进入新创建的仓库页面**
   - 创建后会看到一个空仓库页面，显示 "Quick setup" 提示

2. **上传文件**
   - 点击 **"uploading an existing file"** 链接
   - 或者直接拖放整个文件夹到页面上

3. **选择所有项目文件**
   - 上传以下文件：
     - ✅ `index.html`
     - ✅ `styles.css`
     - ✅ `script.js`
     - ✅ `README.md`
     - ✅ 所有图片文件（`.jpg`, `.png`, `.webp` 等）
     - ✅ 其他所有项目文件

4. **提交文件**
   - 在页面底部填写：
     - **Commit message**: `Initial commit - Personal portfolio website`
   - 点击 **"Commit changes"**

### 方法 B：使用 Git 命令行（推荐有经验用户）

#### 2.1 初始化 Git 仓库

在终端中执行以下命令：

```bash
# 进入项目文件夹
cd "/Users/salemhung/Library/Mobile Documents/com~apple~CloudDocs/Desktop/台科碩班研究所/Cursor HW/my CV T2"

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交文件
git commit -m "Initial commit - Personal portfolio website"

# 设置主分支为 main
git branch -M main
```

#### 2.2 连接到 GitHub 仓库

```bash
# 添加远程仓库（将 YOUR_USERNAME 和 YOUR_REPO_NAME 替换为实际值）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送到 GitHub
git push -u origin main
```

**示例**：
如果您的用户名是 `salemhung`，仓库名是 `my-cv-t2`，则命令为：
```bash
git remote add origin https://github.com/salemhung/my-cv-t2.git
git push -u origin main
```

---

## 步骤三：启用 GitHub Pages

### 3.1 进入仓库设置
1. 在仓库页面，点击右上角的 **"Settings"**（设置）标签

### 3.2 配置 Pages
1. 在左侧菜单中，向下滚动找到 **"Pages"** 选项
2. 点击进入 Pages 设置页面

### 3.3 设置部署源
- **Source**: 选择 **"Deploy from a branch"**
- **Branch**: 选择 **`main`**（或 `master`，取决于您的分支名）
- **Folder**: 选择 **`/ (root)`**
- 点击 **"Save"** 按钮

### 3.4 等待部署
- GitHub 会自动开始构建您的网站
- 通常需要 **1-3 分钟**
- 页面会显示绿色的成功提示和您的网站链接

---

## 步骤四：获取网站链接

部署完成后，您的网站链接格式为：

```
https://您的用户名.github.io/您的仓库名
```

**示例**：
- 如果用户名是 `salemhung`，仓库名是 `my-cv-t2`
- 链接就是：`https://salemhung.github.io/my-cv-t2`

### 查看网站链接
1. 在仓库页面，点击 **"Settings"**
2. 点击左侧的 **"Pages"**
3. 在页面顶部会显示：
   ```
   Your site is live at https://您的用户名.github.io/您的仓库名
   ```

---

## 步骤五：更新网站内容

### 方法 A：使用 GitHub 网页界面

1. 在仓库中点击要修改的文件（如 `index.html`）
2. 点击右上角的 **铅笔图标**（Edit this file）
3. 修改内容
4. 滚动到底部，填写 **commit message**
5. 点击 **"Commit changes"**
6. 等待 **2-5 分钟**，网站会自动更新

### 方法 B：使用 Git 命令行

```bash
# 修改文件后
git add .
git commit -m "更新网站内容"
git push
```

---

## 📝 重要提示

### ⚠️ 必须注意的事项

1. **仓库必须是 Public**
   - GitHub Pages 免费版只支持公开仓库
   - 如果选择 Private，需要 GitHub Pro 账号

2. **文件路径使用相对路径**
   - ✅ 正确：`src="hero-image.jpg"`
   - ❌ 错误：`src="/Users/.../hero-image.jpg"`

3. **主文件必须是 `index.html`**
   - GitHub Pages 会自动查找 `index.html` 作为首页
   - 确保 `index.html` 在仓库根目录

4. **更新延迟**
   - 每次更新后，网站可能需要 **2-5 分钟** 才能看到变化
   - 如果看不到更新，尝试强制刷新（Ctrl+F5 或 Cmd+Shift+R）

5. **文件大小限制**
   - GitHub 对单个文件有大小限制（100MB）
   - 如果图片太大，建议压缩后再上传

---

## 🔍 常见问题解决

### Q1: 网站显示 404 错误？
**解决方法**：
- 等待 5-10 分钟，GitHub Pages 需要时间部署
- 检查仓库设置中的 Pages 配置是否正确
- 确认 `index.html` 在仓库根目录
- 检查仓库是否为 Public

### Q2: 图片不显示？
**解决方法**：
- 检查图片文件是否都已上传到仓库
- 确认图片路径在代码中正确（使用相对路径）
- 检查图片文件名大小写是否匹配
- 在浏览器中按 F12 打开开发者工具，查看 Console 是否有错误

### Q3: 如何更改网站链接？
**解决方法**：
- 在仓库 Settings → Pages 中可以更改分支
- 或者创建新仓库并使用新名称
- 网站链接格式：`https://用户名.github.io/仓库名`

### Q4: 如何添加自定义域名？
**解决方法**：
1. 在 Settings → Pages → Custom domain 中添加您的域名
2. 在域名 DNS 设置中添加 CNAME 记录，指向 `您的用户名.github.io`
3. 等待 DNS 生效（可能需要几小时）

### Q5: 如何查看部署状态？
**解决方法**：
- 在仓库页面，点击 **"Actions"** 标签
- 可以看到部署历史和状态
- 如果有错误，会显示详细的错误信息

---

## ✅ 部署前检查清单

在开始部署前，请确认：

- [ ] 所有文件都已准备好
- [ ] `index.html` 在项目根目录
- [ ] 所有图片文件都在项目中
- [ ] 代码中的图片路径使用相对路径
- [ ] 已创建 GitHub 账号
- [ ] 已创建新的 Public 仓库
- [ ] 所有文件都已上传到 GitHub
- [ ] GitHub Pages 已启用并配置正确
- [ ] 等待几分钟后，网站可以正常访问

---

## 🎉 完成！

部署成功后，您就可以：
- ✅ 通过链接访问您的个人网站
- ✅ 分享链接给其他人
- ✅ 随时更新网站内容
- ✅ 在 GitHub 上管理代码版本

**示例网站链接格式**：
```
https://salemhung.github.io/my-cv-t2
```

---

## 📚 参考资源

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [GitHub 快速入门指南](https://docs.github.com/en/get-started/quickstart)
- [Git 基础教程](https://git-scm.com/book/zh/v2)

---

## 💡 提示

如果遇到任何问题：
1. 检查 GitHub 仓库的 **Actions** 标签页，查看是否有错误
2. 确认所有文件路径正确
3. 检查浏览器控制台（F12）是否有错误信息
4. 参考 GitHub 官方文档或社区帮助

