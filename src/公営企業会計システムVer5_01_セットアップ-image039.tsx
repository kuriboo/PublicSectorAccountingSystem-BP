import React from 'react';

// 型定義
type BudgetFormProps = {
  year: string;
  budgetTypeOptions: { value: string; label: string }[];
  fromAccount: string;
  toAccount: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

// コンポーネント定義
const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  budgetTypeOptions,
  fromAccount,
  toAccount,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">予算仕訳構成比率マスタリスト作成</h1>
      
      <div className="mb-2">
        <label className="block font-bold">年度</label>
        <select className="p-2 text-lg border border-gray-300 rounded">
          <option>{year}</option>
        </select>
      </div>
      
      <div className="mb-2">
        <label className="block font-bold">予算編成区分</label>
        <select className="p-2 text-lg border border-gray-300 rounded">
          {budgetTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <fieldset className="p-2 border border-gray-400 rounded mt-4">
        <legend className="font-bold">範囲指定</legend>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
            予算科目
          </button>
          <input
            className="p-2 border border-gray-300 rounded"
            type="text"
            value={fromAccount}
            readOnly
          />
          <span>〜</span>
          <button className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
            予算科目
          </button>
          <input
            className="p-2 border border-gray-300 rounded"
            type="text"
            value={toAccount}
            readOnly
          />
        </div>
      </fieldset>

      <div className="flex justify-end space-x-4 mt-4">
        <button
          className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="px-6 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-6 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
```