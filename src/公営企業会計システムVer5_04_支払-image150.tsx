import React from 'react';

// 型定義
type PaymentFilterProps = {
  date: string;
  startNumber: string;
  endNumber: string;
  onDateChange: (date: string) => void;
  onStartNumberChange: (number: string) => void;
  onEndNumberChange: (number: string) => void;
  onEditChange: (enabled: boolean) => void;
};

const PaymentFilter: React.FC<PaymentFilterProps> = ({
  date,
  startNumber,
  endNumber,
  onDateChange,
  onStartNumberChange,
  onEndNumberChange,
  onEditChange,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold">範囲指定</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">支払予定日</label>
        <input
          type="text"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">決定番号</label>
        <div className="flex">
          <input
            type="text"
            value={startNumber}
            onChange={(e) => onStartNumberChange(e.target.value)}
            className="mt-1 p-2 border border-gray-300 bg-blue-100 rounded w-full"
          />
          <span className="mx-2 self-center">〜</span>
          <input
            type="text"
            value={endNumber}
            onChange={(e) => onEndNumberChange(e.target.value)}
            className="mt-1 p-2 border border-gray-300 bg-blue-100 rounded w-full"
          />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="editOption"
          onChange={(e) => onEditChange(e.target.checked)}
          className="p-2"
        />
        <label htmlFor="editOption" className="ml-2 text-sm text-gray-700">
          決定番号ごとに改頁をする
        </label>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-300 rounded">OK</button>
        <button className="px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button className="px-4 py-2 bg-gray-300 rounded">終了</button>
      </div>
    </div>
  );
};

export default PaymentFilter;
