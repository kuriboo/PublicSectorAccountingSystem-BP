import React from 'react';

type CheckboxOption = {
  label: string;
  checked: boolean;
};

type RangeInputProps = {
  startDate: string;
  endDate: string;
  startCode: string;
  endCode: string;
  onDateChange: (start: string, end: string) => void;
  onCodeChange: (start: string, end: string) => void;
  options: CheckboxOption[];
  situationOptions: string[];
  onSituationChange: (value: string) => void;
};

const RangeInput: React.FC<RangeInputProps> = ({
  startDate,
  endDate,
  startCode,
  endCode,
  onDateChange,
  onCodeChange,
  options,
  situationOptions,
  onSituationChange,
}) => {
  return (
    <div className="p-4 rounded shadow-lg bg-gray-100">
      {/* Date Range */}
      <div className="mb-4">
        <label className="block text-gray-700">伝票日付</label>
        <input
          type="text"
          value={startDate}
          onChange={(e) => onDateChange(e.target.value, endDate)}
          className="mr-2 p-1 border border-gray-400 rounded"
        />
        <span>〜</span>
        <input
          type="text"
          value={endDate}
          onChange={(e) => onDateChange(startDate, e.target.value)}
          className="ml-2 p-1 border border-gray-400 rounded"
        />
      </div>

      {/* Code Range */}
      <div className="mb-4">
        <label className="block text-gray-700">所属</label>
        <input
          type="text"
          value={startCode}
          onChange={(e) => onCodeChange(e.target.value, endCode)}
          className="mr-2 p-1 border border-gray-400 rounded"
        />
        <span>〜</span>
        <input
          type="text"
          value={endCode}
          onChange={(e) => onCodeChange(startCode, e.target.value)}
          className="ml-2 p-1 border border-gray-400 rounded"
        />
      </div>

      {/* Options */}
      <div className="mb-4">
        {options.map((option, index) => (
          <label key={index} className="block text-gray-700">
            <input
              type="checkbox"
              checked={option.checked}
              className="mr-2"
              onChange={() => alert('Option change handler')}
            />
            {option.label}
          </label>
        ))}
      </div>

      {/* Situation */}
      <div className="mb-4">
        <label className="block text-gray-700">連携状況</label>
        <select
          onChange={(e) => onSituationChange(e.target.value)}
          className="p-1 border border-gray-400 rounded"
        >
          {situationOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button className="bg-gray-500 text-white py-1 px-4 rounded">OK</button>
        <button className="bg-gray-500 text-white py-1 px-4 rounded">クリア</button>
        <button className="bg-gray-500 text-white py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default RangeInput;
```