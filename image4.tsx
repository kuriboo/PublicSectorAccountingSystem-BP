```tsx
import React, { useState } from 'react';

type BudgetMasterProps = {
  initialYear: string;
  budgetItem: string;
  abbreviation: string;
  name: string;
  category: string;
  subCategory: string;
  onSubmit: (data: any) => void;
};

const BudgetMaster: React.FC<BudgetMasterProps> = ({
  initialYear,
  budgetItem,
  abbreviation,
  name,
  category,
  subCategory,
  onSubmit
}) => {
  const [year, setYear] = useState(initialYear);
  const [itemAbbrev, setItemAbbrev] = useState(abbreviation);
  const [itemBudgetName, setItemBudgetName] = useState(budgetItem);

  // Handles form submission
  const handleSubmit = () => {
    onSubmit({
      year,
      itemAbbrev,
      itemBudgetName,
      name,
      category,
      subCategory,
    });
  };

  return (
    <form className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">予算科目</label>
        <input
          type="text"
          value={itemBudgetName}
          onChange={(e) => setItemBudgetName(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">略名</label>
        <input
          type="text"
          value={itemAbbrev}
          onChange={(e) => setItemAbbrev(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-2">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          表示
        </button>
      </div>
    </form>
  );
};

export default BudgetMaster;
```