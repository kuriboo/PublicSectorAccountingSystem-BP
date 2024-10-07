import React from 'react';

// TypeScript型定義
interface Props {
  fiscalYear: string;
  lastYearOption: string;
  currentYearOption: string;
  summary: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Next.js + TypeScriptコンポーネント
const FinancialProcessing: React.FC<Props> = ({
  fiscalYear,
  lastYearOption,
  currentYearOption,
  summary,
  onConfirm,
  onClear,
  onCancel
}) => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded shadow p-6">
      {/* ヘッダー */}
      <h2 className="text-lg font-semibold border-b pb-2 mb-4">実績値集計処理</h2>

      {/* 会計年度 */}
      <div className="mb-4">
        <p className="font-medium">次期会計年度</p>
        <p>{fiscalYear}</p>
      </div>

      {/* 集計金額 */}
      <div className="mb-4">
        <p className="font-medium">集計金額</p>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input type="radio" name="amount" className="form-radio" checked />
            <span className="ml-2">{lastYearOption}</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="amount" className="form-radio" />
            <span className="ml-2">{currentYearOption}</span>
          </label>
        </div>
      </div>

      {/* 処理概要 */}
      <div className="mb-4">
        <p className="font-medium">処理概要</p>
        <p className="text-sm text-gray-700">{summary}</p>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-3">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onConfirm}>
          OK
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onCancel}>
          終了
        </button>
      </div>
    </div>
  );
};

export default FinancialProcessing;
