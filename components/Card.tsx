
import React, { useState } from 'react';
import { AIApplication, Department } from '../types';

interface CardProps {
  app: AIApplication;
}

const Card: React.FC<CardProps> = ({ app }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(app.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDepartmentColor = (dept: Department) => {
    switch (dept) {
      case Department.MARKETING: return 'bg-blue-100 text-blue-700';
      case Department.HR: return 'bg-green-100 text-green-700';
      case Department.IT: return 'bg-indigo-100 text-indigo-700';
      case Department.SALES: return 'bg-yellow-100 text-yellow-700';
      case Department.FINANCE: return 'bg-red-100 text-red-700';
      case Department.ADMIN: return 'bg-purple-100 text-purple-700';
      case Department.STRATEGY: return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (cat: string) => {
    if (cat.includes('Gemini')) return 'text-blue-600 border-blue-600';
    if (cat.includes('AI Studio')) return 'text-purple-600 border-purple-600';
    if (cat.includes('NotebookLM')) return 'text-green-600 border-green-600';
    return 'text-gray-600 border-gray-600';
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group h-full">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-3">
          <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border ${getCategoryColor(app.category)}`}>
            {app.category}
          </span>
          <span className="text-gray-400 font-mono text-sm">#{String(app.id).padStart(2, '0')}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
          {app.title}
        </h3>
      </div>

      {/* Content */}
      <div className="px-6 space-y-4 flex-grow">
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-1">核心功能</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{app.description}</p>
        </div>
        
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-1">實戰範例</h4>
          <p className="text-gray-600 text-sm leading-relaxed italic border-l-2 border-gray-200 pl-3">{app.scenario}</p>
        </div>

        {/* Prompt Box */}
        <div className="bg-gray-50 rounded-xl p-4 relative group/prompt border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xs font-bold text-blue-500 uppercase">推薦 Prompt</h4>
            <button 
              onClick={copyToClipboard}
              className={`text-xs px-2 py-1 rounded transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-white text-gray-500 hover:bg-gray-100 shadow-sm border border-gray-200'}`}
            >
              {copied ? '已複製!' : '複製提示詞'}
            </button>
          </div>
          <p className="text-gray-700 text-sm line-clamp-3 group-hover/prompt:line-clamp-none transition-all duration-300">
            {app.prompt}
          </p>
        </div>
      </div>

      {/* Footer / Tags */}
      <div className="p-6 pt-4 mt-auto border-t border-gray-50 flex flex-wrap gap-2">
        {app.departments.map(dept => (
          <span key={dept} className={`text-xs font-medium px-2.5 py-1 rounded-full ${getDepartmentColor(dept)}`}>
            {dept}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
