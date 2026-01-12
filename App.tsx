
import React, { useState, useMemo } from 'react';
import { Department, AIApplication } from './types';
import { APPLICATIONS } from './constants';
import Card from './components/Card';

const App: React.FC = () => {
  const [activeDept, setActiveDept] = useState<Department>(Department.ALL);
  const [searchTerm, setSearchTerm] = useState('');

  const departments = Object.values(Department);

  const filteredApps = useMemo(() => {
    return APPLICATIONS.filter(app => {
      const matchesDept = activeDept === Department.ALL || app.departments.includes(activeDept);
      const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            app.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [activeDept, searchTerm]);

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-8 bg-[#4285F4] rounded-full"></div>
                <div className="w-2 h-8 bg-[#EA4335] rounded-full"></div>
                <div className="w-2 h-8 bg-[#FBBC05] rounded-full"></div>
                <div className="w-2 h-8 bg-[#34A853] rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Google AI 企業轉型培訓教材</h1>
                <p className="text-xs text-gray-500 font-medium">Enterprise AI Adoption Guide v1.0</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="搜尋 AI 應用、職能或關鍵字..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-gray-50 border-t border-gray-100 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 flex py-3 gap-2 no-scrollbar">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeDept === dept
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Intro */}
        <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Google 生態系 30 個頂尖 AI 應用</h2>
            <p className="text-gray-600 leading-relaxed">
              本手冊專為企業內部職能設計，協助您快速掌握 Gemini, AI Studio 與 NotebookLM 的核心價值。
              <span className="hidden md:inline"> 點擊下方職能標籤篩選最適合您的工具，並直接複製優化過的 Prompt 開始實作。</span>
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <div className="text-4xl font-black text-blue-600/20">TRANSFORM</div>
            <div className="text-sm font-bold text-blue-500">DIGITAL MATURITY</div>
          </div>
        </div>

        {/* Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <Card key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-400">找不到符合條件的 AI 應用</h3>
            <p className="text-gray-500 mt-2">嘗試更換關鍵字或重設篩選器</p>
            <button 
              onClick={() => {setActiveDept(Department.ALL); setSearchTerm('');}}
              className="mt-6 text-blue-600 font-bold hover:underline"
            >
              顯示所有應用
            </button>
          </div>
        )}
      </main>

      {/* Footer Info */}
      <footer className="mt-20 border-t border-gray-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-6 opacity-30">
            <div className="w-12 h-1 bg-blue-500"></div>
            <div className="w-12 h-1 bg-red-500"></div>
            <div className="w-12 h-1 bg-yellow-500"></div>
            <div className="w-12 h-1 bg-green-500"></div>
          </div>
          <p className="text-sm text-gray-400">&copy; 2024 Corporate AI Training Division. All rights reserved.</p>
          <p className="text-xs text-gray-300 mt-2 italic">此教材基於 Google 生態系最新技術彙整，建議搭配 Google Workspace 使用效果最佳。</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
