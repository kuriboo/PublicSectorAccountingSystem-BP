import React from 'react';

type BudgetFormProps = {
  year: number;
  estimateType: 'request' | 'fixed';
  estimateAmount: number;
  pastYearEstimateCount: number;
  onCsvExport: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  estimateType,
  estimateAmount,
  pastYearEstimateCount,
  onCsvExport,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4">予算資金計画表作成</h2>

      {/* Year Selection */}
      <div className="mb-4">
        <label className="block text-gray-700">作成年:</label>
        <input
          type="number"
          value={year}
          className="mt-1 block w-full border-gray-300 rounded-md"
          readOnly
        />
      </div>

      {/* Estimate Information */}
      <div className="mb-4">
        <label className="block text-gray-700">自動仕訳情報:</label>
        <div className="mt-1">
          <label className="mr-4">
            <input
              type="radio"
              checked={estimateType === 'request'}
              className="mr-1"
              readOnly
            />
            見積要求額
          </label>
          <label>
            <input
              type="radio"
              checked={estimateType === 'fixed'}
              className="mr-1"
              readOnly
            />
            査定額
          </label>
          <input
            type="number"
            value={estimateAmount}
            className="ml-4 border-gray-300 rounded-md"
            readOnly
          />
        </div>
      </div>

      {/* Past Year Estimate Count */}
      <div className="mb-4">
        <label className="block text-gray-700">前年度繰越金:</label>
        <div className="mt-1 flex items-center">
          <span>決算見込回数</span>
          <input
            type="number"
            value={pastYearEstimateCount}
            className="ml-2 border-gray-300 rounded-md"
            readOnly
          />
          <span>回</span>
        </div>
      </div>

      {/* Processing Overview */}
      <div className="mb-4">
        <label className="block text-gray-700">処理概要:</label>
        <p className="mt-1 text-gray-600">予算資金計画表を作成します。</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onCsvExport}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
```