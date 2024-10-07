// import necessary React and Next.js components
import React from 'react';

// Define the props interface for the component
interface CalculationFormProps {
  fiscalYear: string; // fiscal year as a string
  periodStart: string; // starting date of the period
  periodEnd: string; // ending date of the period
  onFiscalYearChange: (year: string) => void; // function to handle fiscal year change
}

// Define the CalculationForm component with type annotations
const CalculationForm: React.FC<CalculationFormProps> = ({
  fiscalYear,
  periodStart,
  periodEnd,
  onFiscalYearChange,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
      {/* Header */}
      <div className="bg-blue-100 text-blue-800 px-4 py-2 text-xl">
        調整割合の計算表(計算表4)
      </div>
      
      {/* Form */}
      <div className="p-4">
        <div className="border-b py-2">範囲指定</div>

        {/* Fiscal Year Selection */}
        <div className="flex items-center my-4">
          <label className="mr-4">会計年度</label>
          <select
            value={fiscalYear}
            onChange={(e) => onFiscalYearChange(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="平成31">平成31</option>
            <option value="令和元">令和元</option>
            <option value="令和2">令和2</option>
          </select>
          <span className="ml-2">年度</span>
        </div>

        {/* Tax Period */}
        <div className="flex items-center">
          <label className="mr-4">課税期間</label>
          <div>{periodStart}</div>
          <span className="mx-2">〜</span>
          <div>{periodEnd}</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end px-4 py-2 bg-gray-100">
        <button className="bg-gray-200 px-4 py-2 rounded mr-2">クリア</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-200 px-4 py-2 rounded ml-2">終了</button>
      </div>
    </div>
  );
};

export default CalculationForm;
```