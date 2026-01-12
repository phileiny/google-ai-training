# CLAUDE.md - Claude Code 專案指南

此檔案為 Claude Code 提供專案背景和開發指引，以便更有效地協助開發。

## 專案概述

這是一個 **Google AI 生態系企業培訓教材**專案，包含：

1. **training.html** - 獨立的單頁應用（SPA），展示 30 個 Google AI 應用案例
2. **React 應用** - 使用 AI Studio Build 建立的互動式應用

### 主要目標

- 為企業內部員工提供 AI 工具培訓教材
- 按職能部門分類 AI 應用場景
- 提供可直接複製使用的提示詞範例

## 技術架構

### training.html（主要培訓教材）

- **技術**：純 HTML/CSS/JavaScript，無框架依賴
- **樣式**：Google Material Design 風格
- **特性**：
  - 職能篩選器（行銷、HR、研發、業務、財會、行政、PM、IT）
  - 平台篩選器（Gemini、AI Studio、NotebookLM、Google Opal）
  - 關鍵字搜尋
  - 提示詞一鍵複製
  - 響應式設計

### React 應用

- **框架**：React 19 + TypeScript
- **建構工具**：Vite
- **樣式**：Tailwind CSS
- **API**：Google Gemini API

## 開發指引

### 新增 AI 應用案例

在 `training.html` 中的 `applications` 陣列新增項目：

```javascript
{
    id: 31,  // 遞增 ID
    title: "應用名稱",
    tools: ["Gemini"],  // 可選：Gemini, AI Studio, NotebookLM, Google Opal
    coreFunction: "核心功能描述",
    example: "實戰應用場景",
    prompt: `提示詞範例`,
    departments: ["行銷", "HR"]  // 適用部門
}
```

### 部門標籤對應

| 部門代碼 | 適用場景 |
|---------|---------|
| 行銷 | 內容創作、社群經營、廣告投放 |
| HR | 招募、培訓、員工關係 |
| 研發 | 程式開發、技術研究、產品開發 |
| 業務 | 客戶開發、銷售支援、提案製作 |
| 財會 | 財務報表、數據分析、預算規劃 |
| 行政 | 文件管理、會議安排、辦公室營運 |
| PM | 專案管理、產品規劃、跨部門協調 |
| IT | 系統維護、技術支援、資安管理 |

### 樣式修改

CSS 變數定義在 `:root`：

```css
--google-blue: #4285F4;
--google-red: #EA4335;
--google-yellow: #FBBC05;
--google-green: #34A853;
```

## 常見任務

### 部署到 GitHub Pages

```bash
git add .
git commit -m "Update training materials"
git push origin main
```

GitHub Actions 會自動部署到：
`https://phileiny.github.io/google-ai-training/training.html`

### 本地測試

```bash
# 方法一：直接開啟
open training.html

# 方法二：本地伺服器
python -m http.server 8080
```

### 運行 React 應用

```bash
npm install
npm run dev
```

需要在 `.env.local` 設定 `GEMINI_API_KEY`。

## 檔案結構說明

```
/
├── training.html      # 培訓教材主頁（純靜態，可獨立運行）
├── index.html         # React 應用入口
├── App.tsx            # React 主元件
├── components/        # React 子元件
├── constants.ts       # 應用常數
├── types.ts           # TypeScript 類型定義
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Pages 部署配置
├── README.md          # 專案說明
└── claude.md          # Claude Code 指南（本檔案）
```

## 注意事項

1. **training.html 為獨立檔案**：不依賴其他檔案，可單獨分發使用
2. **React 應用需要 API Key**：使用前需設定 Gemini API Key
3. **避免洩漏 API Key**：`.env.local` 已加入 `.gitignore`
4. **GitHub Pages 部署**：僅部署靜態檔案，React 應用需另外處理

## 未來改進方向

- [ ] 新增更多 AI 應用案例
- [ ] 支援深色模式
- [ ] 新增學習進度追蹤功能
- [ ] 整合實際 API 演示功能
- [ ] 多語言支援（英文版本）
- [ ] 新增影片教學連結
