
import { Department, AIApplication } from './types';

export const APPLICATIONS: AIApplication[] = [
  {
    id: 1,
    title: "YouTube 影片深度拆解",
    category: "Gemini",
    description: "利用 AI 自動分析影片內容，提取核心觀點、數據與趨勢。",
    scenario: "快速掌握競品動態、行業趨勢分享或自媒體素材搜集。",
    prompt: "我是一位[職稱]，目前正在研究[主題]。請幫我總結這個 YouTube 影片（URL）的核心內容。請重點列出：1. 核心技術突破 2. 市場發展預測 3. 對我所在行業的具體建議。",
    departments: [Department.MARKETING, Department.ADMIN, Department.STRATEGY]
  },
  {
    id: 2,
    title: "螢幕錄影流程提取器",
    category: "Gemini",
    description: "觀看操作錄影並自動生成步驟清晰的圖文指南或 SOP。",
    scenario: "製作軟體操作教學、內部培訓文件或新員工入職指引。",
    prompt: "請觀看這段軟體操作影片，提取出完整的 SOP 操作手冊。要求：1. 給出每個關鍵步驟的時間戳 2. 說明操作要點與常見錯誤 3. 輸出為結構化的 Markdown 格式。",
    departments: [Department.HR, Department.ADMIN, Department.IT]
  },
  {
    id: 3,
    title: "Deep Research 深度市場研究",
    category: "Gemini",
    description: "執行全網搜索與分析，生成包含價格、用途、獲利狀況的完整調研報告。",
    scenario: "新產品開發前的市場競品分析或技術可行性研究。",
    prompt: "請針對[特定行業/產品]進行深度市場調研。分析現有前 5 名競爭對手的：1. 產品核心功能 2. 定價策略 3. 行銷管道 4. 財務概況（若有）。最後請提煉出 3 個我們可借鑑的關鍵點。",
    departments: [Department.MARKETING, Department.IT, Department.STRATEGY]
  },
  {
    id: 4,
    title: "報告轉多媒體內容",
    category: "Gemini",
    description: "將枯燥的長篇報告一鍵轉化為圖表、互動網頁或 Podcast 音訊。",
    scenario: "高階主管彙報、跨部門溝通或行動化學習素材。",
    prompt: "將附件這份 20 頁的市場分析報告轉化為一份適合團隊在會議中閱讀的『精華摘要網頁』。要求包含視覺化圖表與 3 個關鍵數據導向的決策建議。",
    departments: [Department.ADMIN, Department.HR, Department.STRATEGY]
  },
  {
    id: 5,
    title: "每日預設自動化操作",
    category: "Gemini",
    description: "根據設定的時間與條件，自動執行日常重複性任務。",
    scenario: "每日早晨生成熱門選題、匯總昨日未讀重要郵件。",
    prompt: "你現在是我的專業內容策劃，請在每天上午 9 點前，掃描當天科技類、財經類的前 10 大熱門新聞，並根據我的讀者偏好提供 5 個社群媒體選題建議。",
    departments: [Department.MARKETING, Department.ADMIN]
  },
  {
    id: 6,
    title: "自定義選題助手 Gem",
    category: "Gemini",
    description: "建立個人專屬的選題庫 AI，能學習你的寫作風格與偏好。",
    scenario: "內容行銷團隊建立品牌風格一致的發文規劃器。",
    prompt: "我要創建一個名為『[品牌名]選題專家』的 Gem。請學習我上傳的過去 10 篇爆款文章風格，之後我只要輸入一個關鍵字，請給我 5 個符合品牌調性的標題與內容大綱。",
    departments: [Department.MARKETING]
  },
  {
    id: 7,
    title: "Storybook 教育繪本製作",
    category: "Gemini",
    description: "將複雜的企業文化或制度，轉化為易懂且有趣的繪本故事。",
    scenario: "企業新人訓、品牌故事傳達或內部政策宣導。",
    prompt: "將我們公司的『資安防護規範』轉化為一個 5 頁的繪本故事。主角是一位『資安守護者』，他如何應對網路釣魚攻擊。語氣要輕鬆幽默，適合全員閱讀。",
    departments: [Department.HR, Department.ADMIN]
  },
  {
    id: 8,
    title: "全方位個人電郵助理",
    category: "Gemini + Workspace",
    description: "自動串聯 Gmail、日曆與 Docs，實現日程自動規劃。",
    scenario: "秘書工作自動化、繁雜會議邀請管理。",
    prompt: "掃描我過去 24 小時中標註為『緊急』的郵件。如果有涉及會議邀請，請自動檢查我的日曆空檔，並在合適時間創建預約，同時將會議背景資料彙整成一份 Google Doc。",
    departments: [Department.ADMIN, Department.SALES]
  },
  {
    id: 9,
    title: "智慧產品模特圖合成",
    category: "Gemini",
    description: "將產品平拍圖與 AI 生成的模特、場景完美結合，光影自然。",
    scenario: "電商平台節省拍攝預算、快速生成情境廣告圖。",
    prompt: "這是一張新款[配件名]的圖片。請生成一個場景：一位穿著歐美風格簡約服飾的女性，正在陽光灑落的咖啡廳戶外座位佩戴這款產品。要求光影真實，產品質感與場景融合度高。",
    departments: [Department.MARKETING, Department.SALES]
  },
  {
    id: 10,
    title: "一鍵多圖文內容生成",
    category: "Gemini",
    description: "輸入主題，同時生成具備視覺美感與專業文案的部落格或社群推文。",
    scenario: "品牌官網更新、HR 雇主品牌宣傳。",
    prompt: "幫我寫一篇關於[主題]的部落格文章。字數 800 字，語氣專業且具親和力。並請根據文章內容，提供 3 個適合插入的圖片描述，用於 AI 繪圖生成。",
    departments: [Department.MARKETING, Department.HR]
  },
  {
    id: 11,
    title: "Veo 創意視頻編輯",
    category: "Gemini / Veo",
    description: "利用 Veo 模型生成高品質短影音文案與畫面指令。",
    scenario: "產品前導短片、教育訓練開場影片製作。",
    prompt: "我需要製作一個 5 秒的[產品名]產品特性展示影片。請幫我寫出精確的 Veo 生成提示詞：包含鏡頭語言、燈光設定、以及能展現產品高級感的動態描述。",
    departments: [Department.MARKETING, Department.HR]
  },
  {
    id: 12,
    title: "職場技能 AI 導師",
    category: "Gemini",
    description: "系統化學習新技能，提供課程推薦與進度追蹤。",
    scenario: "員工自主學習（AI、數據分析、專案管理）。",
    prompt: "我想在 4 週內學會『SQL 數據分析』。請為我制定一個學習計畫，並推薦 3 個最適合新手的 Google 認證課程或線上資源。請以教學者的語氣回答我。",
    departments: [Department.HR, Department.IT]
  },
  {
    id: 13,
    title: "互動式數據儀表盤",
    category: "Gemini",
    description: "上傳數據表格，自動分析異常、亮點並生成可視化解讀。",
    scenario: "財務月報分析、銷售績效評估會議。",
    prompt: "這是我們上個季度的銷售數據。請幫我分析：1. 哪個產品線成長率最快？ 2. 目前的主要缺口在哪裡？ 3. 請給出一個能夠在週會上展示的數據觀察摘要。",
    departments: [Department.FINANCE, Department.SALES, Department.STRATEGY]
  },
  {
    id: 14,
    title: "Canvas 網頁即時原型生成",
    category: "Gemini",
    description: "輸入需求或參考連結，AI 快速產出符合品牌風格的網頁原型。",
    scenario: "活動一頁式網頁開發、電商官網改版構思。",
    prompt: "請幫我設計一個『企業週年慶活動』的一頁式網站。主色調為[色系]，要有報名表單、活動時程表以及嘉賓介紹區。排版風格請參考[參考網址]。",
    departments: [Department.MARKETING, Department.IT, Department.ADMIN]
  },
  {
    id: 15,
    title: "程式碼 Bug 自動診斷",
    category: "Gemini / AI Studio",
    description: "導入 GitHub 專案或代碼片段，AI 精確定位錯誤並提供修復方案。",
    scenario: "研發團隊 Debug 加速、舊代碼重構建議。",
    prompt: "這是我目前的[語言]代碼片段，運行時報錯『[報錯內容]』。請分析報錯原因，並給出優化後的代碼，同時說明為什麼這樣修改能提高性能。",
    departments: [Department.IT]
  },
  {
    id: 16,
    title: "AI 模型效能對比器",
    category: "AI Studio",
    description: "在同一界面對比不同版本 Gemini 模型的輸出品質與速度。",
    scenario: "企業選擇最合適的 AI 模型進行 API 串接與開發。",
    prompt: "對比 Gemini 1.5 Pro 與 Flash 在處理『萬字技術文檔翻譯』時的表現。請從準確度、流暢度與耗時三個維度給出對比分析報告。",
    departments: [Department.IT, Department.STRATEGY]
  },
  {
    id: 17,
    title: "即時視訊直播助理",
    category: "AI Studio Live",
    description: "透過 Live API 讓 AI 實時看到你的螢幕、聽到聲音並給予回饋。",
    scenario: "遠端技術指導、一對一 AI 陪練、程式碼實時 Review。",
    prompt: "開啟 Live 模式。現在我要進行一段英文演講練習，請你聽我的發音與邏輯，並在每個段落結束後給我改進建議。",
    departments: [Department.HR, Department.IT, Department.SALES]
  },
  {
    id: 18,
    title: "4K 高清視覺素材生成",
    category: "Nano Banana",
    description: "生成高分辨率、可用於印刷或 4K 展示的商業視覺圖片。",
    scenario: "大型展覽海報、產品形象牆設計。",
    prompt: "生成一張[主題]的 4K 高清背景圖。要求：賽博龐克風格、光線具有戲劇感、構圖符合黃金比例。這張圖將用於企業年會的背景大螢幕。",
    departments: [Department.MARKETING, Department.HR]
  },
  {
    id: 19,
    title: "專屬任務 App 快速建構",
    category: "AI Studio Build",
    description: "利用 Build 功能，幾分鐘內封裝一個特定任務的 AI 小工具。",
    scenario: "部門內部的文案生成器、財報自動分析器。",
    prompt: "我想建立一個『社群標題爆款生成器』。當我輸入一段內容，請自動生成 10 個不同風格的標題（如懸念式、驚訝式、教學式），並附帶適合的 Emoji。",
    departments: [Department.ALL]
  },
  {
    id: 20,
    title: "企業空間與家居設計",
    category: "Home Canvas",
    description: "將空辦公室照片轉化為多種風格的裝修提案。",
    scenario: "辦公室改建、門市空間規劃、快閃店設計。",
    prompt: "這是我們新租賃的辦公空間。請提供三種裝修風格：1. 工業風 2. 北歐極簡風 3. 科技未來風。請標出家具擺放建議與採光優化策略。",
    departments: [Department.ADMIN, Department.SALES]
  },
  {
    id: 21,
    title: "商業故事與策略拆解",
    category: "NotebookLM",
    description: "匯入多個參考來源，自動提煉出深度的商業邏輯與致勝關鍵。",
    scenario: "高管決策輔助、新創項目可行性評估。",
    prompt: "匯入這 5 家競爭對手的創始故事與歷年財報。請總結出他們共同的成功因素，以及在目前市場環境下，他們可能面臨的共同威脅是什麼？",
    departments: [Department.STRATEGY, Department.MARKETING]
  },
  {
    id: 22,
    title: "企業專屬播客自動生成",
    category: "NotebookLM",
    description: "將內部的培訓文檔轉化為兩個 AI 角色對談的廣播節目。",
    scenario: "員工通車學習、有趣的公司新聞週報。",
    prompt: "根據這份『公司新年度發展計畫』，生成一段 10 分鐘的對談播客。角色是一位專業的主持人與一位資深主管，語氣要活潑且振奮人心。",
    departments: [Department.HR, Department.ADMIN]
  },
  {
    id: 23,
    title: "數據驅動型商業企劃書",
    category: "NotebookLM",
    description: "結合內外部數據，生成具備說服力的商業計畫影片或簡報。",
    scenario: "爭取外部融資、內部跨部門資源爭取。",
    prompt: "匯入市場大數據與我司過去三年的運營數據。請生成一份針對『進入東南亞市場』的商業計畫大綱，並指出最具獲利潛力的前三個國家。",
    departments: [Department.STRATEGY, Department.SALES]
  },
  {
    id: 24,
    title: "教材與測驗自動化生成",
    category: "NotebookLM",
    description: "根據上傳的技術文檔，自動產出教學投影片與課後練習題。",
    scenario: "快速建立內部專業知識庫、證照考試模擬題庫。",
    prompt: "這是一份『產線安全操作手冊』。請幫我生成：1. 10 頁教學投影片大綱 2. 5 題選擇題與 2 題簡答題，並附上正確答案與解析。",
    departments: [Department.HR, Department.IT]
  },
  {
    id: 25,
    title: "智慧來源探索與溯源",
    category: "NotebookLM",
    description: "在分析複雜法律或技術文件時，精確標註回答的出處。",
    scenario: "法律合約審閱、技術文檔交叉比對。",
    prompt: "在我們的合約文檔庫中，找出關於『損害賠償上限』的所有條款，並分別列出在哪份文件、第幾頁，以便法務團隊查驗。",
    departments: [Department.ADMIN, Department.IT, Department.FINANCE]
  },
  {
    id: 26,
    title: "深度簡報生成自動化",
    category: "Google Opal",
    description: "透過語義理解，自動生成具備設計感與邏輯的完整 PPT。",
    scenario: "緊急會議準備、大量業務提案製作。",
    prompt: "我需要一份關於『2025 年 AI 行銷自動化趨勢』的 15 頁簡報。請包含全球趨勢、3 個成功案例、以及我司的因應策略。要求排版簡約大氣。",
    departments: [Department.MARKETING, Department.SALES, Department.STRATEGY]
  },
  {
    id: 27,
    title: "智慧流程與規章審核",
    category: "Google Opal",
    description: "AI 自動審計合規性，找出文件中不符合法規或公司政策之處。",
    scenario: "內稽內控、合約合規自動化掃描。",
    prompt: "請對照最新的[法規名稱]，審核我這份採購合約。指出其中 3 個潛在的法務風險點，並提供修改建議字句。",
    departments: [Department.FINANCE, Department.HR, Department.STRATEGY]
  },
  {
    id: 28,
    title: "實時主題電子報生成",
    category: "Google Opal",
    description: "自動追蹤 48 小時內新聞，生成帶圖片與摘要的專業電子報。",
    scenario: "行業動態週報、投資市場日報。",
    prompt: "主題：『半導體產業最新動態』。請搜索近 48 小時全球前 10 大媒體報導，編輯成一份電子報。包含一張橫幅圖片、每個標題下有 200 字摘要與原文連結。",
    departments: [Department.MARKETING, Department.STRATEGY]
  },
  {
    id: 29,
    title: "智慧影音行銷分析師",
    category: "Google Opal",
    description: "分析影音廣告投放數據，自動優化腳本與投放策略。",
    scenario: "廣告投放優化、ROI 提升建議。",
    prompt: "這是我過去一個月的 Youtube 廣告投放數據。請分析哪個時間點的使用者跳出率最高？並針對此數據優化下個月的前 5 秒開場腳本。",
    departments: [Department.MARKETING]
  },
  {
    id: 30,
    title: "產品研發需求預測",
    category: "Google Opal",
    description: "整合市場反饋與社群評論，精確預測下一代產品的需求。",
    scenario: "產品經理（PM）規劃新功能、研發資源配置。",
    prompt: "匯入過去一季的客戶負面評論與競品的熱門評論。請分析出客戶最渴望但在現有產品中尚未被滿足的 3 個核心功能需求。",
    departments: [Department.IT, Department.MARKETING, Department.STRATEGY]
  }
];
