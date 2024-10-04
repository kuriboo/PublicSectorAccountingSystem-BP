```tsx
import React from 'react';

// コンポーネントのプロパティ用の型定義
type PaymentScheduleProps = {
  startDate: string;
  endDate: string;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
};

// 再利用可能なコンポーネントの定義
const PaymentSchedule: React.FC<PaymentScheduleProps> = ({
  startDate,
  endDate,
  onConfirm,
  onClear,
  onExit,
}) => {
  return (
    <div className="bg-gray-100 p-8 rounded shadow-md max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">支払明細書 (一覧) 作成</h1>
      <div className="bg-white p-6 rounded border border-gray-300 mb-4">
        <h2 className="text-xl font-bold mb-2">範囲指定</h2>
        <div className="flex items-center mb-4">
          <span className="text-lg font-semibold mr-4">支払予定日</span>
          <input
            type="text"
            value={startDate}
            readOnly
            className="border-b border-gray-400 focus:outline-none focus:border-blue-500 mr-2"
          />
          <span className="mx-2">〜</span>
          <input
            type="text"
            value={endDate}
            readOnly
            className="border-b border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={onConfirm} className="bg-blue-500 text-white py-2 px-4 rounded mr-2 shadow">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-black py-2 px-4 rounded mr-2 shadow">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white py-2 px-4 rounded shadow">
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentSchedule;
```