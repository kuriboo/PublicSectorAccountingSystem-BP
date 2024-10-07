import React from 'react';

type BudgetAllocationFormProps = {
  year: string;
  yearOptions: string[];
  budgetType: string;
  budgetTypeOptions: string[];
  period: string;
  periodOptions: string[];
  startCode: string;
  endCode: string;
  onYearChange: (value: string) => void;
  onBudgetTypeChange: (value: string) => void;
  onPeriodChange: (value: string) => void;
  onStartCodeChange: (value: string) => void;
  onEndCodeChange: (value: string) => void;
};

const BudgetAllocationForm: React.FC<BudgetAllocationFormProps> = ({
  year,
  yearOptions,
  budgetType,
  budgetTypeOptions,
  period,
  periodOptions,
  startCode,
  endCode,
  onYearChange,
  onBudgetTypeChange,
  onPeriodChange,
  onStartCodeChange,
  onEndCodeChange,
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">予算配当表</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* 年度 Select Box */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">年度</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
          >
            {yearOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* 予算種成区分 Select Box */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">予算種成区分</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={budgetType}
            onChange={(e) => onBudgetTypeChange(e.target.value)}
          >
            {budgetTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* 配当期間 Select Box */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">配当期間</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={period}
            onChange={(e) => onPeriodChange(e.target.value)}
          >
            {periodOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* 所属 Ranges */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">所属</label>
          <div className="mt-1 flex">
            <input
              type="text"
              className="flex-grow w-full rounded-md border-gray-300 shadow-sm"
              value={startCode}
              onChange={(e) => onStartCodeChange(e.target.value)}
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              className="flex-grow w-full rounded-md border-gray-300 shadow-sm"
              value={endCode}
              onChange={(e) => onEndCodeChange(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="mt-6 flex justify-end space-x-3">
        <button className="bg-blue-500 text-white py-2 px-4 rounded shadow">OK</button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded shadow">クリア</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded shadow">終了</button>
      </div>
    </div>
  );
};

export default BudgetAllocationForm;
```