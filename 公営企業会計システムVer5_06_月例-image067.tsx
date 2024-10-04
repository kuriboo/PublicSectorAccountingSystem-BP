```tsx
// BudgetExecutionForm.tsx
import React from 'react';

interface BudgetExecutionFormProps {
  reportDate: string;
  budgetItemStart: string;
  budgetItemEnd: string;
  onSubmit: (data: FormData) => void;
  onClear: () => void;
}

interface FormData {
  reportDate: string;
  budgetItemStart: string;
  budgetItemEnd: string;
  expressionDivision: 'day' | 'section' | 'detailed';
  carryForward: boolean;
}

const BudgetExecutionForm: React.FC<BudgetExecutionFormProps> = ({
  reportDate,
  budgetItemStart,
  budgetItemEnd,
  onSubmit,
  onClear
}) => {
  const [formData, setFormData] = React.useState<FormData>({
    reportDate,
    budgetItemStart,
    budgetItemEnd,
    expressionDivision: 'day',
    carryForward: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="p-4 border rounded-md shadow-md max-w-md mx-auto bg-white">
      <h3 className="text-xl font-bold mb-4">範囲指定</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">作表日</label>
        <input
          type="date"
          name="reportDate"
          value={formData.reportDate}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">予算科目</label>
        <div className="flex space-x-2">
          <input
            type="text"
            name="budgetItemStart"
            value={formData.budgetItemStart}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
          />
          <span>~</span>
          <input
            type="text"
            name="budgetItemEnd"
            value={formData.budgetItemEnd}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">作表区分</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              name="expressionDivision"
              value="day"
              checked={formData.expressionDivision === 'day'}
              onChange={handleChange}
            />
            日
          </label>
          <label>
            <input
              type="radio"
              name="expressionDivision"
              value="section"
              checked={formData.expressionDivision === 'section'}
              onChange={handleChange}
            />
            細節
          </label>
          <label>
            <input
              type="radio"
              name="expressionDivision"
              value="detailed"
              checked={formData.expressionDivision === 'detailed'}
              onChange={handleChange}
            />
            明細
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">繰越</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="checkbox"
              name="carryForward"
              checked={formData.carryForward}
              onChange={handleChange}
            />
            する
          </label>
          <label>
            繰り越ししない
          </label>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded-md"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default BudgetExecutionForm;
```