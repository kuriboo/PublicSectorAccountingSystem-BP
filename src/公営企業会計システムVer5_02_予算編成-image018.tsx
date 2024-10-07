import React from 'react';

// 型定義
type BudgetFormProps = {
  year: number;
  budgetType: string;
  count: number;
  accountType: string;
  finalEstimate: string;
  itemLevel: string;
  rangeStart: string;
  rangeEnd: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

// コンポーネント
const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  budgetType,
  count,
  accountType,
  finalEstimate,
  itemLevel,
  rangeStart,
  rangeEnd,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg text-gray-800">
      {/* 年度 */}
      <div className="mb-4">
        <label className="font-bold">年度: {year}</label>
      </div>

      {/* 予算種別 */}
      <div className="mb-4">
        <label className="block font-bold">予算種別</label>
        <input
          type="text"
          value={budgetType}
          className="w-full border rounded p-2"
          readOnly
        />
      </div>

      {/* 回数 */}
      <div className="mb-4">
        <label className="block font-bold">回数</label>
        <input
          type="number"
          value={count}
          className="w-full border rounded p-2"
          readOnly
        />
      </div>

      {/* 帳票種別 */}
      <div className="mb-4">
        <label className="block font-bold">帳票種別</label>
        <input
          type="text"
          value={accountType}
          className="w-full border rounded p-2"
          readOnly
        />
      </div>

      {/* 最終査定値 */}
      <div className="mb-4">
        <label className="block font-bold">最終査定値</label>
        <input
          type="text"
          value={finalEstimate}
          className="w-full border rounded p-2"
          readOnly
        />
      </div>

      {/* 科目レベル */}
      <div className="mb-4">
        <label className="block font-bold">科目レベル</label>
        <input
          type="text"
          value={itemLevel}
          className="w-full border rounded p-2"
          readOnly
        />
      </div>

      {/* 範囲指定 */}
      <div className="mb-4">
        <label className="block font-bold">範囲指定</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={rangeStart}
            className="flex-1 border rounded p-2"
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            value={rangeEnd}
            className="flex-1 border rounded p-2"
            readOnly
          />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-black py-2 px-4 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
