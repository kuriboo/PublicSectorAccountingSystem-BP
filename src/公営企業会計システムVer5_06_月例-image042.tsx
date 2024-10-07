import React from 'react';

// TypeScript props interface
interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onOkClick: () => void;
  onClearClick: () => void;
}

// DateRangePicker Component
const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onOkClick,
  onClearClick,
}) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="font-semibold">集計年月:</label>
        <div className="flex items-center mt-2">
          {/* Start Date Input */}
          <input
            type="text"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="border p-2 rounded mr-2"
            placeholder="平成29年04月"
          />
          <span className="mx-2">~</span>
          {/* End Date Input */}
          <input
            type="text"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="border p-2 rounded ml-2"
            placeholder="平成30年08月"
          />
        </div>
      </div>
      <div className="flex justify-end">
        {/* OK Button */}
        <button
          onClick={onOkClick}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          OK
        </button>
        {/* Clear Button */}
        <button
          onClick={onClearClick}
          className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default DateRangePicker;
```