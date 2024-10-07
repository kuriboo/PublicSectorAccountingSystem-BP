import React from 'react';

// Define the types for the component props
interface BudgetFormProps {
  budgetYear: number;
  decisionRound: number;
  includeFinalEstimate: boolean;
  onChangeBudgetYear: (value: number) => void;
  onChangeDecisionRound: (value: number) => void;
  onToggleFinalEstimate: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  budgetYear,
  decisionRound,
  includeFinalEstimate,
  onChangeBudgetYear,
  onChangeDecisionRound,
  onToggleFinalEstimate,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">予算現計集計</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium">決算見込回数</label>
        <input
          type="number"
          value={decisionRound}
          onChange={(e) => onChangeDecisionRound(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">年度</label>
        <input
          type="number"
          value={budgetYear}
          onChange={(e) => onChangeBudgetYear(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <span className="block text-sm font-medium">流用充用額</span>
        <div className="flex items-center">
          <label className="mr-4 block">
            <input
              type="radio"
              name="flowAmount"
              value="include"
              className="mr-1"
              defaultChecked
            />
            含む
          </label>
          <label className="block">
            <input type="radio" name="flowAmount" value="exclude" className="mr-1" />
            含まない
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            checked={includeFinalEstimate}
            onChange={onToggleFinalEstimate}
            className="mr-2"
          />
          最終査定額を含む
        </label>
      </div>

      <div className="flex space-x-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">クリア</button>
        <button onClick={onClose} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;
```