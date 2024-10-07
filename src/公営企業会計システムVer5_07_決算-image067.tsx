import React from 'react';

// TypeScriptの型定義
interface ReportFilterProps {
  fiscalYear: string;
  taxPeriodStart: string;
  taxPeriodEnd: string;
  onFiscalYearChange: (year: string) => void;
  onExportCsv: () => void;
  onClear: () => void;
  onClose: () => void;
}

// コンポーネントの定義
const ReportFilter: React.FC<ReportFilterProps> = ({
  fiscalYear,
  taxPeriodStart,
  taxPeriodEnd,
  onFiscalYearChange,
  onExportCsv,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 border shadow-md bg-white">
      {/* ヘッダー */}
      <div className="bg-blue-200 p-2 rounded-md mb-4">
        <h1 className="text-lg font-bold text-blue-900">税区分集計・調整額一覧表</h1>
      </div>

      {/* 範囲指定 */}
      <div className="mb-4">
        <h2 className="text-md font-bold text-blue-800 mb-2">範囲指定</h2>
        <div className="flex items-center mb-2">
          <span className="mr-2">会計年度</span>
          <select
            value={fiscalYear}
            onChange={(e) => onFiscalYearChange(e.target.value)}
            className="border rounded p-1 focus:outline-none focus:ring"
          >
            <option value="平成31">平成31</option>
            <option value="令和2">令和2</option>
            {/* 必要に応じてオプションを追加 */}
          </select>
          <span className="ml-2">年度</span>
        </div>
        <div>
          <div>
            課税期間 {taxPeriodStart} ～ {taxPeriodEnd}
          </div>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-between">
        <button
          onClick={onExportCsv}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportFilter;
```