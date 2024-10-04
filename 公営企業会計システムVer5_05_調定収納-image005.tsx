```tsx
import React from 'react';

// Props type definition
type DateRangePickerProps = {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onSubmit: () => void;
  onClear: () => void;
};

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-md max-w-lg mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">収納日</label>
        <div className="flex items-center">
          <input
            type="text"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="border p-2 rounded-md mr-2 w-full"
            placeholder="開始日"
          />
          <span className="mx-2">～</span>
          <input
            type="text"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="border p-2 rounded-md mr-2 w-full"
            placeholder="終了日"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default DateRangePicker;
```