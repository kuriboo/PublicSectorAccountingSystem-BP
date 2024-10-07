import React from 'react';

// Props type definition for the component
type ExpenseFormProps = {
  budgetCode: string;
  sectionCode: string;
  detailCode: string;
  taxRateOptions: string[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  budgetCode,
  sectionCode,
  detailCode,
  taxRateOptions,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-md w-full max-w-xl mx-auto">
      <h1 className="text-lg font-bold mb-4">個別取得入力（固定無）明細登録</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block font-semibold">節</label>
          <input type="text" value={budgetCode} readOnly className="w-full p-2 border" />
        </div>
        <div>
          <label className="block font-semibold">細節</label>
          <input type="text" value={sectionCode} readOnly className="w-full p-2 border" />
        </div>
        <div>
          <label className="block font-semibold">明細</label>
          <input type="text" value={detailCode} readOnly className="w-full p-2 border" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">税区分</label>
        <select className="w-full p-2 border">
          {taxRateOptions.map((rate, index) => (
            <option key={index} value={rate}>
              {rate}
            </option>
          ))}
        </select>
      </div>
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label className="block font-semibold">収納金額</label>
          <input type="text" className="w-full p-2 border" />
        </div>
        <div className="flex-1">
          <label className="block font-semibold">内消費税額</label>
          <input type="text" className="w-full p-2 border" />
        </div>
        <div className="flex-1">
          <label className="block font-semibold">特定収入</label>
          <input type="text" className="w-full p-2 border" />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-gray-300 px-4 py-2 rounded-md">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded-md">
          クリア
        </button>
        <button onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded-md">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
```