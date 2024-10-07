// Import necessary modules and types
import React from 'react';

// Define the component props
type ReportFormProps = {
  creationDate: string;
  startBudgetNumber: string;
  endBudgetNumber: string;
  startDepartmentNumber: string;
  endDepartmentNumber: string;
  aggregationTarget: '全体' | 'ブロック' | 'セグメント';
  onOkClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
};

// Create the functional component
const ReportForm: React.FC<ReportFormProps> = ({
  creationDate,
  startBudgetNumber,
  endBudgetNumber,
  startDepartmentNumber,
  endDepartmentNumber,
  aggregationTarget,
  onOkClick,
  onClearClick,
  onExitClick
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      {/* Creation Date */}
      <div className="mb-4">
        <label className="block text-gray-700">作成年月</label>
        <input
          type="text"
          value={creationDate}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>

      {/* Budget Number Range */}
      <div className="mb-4">
        <label className="block text-gray-700">予算科目</label>
        <div className="flex items-center">
          <input
            type="text"
            value={startBudgetNumber}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            readOnly
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={endBudgetNumber}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            readOnly
          />
        </div>
      </div>

      {/* Department Number Range */}
      <div className="mb-4">
        <label className="block text-gray-700">所属</label>
        <div className="flex items-center">
          <input
            type="text"
            value={startDepartmentNumber}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            readOnly
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={endDepartmentNumber}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            readOnly
          />
        </div>
      </div>

      {/* Aggregation Target */}
      <div className="mb-4">
        <label className="block text-gray-700">集計対象</label>
        <div className="flex space-x-4">
          {(['全体', 'ブロック', 'セグメント'] as const).map(option => (
            <label key={option}>
              <input
                type="radio"
                name="aggregationTarget"
                checked={aggregationTarget === option}
                readOnly
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={onOkClick}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={onClearClick}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={onExitClick}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
```