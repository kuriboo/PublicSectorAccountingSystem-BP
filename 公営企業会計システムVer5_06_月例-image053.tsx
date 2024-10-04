```tsx
import React from 'react';

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

type RadioGroupProps = {
  label: string;
  options: Array<{ label: string; value: string }>;
  selectedValue: string;
  onValueChange: (value: string) => void;
};

type SelectFieldProps = {
  label: string;
  options: Array<{ label: string; value: string }>;
  selectedValue: string;
  onChange: (value: string) => void;
};

type FormProps = {
  dateRange: [string, string];
  accountRange: [string, string];
  presentationType: string;
  aggregationTarget: string;
  area: string;
  onDateRangeChange: (range: [string, string]) => void;
  onAccountRangeChange: (range: [string, string]) => void;
  onPresentationTypeChange: (value: string) => void;
  onAggregationTargetChange: (value: string) => void;
  onAreaChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col">
    <label className="mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border rounded py-1 px-2"
    />
  </div>
);

const RadioGroup: React.FC<RadioGroupProps> = ({ label, options, selectedValue, onValueChange }) => (
  <div className="flex flex-col">
    <span className="mb-1">{label}</span>
    <div>
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center mr-4">
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onValueChange(option.value)}
            className="mr-1"
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>
);

const SelectField: React.FC<SelectFieldProps> = ({ label, options, selectedValue, onChange }) => (
  <div className="flex flex-col">
    <label className="mb-1">{label}</label>
    <select
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded py-1 px-2">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const Form: React.FC<FormProps> = ({
  dateRange,
  accountRange,
  presentationType,
  aggregationTarget,
  area,
  onDateRangeChange,
  onAccountRangeChange,
  onPresentationTypeChange,
  onAggregationTargetChange,
  onAreaChange,
  onSubmit,
  onClear,
  onClose,
}) => (
  <div className="p-4 border rounded shadow-lg max-w-lg mx-auto">
    <h1 className="text-xl font-bold mb-4">範囲指定</h1>
    <div className="mb-4">
      <InputField
        label="作表日"
        value={dateRange[0]}
        onChange={(value) => onDateRangeChange([value, dateRange[1]])}
        placeholder="開始日"
      />
      <InputField
        label=""
        value={dateRange[1]}
        onChange={(value) => onDateRangeChange([dateRange[0], value])}
        placeholder="終了日"
      />
    </div>
    <div className="mb-4">
      <InputField
        label="仕訳科目"
        value={accountRange[0]}
        onChange={(value) => onAccountRangeChange([value, accountRange[1]])}
        placeholder="開始"
      />
      <InputField
        label=""
        value={accountRange[1]}
        onChange={(value) => onAccountRangeChange([accountRange[0], value])}
        placeholder="終了"
      />
    </div>
    <div className="mb-4">
      <RadioGroup
        label="作表区分"
        options={[
          { label: '節', value: 'section' },
          { label: '細節', value: 'subsection' },
        ]}
        selectedValue={presentationType}
        onValueChange={onPresentationTypeChange}
      />
    </div>
    <div className="mb-4">
      <RadioGroup
        label="集計対象"
        options={[
          { label: '全体', value: 'all' },
          { label: 'ブロック', value: 'block' },
          { label: 'セグメント', value: 'segment' },
        ]}
        selectedValue={aggregationTarget}
        onValueChange={onAggregationTargetChange}
      />
      <SelectField
        label="地区"
        options={[
          { label: '第一地区', value: 'area1' },
          { label: '第二地区', value: 'area2' },
        ]}
        selectedValue={area}
        onChange={onAreaChange}
      />
    </div>
    <div className="flex justify-end space-x-4">
      <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-3 rounded">
        OK
      </button>
      <button onClick={onClear} className="bg-gray-300 py-1 px-3 rounded">
        クリア
      </button>
      <button onClick={onClose} className="bg-red-500 text-white py-1 px-3 rounded">
        終了
      </button>
    </div>
  </div>
);

export default Form;
```