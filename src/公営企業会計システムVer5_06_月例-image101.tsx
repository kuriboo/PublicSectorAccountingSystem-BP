import React from 'react';

type InputRangeProps = {
  label: string;
  startValue: string;
  endValue: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
  placeholderStart?: string;
  placeholderEnd?: string;
};

const InputRange: React.FC<InputRangeProps> = ({
  label,
  startValue,
  endValue,
  onStartChange,
  onEndChange,
  placeholderStart = '',
  placeholderEnd = '',
}) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="font-bold">{label}</label>
      <input
        type="text"
        value={startValue}
        onChange={(e) => onStartChange(e.target.value)}
        placeholder={placeholderStart}
        className="border rounded px-2 py-1"
      />
      <span>~</span>
      <input
        type="text"
        value={endValue}
        onChange={(e) => onEndChange(e.target.value)}
        placeholder={placeholderEnd}
        className="border rounded px-2 py-1"
      />
    </div>
  );
};

const SelectOptions: React.FC<{ label: string; options: string[]; onChange: (value: string) => void; selected: string }> = ({
  label,
  options,
  onChange,
  selected,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="font-bold">{label}</label>
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-1">
          <input
            type="radio"
            value={option}
            checked={selected === option}
            onChange={() => onChange(option)}
            className="form-radio"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

type RangeSpecificationComponentProps = {
  dateRangeStart: string;
  dateRangeEnd: string;
  onDateRangeStartChange: (value: string) => void;
  onDateRangeEndChange: (value: string) => void;
  accountRangeStart: string;
  accountRangeEnd: string;
  onAccountRangeStartChange: (value: string) => void;
  onAccountRangeEndChange: (value: string) => void;
};

const RangeSpecificationComponent: React.FC<RangeSpecificationComponentProps> = ({
  dateRangeStart,
  dateRangeEnd,
  onDateRangeStartChange,
  onDateRangeEndChange,
  accountRangeStart,
  accountRangeEnd,
  onAccountRangeStartChange,
  onAccountRangeEndChange,
}) => {
  return (
    <div className="p-4 border rounded-md space-y-4">
      <InputRange
        label="伝票日付"
        startValue={dateRangeStart}
        endValue={dateRangeEnd}
        onStartChange={onDateRangeStartChange}
        onEndChange={onDateRangeEndChange}
        placeholderStart="例: 令和04年04月01日"
        placeholderEnd="例: 令和05年03月31日"
      />
      <InputRange
        label="仕訳科目"
        startValue={accountRangeStart}
        endValue={accountRangeEnd}
        onStartChange={onAccountRangeStartChange}
        onEndChange={onAccountRangeEndChange}
        placeholderStart="例: 00000000"
        placeholderEnd="例: 99999999"
      />
      <div className="flex items-center space-x-2">
        <label>
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">繰越金額が0円の繰越行のみでも出力する</span>
        </label>
      </div>
    </div>
  );
};

export default RangeSpecificationComponent;
