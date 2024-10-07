import React, { useState } from 'react';

type Props = {
  initialYear?: string;
  initialStartRange?: string;
  initialEndRange?: string;
  onSubmit?: (year: string, startRange: string, endRange: string) => void;
  onClear?: () => void;
  onExit?: () => void;
};

const RangeSelector: React.FC<Props> = ({
  initialYear = "平成29",
  initialStartRange = "0000000",
  initialEndRange = "9999999",
  onSubmit,
  onClear,
  onExit,
}) => {
  const [year, setYear] = useState(initialYear);
  const [startRange, setStartRange] = useState(initialStartRange);
  const [endRange, setEndRange] = useState(initialEndRange);

  return (
    <div className="p-4">
      <div className="flex space-x-2 items-center mb-4">
        <label className="font-bold">年度</label>
        <select
          className="bg-blue-100 border rounded p-1"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="平成29">平成29</option>
          <option value="平成30">平成30</option>
          <option value="平成31">平成31</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="border p-4 mb-4">
        <h2 className="font-bold mb-2">範囲指定</h2>
        <div className="flex items-center space-x-2">
          <button className="bg-purple-400 text-white rounded px-2">所属</button>
          <input
            type="text"
            className="border rounded p-1"
            value={startRange}
            onChange={(e) => setStartRange(e.target.value)}
          />
          <span>~</span>
          <input
            type="text"
            className="border rounded p-1"
            value={endRange}
            onChange={(e) => setEndRange(e.target.value)}
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-gray-200 rounded px-4 py-2"
          onClick={() => onSubmit && onSubmit(year, startRange, endRange)}
        >
          OK
        </button>
        <button
          className="bg-gray-200 rounded px-4 py-2"
          onClick={() => {
            setYear(initialYear);
            setStartRange(initialStartRange);
            setEndRange(initialEndRange);
            onClear && onClear();
          }}
        >
          クリア
        </button>
        <button
          className="bg-gray-200 rounded px-4 py-2"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default RangeSelector;
```