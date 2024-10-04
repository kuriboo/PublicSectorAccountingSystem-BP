```tsx
import { FC } from 'react';

// TypeScriptの型定義
type DateRangeSelectorProps = {
  title: string;
  createdBy: string;
  department: string;
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onClear: () => void;
  onSubmit: () => void;
};

// DateRangeSelectorコンポーネント
const DateRangeSelector: FC<DateRangeSelectorProps> = ({
  title,
  createdBy,
  department,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onClear,
  onSubmit,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-purple-700">{title}</h1>
        <div className="text-right text-blue-900">
          <p>{department}</p>
          <p>{createdBy}</p>
        </div>
      </div>
      <div className="border p-4 mb-4">
        <h2 className="text-lg font-bold text-blue-900 mb-2">範囲指定</h2>
        <div className="flex items-center">
          <label className="mr-2">作表日付</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="border rounded p-2 mr-4"
          />
          <span>~</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="border rounded p-2 ml-4"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DateRangeSelector;
```