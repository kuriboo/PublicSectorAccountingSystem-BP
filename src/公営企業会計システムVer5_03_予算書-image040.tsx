import React from 'react';

// TypeScript interface for component props
interface ReportFormProps {
  year: string;
  budgetOptions: string[];
  currentBudgetSelection: string;
  onBudgetChange: (value: string) => void;
  dateTime: string;
  onCsvExport: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  year,
  budgetOptions,
  currentBudgetSelection,
  onBudgetChange,
  dateTime,
  onCsvExport,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-8 bg-gray-100 rounded-md">
      <h1 className="text-xl font-bold text-blue-600 mb-4">損益計算書/貸借対照表</h1>

      <section className="mb-6">
        <h2 className="text-md font-bold text-blue-600 mb-2">帳票種別</h2>
        <div>
          <label className="mr-4">
            <input type="radio" name="reportType" value="1" /> 損益計算書
          </label>
          <label>
            <input type="radio" name="reportType" value="2" /> 貸借対照表
          </label>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-md font-bold text-blue-600 mb-2">作表条件</h2>
        <div className="mb-2">
          <span>年度</span>
          <input
            type="text"
            value={year}
            readOnly
            className="border border-gray-400 ml-2 p-1 text-center"
          />
        </div>
        <div>
          <span>予算編成区分</span>
          <select
            className="border border-gray-400 ml-2 p-1"
            value={currentBudgetSelection}
            onChange={(e) => onBudgetChange(e.target.value)}
          >
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </section>

      <p className="mb-6">処理概要: 損益計算書・貸借対照表を作成します。</p>

      <section className="mb-6">
        <p>集計日時: {dateTime}</p>
      </section>

      <div className="flex space-x-4">
        <button
          onClick={onCsvExport}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded shadow"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded shadow"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded shadow"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
