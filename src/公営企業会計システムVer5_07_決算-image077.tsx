import React from 'react';

interface Props {
  startDate: string;
  endDate: string;
  onOk?: () => void;
  onCancel?: () => void;
}

const DateRangeComponent: React.FC<Props> = ({ startDate, endDate, onOk, onCancel }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-lg font-bold text-blue-900 bg-blue-200 py-2 px-4 rounded">
        収入区分未設定伝票 一覧
      </h1>
      <div className="mt-4">
        <h2 className="text-blue-900 font-semibold">範囲指定</h2>
        <div className="mt-2 border rounded-md p-4">
          <div className="flex justify-between">
            <span className="font-bold text-blue-900">伝票日付</span>
            <span>{startDate}</span>
            <span>～</span>
            <span>{endDate}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button 
          className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded"
          onClick={onCancel}
        >
          終了
        </button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          onClick={onOk}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default DateRangeComponent;
