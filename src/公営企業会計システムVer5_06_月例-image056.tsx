import React from 'react';

type BudgetFormProps = {
  collectionDate: string;
  startDate: string;
  endDate: string;
  budgetItemStart: number;
  budgetItemEnd: number;
  isDetailed: boolean;
  connection: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  collectionDate,
  startDate,
  endDate,
  budgetItemStart,
  budgetItemEnd,
  isDetailed,
  connection,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-md">
      <div className="mb-4">
        <label className="block font-bold mb-2">集計日付</label>
        <input
          type="date"
          value={collectionDate}
          className="w-full p-2 border rounded"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">期間</label>
        <div className="flex space-x-2">
          <input
            type="date"
            value={startDate}
            className="w-full p-2 border rounded"
            readOnly
          />
          <span className="self-center">〜</span>
          <input
            type="date"
            value={endDate}
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">予算科目</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={budgetItemStart}
            className="w-full p-2 border rounded"
            readOnly
          />
          <span className="self-center">〜</span>
          <input
            type="number"
            value={budgetItemEnd}
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">作表区分</label>
        <div className="flex space-x-4">
          <label>
            <input type="radio" checked={!isDetailed} readOnly />
            <span className="ml-2">節</span>
          </label>
          <label>
            <input type="radio" checked={isDetailed} readOnly />
            <span className="ml-2">明細</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">綴り掛け</label>
        <div className="flex space-x-4">
          <label>
            <input type="radio" checked={connection} readOnly />
            <span className="ml-2">する</span>
          </label>
          <label>
            <input type="radio" checked={!connection} readOnly />
            <span className="ml-2">しない</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
```