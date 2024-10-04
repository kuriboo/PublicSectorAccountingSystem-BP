```tsx
// Import necessary libraries
import React from 'react';

// Define TypeScript types for the component props
type Props = {
  accountingYear: string;
  budgetFormation: string;
  finalExaminationValue: string;
  finalExaminationCount: number;
  onOk: () => void;
  onCancel: () => void;
};

// Define the BudgetComponent as a functional component
const BudgetComponent: React.FC<Props> = ({
  accountingYear,
  budgetFormation,
  finalExaminationValue,
  finalExaminationCount,
  onOk,
  onCancel
}) => {
  // Return the JSX structure
  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h1 className="text-lg font-bold text-blue-500 mb-4">
        予算調整後控除対象仕入税額算出
      </h1>
      <div className="border p-4">
        <h2 className="text-base font-semibold text-blue-500 mb-2">
          範囲指定
        </h2>
        <div className="mb-2">
          <span className="font-medium">会計年度: </span>
          <span>{accountingYear}</span>
        </div>
        <div className="mb-2">
          <span className="font-medium">予算編成区分: </span>
          <span>{budgetFormation}</span>
        </div>
        <div>
          <span className="font-medium">最終査定値: </span>
          <span>{finalExaminationValue}</span>
          <span className="ml-2">{finalExaminationCount} 回</span>
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-6">
        <button 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onCancel}
        >
          終了
        </button>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onOk}
        >
          OK
        </button>
      </div>
    </div>
  );
};

// Export the component as default
export default BudgetComponent;
```