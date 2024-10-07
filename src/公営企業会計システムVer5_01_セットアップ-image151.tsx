import React from 'react';

type YearSelectProps = {
  currentYear: number;
  onChange: (year: number) => void;
};

type RangeInputProps = {
  startValue: string;
  endValue: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
};

type ActionButtonsProps = {
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Year selection dropdown component
const YearSelect: React.FC<YearSelectProps> = ({ currentYear, onChange }) => {
  const years = Array.from({ length: 10 }, (_, i) => currentYear - 5 + i);
  return (
    <select
      className="border border-gray-300 rounded p-2"
      value={currentYear}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      {years.map((year) => (
        <option key={year} value={year}>
          平成{year}
        </option>
      ))}
    </select>
  );
};

// Range input component for numbers
const RangeInput: React.FC<RangeInputProps> = ({
  startValue,
  endValue,
  onStartChange,
  onEndChange,
}) => (
  <div className="flex items-center space-x-4">
    <input
      className="border border-gray-300 rounded p-2 w-20"
      type="text"
      value={startValue}
      onChange={(e) => onStartChange(e.target.value)}
    />
    <span>~</span>
    <input
      className="border border-gray-300 rounded p-2 w-20"
      type="text"
      value={endValue}
      onChange={(e) => onEndChange(e.target.value)}
    />
  </div>
);

// Action buttons component
const ActionButtons: React.FC<ActionButtonsProps> = ({
  onOk,
  onClear,
  onExit,
}) => (
  <div className="flex justify-end space-x-2 mt-4">
    <button className="bg-gray-200 p-2 rounded" onClick={onOk}>
      OK
    </button>
    <button className="bg-gray-200 p-2 rounded" onClick={onClear}>
      クリア
    </button>
    <button className="bg-gray-200 p-2 rounded" onClick={onExit}>
      終了
    </button>
  </div>
);

type MasterListProps = {
  currentYear: number;
  startValue: string;
  endValue: string;
  onYearChange: (year: number) => void;
  onStartValueChange: (value: string) => void;
  onEndValueChange: (value: string) => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Main component integrating year select, range input, and buttons
const MasterList: React.FC<MasterListProps> = ({
  currentYear,
  startValue,
  endValue,
  onYearChange,
  onStartValueChange,
  onEndValueChange,
  onOk,
  onClear,
  onExit,
}) => (
  <div className="p-6 bg-white rounded shadow-md">
    <div className="flex items-center mb-4">
      <YearSelect currentYear={currentYear} onChange={onYearChange} />
      <span className="ml-2">年度</span>
    </div>
    <div className="mb-4">
      <label className="block mb-2">範囲指定</label>
      <RangeInput
        startValue={startValue}
        endValue={endValue}
        onStartChange={onStartValueChange}
        onEndChange={onEndValueChange}
      />
    </div>
    <ActionButtons onOk={onOk} onClear={onClear} onExit={onExit} />
  </div>
);

export default MasterList;
