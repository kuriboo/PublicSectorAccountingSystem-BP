// DateRangeForm.tsx
import React from 'react';

type DateRangeFormProps = {
  startDate: string;
  endDate: string;
  budgetCode: string;
  departmentCode: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onBudgetCodeChange: (code: string) => void;
  onDepartmentCodeChange: (code: string) => void;
  onClear: () => void;
  onSubmit: () => void;
};

const DateRangeForm: React.FC<DateRangeFormProps> = ({
  startDate,
  endDate,
  budgetCode,
  departmentCode,
  onStartDateChange,
  onEndDateChange,
  onBudgetCodeChange,
  onDepartmentCodeChange,
  onClear,
  onSubmit,
}) => {
  return (
    <div className="p-4 shadow-md bg-white max-w-lg mx-auto">
      {/* Title */}
      <h2 className="text-lg font-bold mb-4">範囲指定</h2>
      
      <div className="space-y-4">
        {/* Date Range */}
        <div className="flex items-center space-x-2">
          <span className="w-20">振替日</span>
          <input
            type="text"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="border rounded px-2 py-1 w-36"
            placeholder="開始日"
          />
          <span>~</span>
          <input
            type="text"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="border rounded px-2 py-1 w-36"
            placeholder="終了日"
          />
        </div>

        {/* Budget Code */}
        <div className="flex items-center space-x-2">
          <button className="bg-gray-300 text-black rounded px-4 py-1">予算科目</button>
          <input
            type="text"
            value={budgetCode}
            onChange={(e) => onBudgetCodeChange(e.target.value)}
            className="border rounded px-2 py-1 w-36"
            placeholder="Enter Code"
          />
        </div>

        {/* Department Code */}
        <div className="flex items-center space-x-2">
          <button className="bg-gray-300 text-black rounded px-4 py-1">所属</button>
          <input
            type="text"
            value={departmentCode}
            onChange={(e) => onDepartmentCodeChange(e.target.value)}
            className="border rounded px-2 py-1 w-36"
            placeholder="Enter Code"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
      </div>
    </div>
  );
};

export default DateRangeForm;
