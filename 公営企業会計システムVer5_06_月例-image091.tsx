```tsx
import React from 'react';

type Props = {
  title: string;
  currentYearMonth: string;
  comparisonOptions: { label: string; value: string }[];
  unitOptions: { label: string; value: string }[];
  taxOptions: { label: string; value: string }[];
  onComparisonChange: (value: string) => void;
  onUnitChange: (value: string) => void;
  onTaxChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
};

const ReportCreationComponent: React.FC<Props> = ({
  title,
  currentYearMonth,
  comparisonOptions,
  unitOptions,
  taxOptions,
  onComparisonChange,
  onUnitChange,
  onTaxChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h1 className="text-lg font-bold text-center mb-4">{title}</h1>

      <div className="mb-6">
        <label className="block font-semibold mb-2">作表月</label>
        <div className="p-2 bg-gray-100 text-center rounded-md">{currentYearMonth}</div>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">比較方式</label>
        {comparisonOptions.map((option) => (
          <div key={option.value} className="mb-2">
            <input
              type="radio"
              name="comparison"
              value={option.value}
              onChange={() => onComparisonChange(option.value)}
              className="mr-2"
            />
            {option.label}
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">通貨単位</label>
        {unitOptions.map((option) => (
          <div key={option.value} className="mb-2">
            <input
              type="radio"
              name="unit"
              value={option.value}
              onChange={() => onUnitChange(option.value)}
              className="mr-2"
            />
            {option.label}
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">税区分</label>
        {taxOptions.map((option) => (
          <div key={option.value} className="mb-2">
            <input
              type="radio"
              name="tax"
              value={option.value}
              onChange={() => onTaxChange(option.value)}
              className="mr-2"
            />
            {option.label}
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default ReportCreationComponent;
```