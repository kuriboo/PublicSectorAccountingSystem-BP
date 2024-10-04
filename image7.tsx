```tsx
import React from 'react';

type BudgetMasterProps = {
  fiscalYear: string;
  budgetNumber: string;
  budgetCategory: string;
  name: string;
  abbreviation: string;
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  budgetNumber: string;
  name: string;
  abbreviation: string;
  category: string;
};

const BudgetMaster: React.FC<BudgetMasterProps> = ({
  fiscalYear,
  budgetNumber,
  budgetCategory,
  name,
  abbreviation,
  onSubmit,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData: FormData = {
      budgetNumber,
      name,
      abbreviation,
      category: budgetCategory,
    };
    onSubmit(formData);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">予算科目マスタ</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <label>
            年度:
            <input
              type="text"
              value={fiscalYear}
              className="border p-2 rounded w-full"
              readOnly
            />
          </label>
          <label>
            予算番号:
            <input
              type="text"
              value={budgetNumber}
              className="border p-2 rounded w-full"
              readOnly
            />
          </label>
          <label>
            名称:
            <input
              type="text"
              value={name}
              className="border p-2 rounded w-full"
              readOnly
            />
          </label>
          <label>
            略称:
            <input
              type="text"
              value={abbreviation}
              className="border p-2 rounded w-full"
              readOnly
            />
          </label>
          <label>
            項目区分:
            <input
              type="text"
              value={budgetCategory}
              className="border p-2 rounded w-full"
              readOnly
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          保存
        </button>
      </form>
    </div>
  );
};

export default BudgetMaster;
```