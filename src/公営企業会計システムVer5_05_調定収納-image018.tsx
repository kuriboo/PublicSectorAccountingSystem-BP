import React from 'react';

type DateRangeFormProps = {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onCloseClick: () => void;
};

const DateRangeForm: React.FC<DateRangeFormProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onOkClick,
  onClearClick,
  onCloseClick,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">所属別収納日計表</h1>
      <div className="mb-2">
        <label className="block font-medium mb-1">収納日</label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <span>〜</span>
          <input
            type="text"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        <button
          onClick={onOkClick}
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          OK
        </button>
        <button
          onClick={onClearClick}
          className="bg-gray-300 text-black rounded px-4 py-2"
        >
          クリア
        </button>
        <button
          onClick={onCloseClick}
          className="bg-red-500 text-white rounded px-4 py-2"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DateRangeForm;

// Usage Example:
// <DateRangeForm
//   startDate="平成29年01月01日"
//   endDate="平成29年08月31日"
//   onStartDateChange={(date) => console.log(date)}
//   onEndDateChange={(date) => console.log(date)}
//   onOkClick={() => console.log("OK clicked")}
//   onClearClick={() => console.log("Clear clicked")}
//   onCloseClick={() => console.log("Close clicked")}
// />
```