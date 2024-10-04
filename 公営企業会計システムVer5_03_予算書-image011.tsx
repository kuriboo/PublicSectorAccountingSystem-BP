```tsx
import React from 'react';

type SummaryFormProps = {
  year: string;
  budgetType: string;
  count: number;
  onYearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBudgetTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClear: () => void;
  onClose: () => void;
};

const SummaryForm: React.FC<SummaryFormProps> = ({
  year,
  budgetType,
  count,
  onYearChange,
  onBudgetTypeChange,
  onCountChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <form onSubmit={onSubmit} className="p-4 bg-gray-100 rounded shadow-lg">
      {/* Year */}
      <label className="block mb-2">
        年度:
        <select value={year} onChange={onYearChange} className="ml-2">
          {/* Options would be filled dynamically */}
          <option value="平成29">平成29</option>
          <option value="平成30">平成30</option>
        </select>
      </label>

      {/* Budget Type */}
      <label className="block mb-2">
        予算種成区分:
        <select value={budgetType} onChange={onBudgetTypeChange} className="ml-2">
          <option value="決算見込">決算見込</option>
          <option value="予定">予定</option>
        </select>
      </label>

      {/* Count */}
      <label className="block mb-2">
        回数:
        <input 
          type="number" 
          value={count} 
          onChange={onCountChange} 
          className="ml-2 w-16 p-1 border rounded"
        />
      </label>

      {/* Buttons */}
      <div className="flex space-x-4 mt-4">
        <button type="submit" className="px-2 py-1 bg-blue-500 text-white rounded">OK</button>
        <button type="button" onClick={onClear} className="px-2 py-1 bg-gray-500 text-white rounded">クリア</button>
        <button type="button" onClick={onClose} className="px-2 py-1 bg-red-500 text-white rounded">終了</button>
      </div>
    </form>
  );
};

export default SummaryForm;
```