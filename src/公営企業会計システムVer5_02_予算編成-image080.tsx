// Import necessary libraries
import React from 'react';

// Define the component's props
interface Props {
  fiscalYear: string;
  budgetFormulation: string;
  finalInspectionValue: string;
  finalInspectionCount: number;
  taxCalculation: string;
  taxExclusionCalculation: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

// Define the component
const CalculationForm: React.FC<Props> = ({
  fiscalYear,
  budgetFormulation,
  finalInspectionValue,
  finalInspectionCount,
  taxCalculation,
  taxExclusionCalculation,
  onOkClick,
  onCancelClick,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">範囲指定</h2>

      <div className="mb-6 p-4 border rounded-lg">
        <div className="flex justify-between mb-2">
          <span>会計年度</span>
          <span>{fiscalYear}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>予算編成区分</span>
          <span>{budgetFormulation}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>最終査定値</span>
          <span>{finalInspectionValue}</span>
          <span>{finalInspectionCount} 回</span>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-4">計算方法</h2>

      <div className="mb-6 p-4 border rounded-lg">
        <div className="flex justify-between mb-2">
          <span>税額計算(仕入)</span>
          <span>{taxCalculation}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>仕入控除税額計算</span>
          <span>{taxExclusionCalculation}</span>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={onOkClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          OK
        </button>
        <button
          onClick={onCancelClick}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CalculationForm;
