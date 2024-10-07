import React from 'react';

// 型定義
interface AccountingFormProps {
  fiscalYear: string;
  aggregationNumber: string;
  itemName: string;
  onItemNameChange: (value: string) => void;
  aggregationNumberOptions: string[];
  onAggregationNumberChange: (value: string) => void;
  onSubmit: () => void;
  onDelete: () => void;
}

const AccountingForm: React.FC<AccountingFormProps> = ({
  fiscalYear,
  aggregationNumber,
  itemName,
  onItemNameChange,
  aggregationNumberOptions,
  onAggregationNumberChange,
  onSubmit,
  onDelete,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md">
      <h4 className="text-lg font-bold mb-4">試算表集計マスタ</h4>

      <div className="mb-4">
        <label className="block mb-1 font-medium">会計年度</label>
        <input
          type="text"
          value={fiscalYear}
          readOnly
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">集計番号</label>
        <select
          value={aggregationNumber}
          onChange={(e) => onAggregationNumberChange(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          {aggregationNumberOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">項目名称</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => onItemNameChange(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          登録
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          削除
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;
