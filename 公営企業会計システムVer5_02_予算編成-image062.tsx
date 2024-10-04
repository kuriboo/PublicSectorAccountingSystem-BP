```tsx
import React from 'react';

// Propsの型定義
interface BudgetSelectionFormProps {
  yearOptions: string[];
  yearLabel: string;
  budgetSectionLabel: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const BudgetSelectionForm: React.FC<BudgetSelectionFormProps> = ({
  yearOptions,
  yearLabel,
  budgetSectionLabel,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4">
      <div className="w-full bg-gray-200 p-2 rounded-lg">
        <h1 className="font-bold text-lg">{yearLabel}</h1>

        <div className="mt-4">
          <label className="block font-bold">{yearLabel}</label>
          <select className="border border-gray-400 rounded px-2 py-1">
            {yearOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label className="block font-bold">{budgetSectionLabel}</label>
          <input type="text" className="border border-gray-400 rounded px-2 py-1 w-full" />
        </div>

        <div className="flex justify-between mt-4">
          <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            OK
          </button>
          <button onClick={onClear} className="bg-gray-400 text-white px-4 py-2 rounded">
            クリア
          </button>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetSelectionForm;
```