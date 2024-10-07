import React from 'react';

// Propsの型定義
interface MonthlyReportProps {
  currentDate: string;
  onCSVExport: () => void;
  onClear: () => void;
  onExit: () => void;
}

const MonthlyReport: React.FC<MonthlyReportProps> = ({ 
  currentDate,
  onCSVExport,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-blue-800">月次貸借対照表</h1>
        <div className="text-sm text-right">
          <div>行政市事業会計</div>
          <div>最高権限 管理者 行政 太郎</div>
          <div>{currentDate}</div>
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-2">
          <span className="font-semibold">作表日付</span>: 
          <span className="ml-2 text-teal-600">{currentDate}</span>
        </div>
        <fieldset className="border p-2">
          <legend className="font-semibold">集計対象</legend>
          <div className="flex items-center space-x-4">
            <label>
              <input type="radio" name="aggregation" defaultChecked />
              <span className="ml-1">全体</span>
            </label>
            <label>
              <input type="radio" name="aggregation" />
              <span className="ml-1">ブロック</span>
            </label>
            <label>
              <input type="radio" name="aggregation" />
              <span className="ml-1">セグメント</span>
            </label>
          </div>
        </fieldset>
      </div>
      <div className="flex space-x-4">
        <button 
          onClick={onCSVExport} 
          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded"
        >
          CSV出力
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded"
        >
          クリア
        </button>
        <button 
          onClick={onExit} 
          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
}

export default MonthlyReport;