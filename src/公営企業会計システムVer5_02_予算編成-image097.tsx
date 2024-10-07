// Import necessary modules
import React from 'react';

// Define TypeScript interfaces for props
interface BudgetInfo {
  year: number;
  budgetAmount: number;
  allocationAmount: number;
  difference: number;
}

interface AllocationProps {
  section: string;
  subsection: string;
  detail: string;
  taxType: string;
  previousYearBudget: BudgetInfo;
  currentYearBudget: BudgetInfo;
  onConfirm: () => void;
  onCancel: () => void;
}

// Define the AllocationComponent
const AllocationComponent: React.FC<AllocationProps> = ({
  section,
  subsection,
  detail,
  taxType,
  previousYearBudget,
  currentYearBudget,
  onConfirm,
  onCancel,
}) => (
  <div className="p-4 bg-white shadow rounded-lg space-y-4">
    <div className="grid grid-cols-2 gap-4">
      {/* Display section information */}
      <div>
        <h2 className="font-bold">充当先</h2>
        <p>節: {section}</p>
        <p>細節: {subsection}</p>
        <p>明細: {detail}</p>
        <p>税区分: {taxType}</p>
      </div>
      {/* Display budget information */}
      <div>
        <h2 className="font-bold">前年年度</h2>
        <p>予算額: {previousYearBudget.budgetAmount}</p>
        <p>充当額: {previousYearBudget.allocationAmount}</p>
        <p>差額: {previousYearBudget.difference}</p>
      </div>
      <div>
        <h2 className="font-bold">当年度</h2>
        <p>予算額: {currentYearBudget.budgetAmount}</p>
        <p>充当額: {currentYearBudget.allocationAmount}</p>
        <p>差額: {currentYearBudget.difference}</p>
      </div>
    </div>
    {/* Buttons for confirm and cancel */}
    <div className="flex space-x-2">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={onConfirm}
      >
        行確定
      </button>
      <button
        className="px-4 py-2 bg-gray-300 text-black rounded"
        onClick={onCancel}
      >
        行キャンセル
      </button>
    </div>
  </div>
);

export default AllocationComponent;
```