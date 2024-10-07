import React from 'react';

interface BudgetFormProps {
  year: string;
  budgetType: string;
  budgetDivision: string;
  count: number;
  accountType: 'subject' | 'attribute';
  finalDecision: 'estimate' | 'approval';
  itemLevel: 'day' | 'section' | 'detail' | 'specification';
  rangeStart: string;
  rangeEnd: string;
  taxRate: number;
  taxSpecified: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  budgetType,
  budgetDivision,
  count,
  accountType,
  finalDecision,
  itemLevel,
  rangeStart,
  rangeEnd,
  taxRate,
  taxSpecified,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <h1 className="text-lg font-bold">予算集計表</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <label className="w-24">年度:</label>
          <input type="text" value={year} className="w-full border rounded p-1" />
        </div>
        <div className="flex items-center">
          <label className="w-24">予算種別:</label>
          <input type="text" value={budgetType} className="w-full border rounded p-1" />
        </div>
        <div className="flex items-center">
          <label className="w-24">予算編成区分:</label>
          <input type="text" value={budgetDivision} className="w-full border rounded p-1" />
        </div>
        <div className="flex items-center">
          <label className="w-24">回数:</label>
          <input type="number" value={count} className="w-full border rounded p-1" />
        </div>
      </div>
      
      <div className="mb-4">
        <fieldset className="border p-2">
          <legend className="px-2">帳票種別</legend>
          <div className="flex">
            <label className="mr-4">
              <input type="radio" checked={accountType === 'subject'} readOnly /> 科目別
            </label>
            <label>
              <input type="radio" checked={accountType === 'attribute'} readOnly /> 所属別
            </label>
          </div>
        </fieldset>
      </div>

      <div className="mb-4">
        <fieldset className="border p-2">
          <legend className="px-2">最終査定値</legend>
          <div className="flex">
            <label className="mr-4">
              <input type="radio" checked={finalDecision === 'estimate'} readOnly /> 見積要求額
            </label>
            <label>
              <input type="radio" checked={finalDecision === 'approval'} readOnly /> 査定額
            </label>
          </div>
        </fieldset>
      </div>

      <div className="mb-4">
        <fieldset className="border p-2">
          <legend className="px-2">科目レベル</legend>
          <div className="flex">
            <label className="mr-4">
              <input type="radio" checked={itemLevel === 'day'} readOnly /> 目
            </label>
            <label className="mr-4">
              <input type="radio" checked={itemLevel === 'section'} readOnly /> 節
            </label>
            <label className="mr-4">
              <input type="radio" checked={itemLevel === 'detail'} readOnly /> 細節
            </label>
            <label>
              <input type="radio" checked={itemLevel === 'specification'} readOnly /> 明細
            </label>
          </div>
        </fieldset>
      </div>

      <div className="mb-4">
        <fieldset className="border p-2">
          <legend className="px-2">範囲指定</legend>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <label className="w-24">所属:</label>
              <input type="text" value={rangeStart} className="w-full border rounded p-1" />
              <span className="mx-2">~</span>
              <input type="text" value={rangeEnd} className="w-full border rounded p-1" />
            </div>
          </div>
        </fieldset>
      </div>

      <div className="mb-4">
        <fieldset className="border p-2">
          <legend className="px-2">税率指定</legend>
          <div className="flex items-center">
            <label>
              <input type="checkbox" checked={taxSpecified} readOnly /> 指定する
            </label>
            <input type="number" value={taxRate} className="border rounded p-1 ml-2 w-full" />
            <span>%</span>
          </div>
        </fieldset>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
