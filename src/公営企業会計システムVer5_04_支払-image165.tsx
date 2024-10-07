import React from 'react';

type Props = {
  startDate: string;
  endDate: string;
  startCode: string;
  endCode: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const RangeSelector: React.FC<Props> = ({
  startDate,
  endDate,
  startCode,
  endCode,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="max-w-md mx-auto mt-10 border p-4 rounded-lg shadow">
      <h2 className="text-center text-lg font-bold mb-4">範囲指定</h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <label className="font-bold">精算日:</label>
          <input
            type="text"
            value={startDate}
            readOnly
            className="border p-1 rounded w-32 text-center"
          />
          <span>～</span>
          <input
            type="text"
            value={endDate}
            readOnly
            className="border p-1 rounded w-32 text-center"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">
            所属
          </button>
          <input
            type="text"
            value={startCode}
            readOnly
            className="border p-1 rounded w-20 text-center"
          />
          <span>～</span>
          <input
            type="text"
            value={endCode}
            readOnly
            className="border p-1 rounded w-20 text-center"
          />
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onOk}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            OK
          </button>
          <button
            onClick={onClear}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            クリア
          </button>
          <button
            onClick={onExit}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default RangeSelector;
```