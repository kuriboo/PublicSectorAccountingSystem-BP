import React from 'react';

// 型定義
interface BudgetFormProps {
  year: string;
  no: number;
  reportType: '予算' | '決算';
  onYearChange: (year: string) => void;
  onNoChange: (no: number) => void;
  onReportTypeChange: (type: '予算' | '決算') => void;
  onSubmit: () => void;
  onClear: () => void;
}

// コンポーネント定義
const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  no,
  reportType,
  onYearChange,
  onNoChange,
  onReportTypeChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 bg-gray-100 max-w-md mx-auto">
      <header className="bg-purple-100 p-2 text-center text-lg font-semibold text-purple-800">
        補てん財源表作成
      </header>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-3">
          <label className="text-gray-700">年度:</label>
          <input
            type="text"
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
            className="border rounded px-2 py-1"
          />
        </div>

        <div className="flex justify-between items-center mb-3">
          <label className="text-gray-700">表No.:</label>
          <input
            type="number"
            value={no}
            onChange={(e) => onNoChange(Number(e.target.value))}
            className="border rounded px-2 py-1"
          />
        </div>

        <div className="mb-3">
          <label className="text-gray-700">表区分:</label>
          <div className="flex items-center mt-2">
            <label className="mr-4">
              <input
                type="radio"
                checked={reportType === '予算'}
                onChange={() => onReportTypeChange('予算')}
              />
              予算
            </label>
            <label>
              <input
                type="radio"
                checked={reportType === '決算'}
                onChange={() => onReportTypeChange('決算')}
              />
              決算
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button onClick={onSubmit} className="flex-1 bg-blue-500 text-white rounded px-3 py-1">
          OK
        </button>
        <button onClick={onClear} className="flex-1 bg-gray-300 text-black rounded px-3 py-1">
          クリア
        </button>
        <button className="flex-1 bg-gray-300 text-black rounded px-3 py-1">
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;