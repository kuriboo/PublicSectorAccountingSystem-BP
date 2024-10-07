// Import necessary libraries and styles
import React from 'react';

// TypeScript interfaces for component props
interface FormProps {
  year: string;
  budgetSection: string;
  reportType: '損益計算書' | '貸借対照表';
  onYearChange: (year: string) => void;
  onBudgetSectionChange: (section: string) => void;
  onReportTypeChange: (type: '損益計算書' | '貸借対照表') => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

// Functional component definition
const AccountingForm: React.FC<FormProps> = ({
  year,
  budgetSection,
  reportType,
  onYearChange,
  onBudgetSectionChange,
  onReportTypeChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-blue-100 p-4 rounded-lg">
        <div className="mb-4">
          <h1 className="text-lg font-bold mb-2">損益計算書 / 貸借対照表</h1>
          <div>
            <label className="mr-4">帳票種別:</label>
            <input
              type="radio"
              name="reportType"
              value="損益計算書"
              checked={reportType === '損益計算書'}
              onChange={() => onReportTypeChange('損益計算書')}
              className="mr-2"
            />
            損益計算書
            <input
              type="radio"
              name="reportType"
              value="貸借対照表"
              checked={reportType === '貸借対照表'}
              onChange={() => onReportTypeChange('貸借対照表')}
              className="ml-4 mr-2"
            />
            貸借対照表
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-md font-semibold mb-2">作表条件</h2>
          <div className="flex items-center mb-2">
            <label className="w-20">年度:</label>
            <input
              type="text"
              value={year}
              onChange={(e) => onYearChange(e.target.value)}
              className="border border-gray-300 rounded p-1"
            />
          </div>

          <div className="flex items-center mb-2">
            <label className="w-20">予算編成区分:</label>
            <input
              type="text"
              value={budgetSection}
              onChange={(e) => onBudgetSectionChange(e.target.value)}
              className="border border-gray-300 rounded p-1"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={onSubmit}
            className="bg-gray-300 py-1 px-4 rounded hover:bg-gray-400"
          >
            CSV出力
          </button>
          <button
            onClick={onClear}
            className="bg-gray-300 py-1 px-4 rounded hover:bg-gray-400"
          >
            クリア
          </button>
          <button
            onClick={onExit}
            className="bg-gray-300 py-1 px-4 rounded hover:bg-gray-400"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountingForm;
```