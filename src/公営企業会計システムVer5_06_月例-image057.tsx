// BudgetExecutionStatusForm.tsx
import React from 'react';

// TypeScript型定義
interface BudgetExecutionStatusFormProps {
  startDate: string;
  endDate: string;
  departmentId: string;
  budgetCategoryId: string;
  handleStartDateChange: (date: string) => void;
  handleEndDateChange: (date: string) => void;
  handleDepartmentIdChange: (id: string) => void;
  handleBudgetCategoryIdChange: (id: string) => void;
}

const BudgetExecutionStatusForm: React.FC<BudgetExecutionStatusFormProps> = ({
  startDate,
  endDate,
  departmentId,
  budgetCategoryId,
  handleStartDateChange,
  handleEndDateChange,
  handleDepartmentIdChange,
  handleBudgetCategoryIdChange
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">予算執行状況表(所属別) 作成</h1>
      <div className="mb-4">
        <label className="block text-gray-700">集計日付</label>
        <input
          type="text"
          value={startDate}
          onChange={(e) => handleStartDateChange(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        ～
        <input
          type="text"
          value={endDate}
          onChange={(e) => handleEndDateChange(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">所属</label>
        <input
          type="text"
          value={departmentId}
          onChange={(e) => handleDepartmentIdChange(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">予算科目</label>
        <input
          type="text"
          value={budgetCategoryId}
          onChange={(e) => handleBudgetCategoryIdChange(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded mr-2">OK</button>
      <button className="bg-gray-500 text-white p-2 rounded mr-2">クリア</button>
      <button className="bg-red-500 text-white p-2 rounded">終了</button>
    </div>
  );
};

export default BudgetExecutionStatusForm;
