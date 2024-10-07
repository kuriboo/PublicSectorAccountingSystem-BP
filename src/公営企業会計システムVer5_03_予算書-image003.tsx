// Import necessary modules from React and Next.js
import React from 'react';

// Define TypeScript types for component props
interface BudgetAdjustmentProps {
  showDisplayLevel: 'general' | 'detailed' | 'moreDetailed' | 'veryDetailed';
  debitSubject: string;
  creditSubject: string;
  taxExcludedAmount: number;
  consumptionTaxAmount: number;
  handleOk: () => void;
  handleClear: () => void;
  handleCancel: () => void;
}

// BudgetAdjustment component
const BudgetAdjustment: React.FC<BudgetAdjustmentProps> = ({
  showDisplayLevel,
  debitSubject,
  creditSubject,
  taxExcludedAmount,
  consumptionTaxAmount,
  handleOk,
  handleClear,
  handleCancel,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-md">
      {/* Display Level Option */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">科目名称表示レベル</h3>
        {/* Radio buttons for selection */}
        <div className="flex space-x-4">
          {['general', 'detailed', 'moreDetailed', 'veryDetailed'].map((level, index) => (
            <label key={index} className="flex items-center">
              <input
                type="radio"
                value={level}
                checked={showDisplayLevel === level}
                readOnly
                className="mr-2"
              />
              <span>{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Subjects Input */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-sm font-semibold mb-1">借方科目</h4>
          <input
            type="text"
            value={debitSubject}
            className="border p-2 rounded w-full"
            readOnly
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-1">貸方科目</h4>
          <input
            type="text"
            value={creditSubject}
            className="border p-2 rounded w-full"
            readOnly
          />
        </div>
      </div>

      {/* Amount Details */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-1">金額</h4>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <div className="flex items-center mb-2">
              <span className="w-1/2">税抜金額</span>
              <span className="w-1/2">
                <input
                  type="text"
                  value={taxExcludedAmount}
                  className="border p-2 rounded w-full text-right"
                  readOnly
                />
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-1/2">消費税額</span>
              <span className="w-1/2">
                <input
                  type="text"
                  value={consumptionTaxAmount}
                  className="border p-2 rounded w-full text-right"
                  readOnly
                />
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex items-center mb-2">
              <span className="w-1/2">内調整額</span>
              <input
                type="text"
                value={0}
                className="border p-2 rounded w-full text-right"
                readOnly
              />
            </div>
            <div className="flex items-center">
              <span className="w-1/2">内調整額</span>
              <input
                type="text"
                value={0}
                className="border p-2 rounded w-full text-right"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button onClick={handleOk} className="bg-gray-200 p-2 rounded-md">
          OK
        </button>
        <button onClick={handleClear} className="bg-gray-200 p-2 rounded-md">
          クリア
        </button>
        <button onClick={handleCancel} className="bg-gray-200 p-2 rounded-md">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetAdjustment;
