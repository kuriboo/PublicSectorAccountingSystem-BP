import React, { FC } from 'react';

// 型定義
type RangeSelectorProps = {
  startDate: string;
  endDate: string;
  accountNumber: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onAccountNumberChange: (num: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

// コンポーネント
const RangeSelector: FC<RangeSelectorProps> = ({
  startDate,
  endDate,
  accountNumber,
  onStartDateChange,
  onEndDateChange,
  onAccountNumberChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100">
      <h1 className="text-lg font-bold mb-4">範囲指定</h1>
      <div className="border p-4 bg-white rounded-md shadow-lg">
        <div className="mb-2">
          <label className="mr-2">振替日:</label>
          <input
            type="text"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="mr-2">未収科目:</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => onAccountNumberChange(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            OK
          </button>
          <button
            onClick={onClear}
            className="bg-gray-300 px-4 py-2 rounded mr-2"
          >
            クリア
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default RangeSelector;