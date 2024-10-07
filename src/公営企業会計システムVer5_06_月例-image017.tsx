import React from 'react';

// コンポーネントのプロパティの型定義
interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  deptStart: string;
  deptEnd: string;
  flowStart: number;
  flowEnd: number;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  deptStart,
  deptEnd,
  flowStart,
  flowEnd,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="mx-auto mt-10 w-3/4 border p-6 shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-4">範囲指定</h2>
      <div className="flex items-center space-x-2 mb-4">
        <label className="font-bold text-blue-700">流用充用・流用戻し日</label>
        <input
          type="date"
          value={startDate}
          className="border p-2"
          readOnly
        />
        <span>〜</span>
        <input
          type="date"
          value={endDate}
          className="border p-2"
          readOnly
        />
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <button className="bg-blue-200 p-2 rounded">所属</button>
        <input
          type="text"
          value={deptStart}
          className="border p-2"
          readOnly
        />
        <span>〜</span>
        <input
          type="text"
          value={deptEnd}
          className="border p-2"
          readOnly
        />
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <label className="font-bold text-blue-700">流用充用番号</label>
        <input
          type="number"
          value={flowStart}
          className="border p-2"
          readOnly
        />
        <span>〜</span>
        <input
          type="number"
          value={flowEnd}
          className="border p-2"
          readOnly
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onOk}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400"
        >
          終了
        </button>
      </div>
    </div>
  );
};
