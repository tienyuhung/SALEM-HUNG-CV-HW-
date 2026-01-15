# SALEM HUNG - Personal Portfolio Website

純前端個人作品集網站，使用 HTML、CSS、JavaScript 開發（無框架）。

## 🌐 線上網站

網站已部署至 GitHub Pages，可透過以下連結訪問：
```
https://您的用户名.github.io/my-cv-t2
```

## ✨ 功能特色

- ✅ 單頁式動態網頁，平滑滾動導航
- ✅ 固定頂部導航欄，不會因滾動而消失
- ✅ 首頁滿版黑白高對比度背景圖
- ✅ 響應式設計，支援各種螢幕尺寸（桌面、平板、手機）
- ✅ Portfolio 作品展示，支援左右箭頭切換
- ✅ 圖片懸停顯示專案名稱
- ✅ 點擊圖片彈出視窗顯示大圖與詳細資訊
- ✅ About 區塊個人資訊展示
- ✅ Services 區塊流程圖展示
- ✅ Contact 區塊刮刮樂互動功能

## 📁 檔案結構

```
my CV T2/
├── index.html              # 主 HTML 檔案
├── styles.css              # 樣式檔案
├── script.js               # JavaScript 功能
├── README.md               # 說明文件
├── hero-image.jpg          # 首頁背景圖片
├── salemhung2025-3.jpg     # About 區塊頭像
├── portfolio*.jpg          # Portfolio 作品圖片
├── scribble-finger.png     # 刮刮樂提示圖片
├── SH-LINE-QR.jpg         # LINE QR Code
└── ...                     # 其他資源檔案
```

## 🚀 快速開始

### 本地運行

直接在瀏覽器中開啟 `index.html` 檔案即可。

### 使用本地伺服器（推薦）

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (需先安裝 serve)
npx serve .

# 使用 PHP
php -S localhost:8000
```

然後在瀏覽器中訪問 `http://localhost:8000`

## 📱 響應式設計

- **桌面版**：完整功能展示
- **平板版**：適配中等螢幕
- **手機版**：優化觸控操作，Portfolio 改為縱向排列

## 🛠️ 技術棧

- **HTML5** - 網頁結構
- **CSS3** - 樣式設計（Grid、Flexbox、動畫）
- **Vanilla JavaScript** - 互動功能（無框架依賴）
- **Canvas API** - 刮刮樂功能
- **Intersection Observer API** - 滾動動畫

## 📝 自訂內容

### 修改個人資訊

在 `index.html` 中修改以下區塊：
- **About 區塊**：個人資訊、經歷、專案
- **Services 區塊**：服務流程說明
- **統計數據**：首頁左側的數字統計

### 添加作品

在 `script.js` 中的 `portfolioData` 陣列添加新作品：

```javascript
{
    image: 'portfolio10.jpg',
    title: '作品名稱',
    images: ['portfolio10.jpg', 'portfolio10-2.jpg', ...],
    description: '作品描述...'
}
```

## 🌐 部署到 GitHub Pages

詳細部署步驟請參考：`GitHub完整部署指南.md`

### 快速部署步驟

1. 在 GitHub 創建新倉庫（Public）
2. 上傳所有項目文件
3. 在倉庫 Settings → Pages 啟用 GitHub Pages
4. 選擇 `main` 分支和 `/ (root)` 資料夾
5. 等待部署完成，訪問 `https://您的用户名.github.io/倉庫名`

## 🌍 瀏覽器支援

- ✅ Chrome (最新版本)
- ✅ Firefox (最新版本)
- ✅ Safari (最新版本)
- ✅ Edge (最新版本)
- ✅ 行動裝置瀏覽器

## ⚠️ 注意事項

- 圖片檔案需與 HTML 檔案放在同一目錄
- 如果圖片不存在，會顯示灰色占位圖
- 建議使用高品質圖片以獲得最佳視覺效果
- 所有圖片路徑使用相對路徑

## 📄 授權

© 2026 Hung Tien Yu All Rights Reserved.

## 🔗 相關連結

- [GitHub 完整部署指南](./GitHub完整部署指南.md)
- [GitHub Desktop 使用步驟](./GitHub%20Desktop使用步骤.md)
- [Netlify 使用步驟](./Netlify使用步骤.md)

