# 使用 Git 命令行上传文件到 GitHub

## 问题说明
GitHub 网页界面上传文件有大小限制，使用 Git 命令行可以上传更大的文件。

---

## 步骤一：检查是否已安装 Git

1. **打开终端（Terminal）**
   - 按 `Cmd + Space`，输入 "Terminal"，按 Enter

2. **检查 Git 是否已安装**
   ```bash
   git --version
   ```
   - 如果显示版本号（如 `git version 2.x.x`），说明已安装
   - 如果没有安装，会提示需要安装

3. **如果没有安装 Git**
   - 访问 https://git-scm.com/download/mac
   - 下载并安装 Git for Mac

---

## 步骤二：在 GitHub 创建仓库

1. 访问 https://github.com 并登录
2. 点击右上角 "+" → "New repository"
3. 输入仓库名称（例如：`my-cv-t2`）
4. 选择 **Public**
5. **不要勾选** "Initialize this repository with a README"
6. 点击 "Create repository"
7. **复制仓库链接**（例如：`https://github.com/您的用户名/my-cv-t2.git`）

---

## 步骤三：使用 Git 命令行上传文件

### 在终端中执行以下命令：

1. **进入项目文件夹**
   ```bash
   cd "/Users/salemhung/Library/Mobile Documents/com~apple~CloudDocs/Desktop/台科碩班研究所/Cursor HW/my CV T2"
   ```

2. **初始化 Git 仓库**
   ```bash
   git init
   ```

3. **添加所有文件**
   ```bash
   git add .
   ```

4. **提交文件**
   ```bash
   git commit -m "Initial commit - Personal portfolio website"
   ```

5. **设置主分支**
   ```bash
   git branch -M main
   ```

6. **连接到 GitHub 仓库**
   ```bash
   git remote add origin https://github.com/您的用户名/您的仓库名.git
   ```
   （将 "您的用户名" 和 "您的仓库名" 替换为实际值）
   
   例如：
   ```bash
   git remote add origin https://github.com/salemhung/my-cv-t2.git
   ```

7. **上传文件到 GitHub**
   ```bash
   git push -u origin main
   ```

8. **输入 GitHub 账号信息**
   - 如果提示输入用户名和密码：
     - **用户名**：您的 GitHub 用户名
     - **密码**：需要使用 **Personal Access Token**（不是 GitHub 密码）
     - 如果还没有 Token，请参考下面的步骤创建

---

## 步骤四：创建 Personal Access Token（如果需要）

如果 Git 要求输入密码，需要使用 Personal Access Token：

1. **访问 GitHub 设置**
   - 登录 GitHub
   - 点击右上角头像 → "Settings"

2. **创建 Token**
   - 左侧菜单找到 "Developer settings"
   - 点击 "Personal access tokens" → "Tokens (classic)"
   - 点击 "Generate new token" → "Generate new token (classic)"

3. **设置 Token**
   - **Note**: 输入描述，例如 "My CV Website"
   - **Expiration**: 选择过期时间（建议选择较长时间）
   - **Select scopes**: 勾选 `repo`（完整仓库访问权限）
   - 点击 "Generate token"

4. **复制 Token**
   - **重要**：Token 只显示一次，请立即复制保存
   - 当 Git 要求输入密码时，粘贴这个 Token

---

## 步骤五：启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"
2. 左侧菜单找到 "Pages"
3. 设置：
   - **Source**: "Deploy from a branch"
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. 点击 "Save"
5. 等待 1-2 分钟，网站链接会显示在 Pages 设置页面

---

## 常见问题

### Q1: 提示 "fatal: not a git repository"
**解决**：确保在正确的文件夹中执行 `git init`

### Q2: 提示 "remote origin already exists"
**解决**：执行以下命令删除旧的连接，然后重新添加
```bash
git remote remove origin
git remote add origin https://github.com/您的用户名/您的仓库名.git
```

### Q3: 提示 "Authentication failed"
**解决**：
- 确保使用 Personal Access Token 而不是密码
- 检查 Token 是否已过期
- 重新创建 Token

### Q4: 上传很慢
**解决**：这是正常的，因为图片文件较大，请耐心等待

---

## 完整命令示例

假设您的 GitHub 用户名是 `salemhung`，仓库名是 `my-cv-t2`：

```bash
# 1. 进入项目文件夹
cd "/Users/salemhung/Library/Mobile Documents/com~apple~CloudDocs/Desktop/台科碩班研究所/Cursor HW/my CV T2"

# 2. 初始化 Git
git init

# 3. 添加所有文件
git add .

# 4. 提交
git commit -m "Initial commit - Personal portfolio website"

# 5. 设置主分支
git branch -M main

# 6. 连接 GitHub（替换为您的实际链接）
git remote add origin https://github.com/salemhung/my-cv-t2.git

# 7. 上传
git push -u origin main
```

---

## 后续更新网站

如果以后需要更新网站内容：

```bash
# 1. 进入项目文件夹
cd "/Users/salemhung/Library/Mobile Documents/com~apple~CloudDocs/Desktop/台科碩班研究所/Cursor HW/my CV T2"

# 2. 添加修改的文件
git add .

# 3. 提交更改
git commit -m "更新网站内容"

# 4. 上传到 GitHub
git push
```

---

## 提示

- 第一次上传可能需要几分钟，因为图片文件较大
- 上传过程中不要关闭终端
- 如果上传中断，可以重新执行 `git push` 命令

