import React from 'react';

type BudgetFormProps = {
  outputLevel: '節' | '細節' | '明細' | '所属節' | '所属細節';
  startDate: string;
  endDate: string;
  budgetCode: string;
  organization: string;
  aggregationTarget: '全体' | 'ブロック' | 'セグメント';
  district: string;
  onExecute: () => void;
  onClear: () => void;
  onClose: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  outputLevel,
  startDate,
  endDate,
  budgetCode,
  organization,
  aggregationTarget,
  district,
  onExecute,
  onClear,
  onClose
}) => {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-lg font-bold text-blue-700">収入予算差引簿作成</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">出力レベル</label>
        <div className="mt-2">
          {['節', '細節', '明細', '所属節', '所属細節'].map((level) => (
            <label key={level} className="inline-flex items-center mr-4">
              <input
                type="radio"
                className="form-radio text-indigo-600"
                name="outputLevel"
                value={level}
                checked={outputLevel === level}
                onChange={() => {}}
              />
              <span className="ml-2">{level}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">範囲指定</label>
        <div className="flex space-x-4 mt-2">
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="開始日"
            value={startDate}
            onChange={() => {}}
          />
          <span className="text-gray-500">~</span>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="終了日"
            value={endDate}
            onChange={() => {}}
          />
        </div>
        <div className="mt-2 flex space-x-4">
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="予算科目"
            value={budgetCode}
            onChange={() => {}}
          />
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="所属"
            value={organization}
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">集計対象</label>
        <div className="mt-2">
          {['全体', 'ブロック', 'セグメント'].map((target) => (
            <label key={target} className="inline-flex items-center mr-4">
              <input
                type="radio"
                className="form-radio text-indigo-600"
                name="aggregationTarget"
                value={target}
                checked={aggregationTarget === target}
                onChange={() => {}}
              />
              <span className="ml-2">{target}</span>
            </label>
          ))}
        </div>
        <input
          type="text"
          className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="地区"
          value={district}
          onChange={() => {}}
        />
      </div>
      <div className="flex justify-between mt-6">
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-indigo-600" />
            <span className="ml-2 text-sm">前月繰越行のみでも印字する</span>
          </label>
        </div>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm" onClick={onExecute}>
            OK
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-sm" onClick={onClear}>
            クリア
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm" onClick={onClose}>
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
```