import React from 'react';

// Props type definition for the component
type AggregateFormProps = {
  initialYearMonth?: string;
  onChangeYearMonth?: (value: string) => void;
  onOptionChange?: (value: string) => void;
  onSubmit?: () => void;
  onClear?: () => void;
};

// Functional component
const AggregateForm: React.FC<AggregateFormProps> = ({
  initialYearMonth = '平成29年08月',
  onChangeYearMonth,
  onOptionChange,
  onSubmit,
  onClear,
}) => {
  const [yearMonth, setYearMonth] = React.useState(initialYearMonth);
  const [option, setOption] = React.useState('税抜');

  // Handler for yearMonth input change
  const handleYearMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setYearMonth(value);
    onChangeYearMonth && onChangeYearMonth(value);
  };

  // Handler for option radio button change
  const handleOptionChange = (value: string) => {
    setOption(value);
    onOptionChange && onOptionChange(value);
  };

  return (
    <div className="p-4 border rounded-md shadow">
      <div className="mb-4 text-lg font-bold">範囲指定</div>
      <div className="mb-2">
        <label htmlFor="yearMonth" className="mr-2">
          集計年月
        </label>
        <input
          id="yearMonth"
          type="text"
          className="border px-2 py-1"
          value={yearMonth}
          onChange={handleYearMonthChange}
        />
      </div>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="option"
            value="税抜"
            checked={option === '税抜'}
            onChange={() => handleOptionChange('税抜')}
            className="mr-1"
          />
          税抜
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="税込"
            checked={option === '税込'}
            onChange={() => handleOptionChange('税込')}
            className="mr-1"
          />
          税込
        </label>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default AggregateForm;
