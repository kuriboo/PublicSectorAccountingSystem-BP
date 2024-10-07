import React from 'react';

// 型定義
type AccountingFormProps = {
  date: string;
  budgetFrom: string;
  budgetTo: string;
  departmentFrom: string;
  departmentTo: string;
  divisionOutput: boolean;
  onDateChange: (newDate: string) => void;
  onBudgetChange: (from: string, to: string) => void;
  onDepartmentChange: (from: string, to: string) => void;
  onDivisionOutputChange: (value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountingForm: React.FC<AccountingFormProps> = ({
  date,
  budgetFrom,
  budgetTo,
  departmentFrom,
  departmentTo,
  divisionOutput,
  onDateChange,
  onBudgetChange,
  onDepartmentChange,
  onDivisionOutputChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md">
      {/* 作表年月日 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">作表年月日</label>
        <input
          type="text"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      
      {/* 予算科目 */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">予算科目</label>
          <input
            type="text"
            value={budgetFrom}
            onChange={(e) => onBudgetChange(e.target.value, budgetTo)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            value={budgetTo}
            onChange={(e) => onBudgetChange(budgetFrom, e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      
      {/* 所属別出力 */}
      <div className="mb-4 flex items-center">
        <label className="block text-sm font-medium text-gray-700 mr-4">所属別出力</label>
        <label className="flex items-center">
          <input
            type="radio"
            checked={divisionOutput}
            onChange={() => onDivisionOutputChange(true)}
            className="form-radio"
          />
          <span className="ml-2">する</span>
        </label>
        <label className="flex items-center ml-4">
          <input
            type="radio"
            checked={!divisionOutput}
            onChange={() => onDivisionOutputChange(false)}
            className="form-radio"
          />
          <span className="ml-2">しない</span>
        </label>
      </div>
      
      {/* 所属 */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">所属</label>
          <input
            type="text"
            value={departmentFrom}
            onChange={(e) => onDepartmentChange(e.target.value, departmentTo)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            value={departmentTo}
            onChange={(e) => onDepartmentChange(departmentFrom, e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      
      {/* ボタン群 */}
      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          OK
        </button>
        <button type="button" onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded-md">
          クリア
        </button>
        <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-md">
          終了
        </button>
      </div>
    </form>
  );
};

export default AccountingForm;
```