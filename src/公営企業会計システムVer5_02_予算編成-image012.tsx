import React, { useState } from 'react';

// Type definition for component props
type BudgetAllocationProps = {
  fiscalYear: string;
  budgetTypeOptions: string[];
  accountLevelOptions: string[];
  distributionAmount: number;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetAllocation: React.FC<BudgetAllocationProps> = ({
  fiscalYear,
  budgetTypeOptions,
  accountLevelOptions,
  distributionAmount,
  onConfirm,
  onClear,
  onExit,
}) => {
  const [selectedBudgetType, setSelectedBudgetType] = useState(budgetTypeOptions[0]);
  const [selectedAccountLevel, setSelectedAccountLevel] = useState(accountLevelOptions[0]);

  return (
    <div className="bg-white p-8 rounded shadow-lg max-w-lg mx-auto">
      {/* Header */}
      <div className="text-2xl font-bold text-center mb-4">枠配分設定</div>
      
      {/* Fiscal Year Input */}
      <div className="mb-6">
        <label className="block text-gray-700">新年度</label>
        <input 
          type="text" 
          value={fiscalYear} 
          readOnly 
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Budget Type Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">設定種別</label>
        <div className="flex space-x-4">
          {budgetTypeOptions.map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="radio"
                value={type}
                checked={selectedBudgetType === type}
                onChange={() => setSelectedBudgetType(type)}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Account Level Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">科目レベル</label>
        <div className="flex space-x-4">
          {accountLevelOptions.map((level) => (
            <label key={level} className="flex items-center">
              <input
                type="radio"
                value={level}
                checked={selectedAccountLevel === level}
                onChange={() => setSelectedAccountLevel(level)}
                className="mr-2"
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      {/* Distribution Amount */}
      <div className="mb-6">
        <label className="block text-gray-700">枠配分額</label>
        <input 
          type="text" 
          value={distributionAmount.toLocaleString()} 
          readOnly 
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button onClick={onClear} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">終了</button>
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">OK</button>
      </div>
    </div>
  );
};

export default BudgetAllocation;
