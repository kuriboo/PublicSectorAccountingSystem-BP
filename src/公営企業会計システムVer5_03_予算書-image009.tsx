// components/BudgetForm.tsx

import React from 'react';

// TypeScriptの型定義
interface BudgetFormProps {
  year?: string;
  budgetCategory?: string;
  times?: number;
  totalAmountType?: string;
  targetScope?: '全体' | 'ブロック' | 'セグメント';
  rangeStart?: string;
  rangeEnd?: string;
  showOnlyAdjustedInput?: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  year = '令和02',
  budgetCategory = '3予算見込',
  times = 1,
  totalAmountType = '見積要求',
  targetScope = '全体',
  rangeStart = '0000000',
  rangeEnd = '99999999',
  showOnlyAdjustedInput = false,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">予算仕訳リスト／仕訳科目別作成</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          年度
        </label>
        <input
          type="text"
          value={year}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          予算編成区分
        </label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          value={budgetCategory}
        >
          <option value="3予算見込">3予算見込</option>
          {/* Add other options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          回数
        </label>
        <input
          type="number"
          value={times}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          金額種別
        </label>
        <input
          type="text"
          value={totalAmountType}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          集計対象
        </label>
        <div className="mt-2">
          <label>
            <input
              type="radio"
              name="targetScope"
              value="全体"
              checked={targetScope === '全体'}
            />
            全体
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="targetScope"
              value="ブロック"
              checked={targetScope === 'ブロック'}
            />
            ブロック
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="targetScope"
              value="セグメント"
              checked={targetScope === 'セグメント'}
            />
            セグメント
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          範囲指定
        </label>
        <div className="flex mt-2">
          <input
            type="text"
            value={rangeStart}
            className="block w-full rounded-md border-gray-300 shadow-sm"
            readOnly
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={rangeEnd}
            className="block w-full rounded-md border-gray-300 shadow-sm"
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            checked={showOnlyAdjustedInput}
            readOnly
          />
          調整入力分のみ出力
        </label>
      </div>
      <div className="flex justify-end">
        <button 
          onClick={onEnd} 
          className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          終了
        </button>
        <button 
          onClick={onClear} 
          className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button 
          onClick={onSubmit} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
