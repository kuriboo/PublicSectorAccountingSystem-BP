import React from 'react';

type CalculationFormProps = {
  fiscalYear: string;
  fiscalYearOptions: string[];
  startDate: string;
  endDate: string;
  onFiscalYearChange: (year: string) => void;
};

const CalculationForm: React.FC<CalculationFormProps> = ({
  fiscalYear,
  fiscalYearOptions,
  startDate,
  endDate,
  onFiscalYearChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-lg font-bold text-blue-700 mb-4">
        特定収入割合の計算表(計算表3)
      </h2>

      {/* Form Section */}
      <div className="bg-white border-2 border-gray-200 p-4 mb-4">
        <h3 className="text-md font-semibold mb-2">範囲指定</h3>
        {/* Fiscal Year Section */}
        <div className="flex items-center mb-4">
          <label className="mr-4 text-gray-700">会計年度</label>
          <select
            value={fiscalYear}
            onChange={(e) => onFiscalYearChange(e.target.value)}
            className="border rounded px-2 py-1">
            {fiscalYearOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="ml-2">年度</span>
        </div>

        {/* Tax Period Section */}
        <div className="flex items-center">
          <label className="mr-4 text-gray-700">課税期間</label>
          <span>{startDate}</span>
          <span className="mx-2">～</span>
          <span>{endDate}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded shadow">
          OK
        </button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded shadow">
          クリア
        </button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded shadow">
          終了
        </button>
      </div>
    </div>
  );
};

export default CalculationForm;