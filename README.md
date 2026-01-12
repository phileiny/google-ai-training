# Google AI 生態系 30 個應用 - 企業培訓教材

一個互動式的企業內部 AI 培訓教材網頁，涵蓋 Google AI 生態系統中的 30 個實用應用場景。

## 線上預覽

訪問：https://phileiny.github.io/google-ai-training/training.html

## 功能特色

- **職能篩選器**：按部門（行銷、HR、研發、業務、財會、行政、PM、IT）快速篩選相關工具
- **平台篩選器**：按 AI 平台（Gemini、AI Studio、NotebookLM、Google Opal）篩選
- **關鍵字搜尋**：即時搜尋工具名稱、功能描述
- **一鍵複製提示詞**：每個應用都附帶實用的提示詞範例，可一鍵複製使用
- **響應式設計**：支援桌面和行動裝置瀏覽
- **Material Design**：採用 Google Material Design 風格，專業美觀

## 涵蓋的 AI 工具

| 平台 | 應用數量 | 主要功能 |
|------|---------|---------|
| Gemini | 15 | 影片分析、深度研究、圖文生成、程式碼除錯 |
| AI Studio | 5 | 模型比較、即時串流、高畫質圖片生成、應用開發 |
| NotebookLM | 5 | 商業分析、Podcast 生成、課程製作、智慧問答 |
| Google Opal | 5 | 簡報自動化、文件審核、電子報生成、影片行銷 |

## 本地運行

### 方法一：直接開啟 HTML 檔案

直接在瀏覽器中開啟 `training.html` 檔案即可使用。

### 方法二：使用本地伺服器

```bash
# 使用 Python
python -m http.server 8080

# 或使用 Node.js
npx serve .
```

然後訪問 `http://localhost:8080/training.html`

### 方法三：運行 React 應用（需要 API Key）

這個專案同時包含一個使用 AI Studio Build 建立的 React 應用：

```bash
# 安裝依賴
npm install

# 設定 API Key
# 在 .env.local 中設定 GEMINI_API_KEY

# 運行開發伺服器
npm run dev
```

## 專案結構

```
google-ai-training/
├── training.html      # 獨立的培訓教材網頁（主要檔案）
├── index.html         # React 應用入口
├── App.tsx            # React 主元件
├── components/        # React 元件
├── constants.ts       # 常數定義
├── types.ts           # TypeScript 類型
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Pages 部署配置
└── README.md
```

## 部署到 GitHub Pages

本專案已配置 GitHub Actions 自動部署。推送到 `main` 分支後會自動部署到 GitHub Pages。

手動部署步驟：

1. 進入 GitHub 倉庫的 Settings
2. 選擇 Pages 選項
3. Source 選擇 "GitHub Actions"
4. 推送程式碼即可自動部署

## 適用對象

- 企業內部 AI 培訓講師
- 數位轉型專案負責人
- 希望提升團隊 AI 應用能力的主管
- 對 Google AI 工具感興趣的個人學習者

## 貢獻指南

歡迎提交 Issue 和 Pull Request 來改進這個專案：

- 新增更多 AI 應用案例
- 優化提示詞範例
- 改進 UI/UX 設計
- 修復 Bug

## 授權

MIT License

## 相關連結

- [Google AI Studio](https://aistudio.google.com/)
- [Gemini](https://gemini.google.com/)
- [NotebookLM](https://notebooklm.google.com/)
