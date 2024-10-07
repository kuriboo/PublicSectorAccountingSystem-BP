// Necessary imports
import React from "react";

// TypeScript type definition for the component props
interface BudgetFormProps {
  year: string;
  budgetCategory: string;
  section: string;
  subsection: string;
  detail: string;
  onDisplay: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Functional component for the budget form
const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  budgetCategory,
  section,
  subsection,
  detail,
  onDisplay,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex flex-col space-y-4">
        {/* Year and Budget Category Inputs */}
        <div className="flex items-center space-x-2">
          <label className="font-bold">年度:</label>
          <input
            type="text"
            value={year}
            className="w-20 p-1 border border-gray-300"
            readOnly
          />
          <label className="font-bold">予算種成区分:</label>
          <input
            type="text"
            value={budgetCategory}
            className="w-40 p-1 border border-gray-300"
            readOnly
          />
        </div>

        {/* Section, Subsection, and Detail Inputs */}
        <div className="flex flex-col space-y-2">
          <div>
            <label className="block font-bold">節:</label>
            <input
              type="text"
              value={section}
              className="w-full p-1 border border-gray-300"
              readOnly
            />
          </div>
          <div>
            <label className="block font-bold">細節:</label>
            <input
              type="text"
              value={subsection}
              className="w-full p-1 border border-gray-300"
              readOnly
            />
          </div>
          <div>
            <label className="block font-bold">明細:</label>
            <input
              type="text"
              value={detail}
              className="w-full p-1 border border-gray-300"
              readOnly
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={onDisplay}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400"
          >
            表示
          </button>
          <button
            onClick={onClear}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400"
          >
            クリア
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
