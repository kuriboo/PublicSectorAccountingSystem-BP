import React from 'react';

// Prop types for the component
interface BudgetFormProps {
  yearOptions: string[];
  budgetDivisionOptions: string[];
  onSubmit: (formData: FormData) => void;
  onCancel: () => void;
}

// State type for the form
interface FormData {
  year: string;
  budgetDivision: string;
  count: number;
  amountType: 'estimateRequest' | 'determinedAmount';
}

// React component
const BudgetForm: React.FC<BudgetFormProps> = ({
  yearOptions,
  budgetDivisionOptions,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = React.useState<FormData>({
    year: yearOptions[0],
    budgetDivision: budgetDivisionOptions[0],
    count: 1,
    amountType: 'estimateRequest',
  });

  // Update form state function
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-blue-700 mb-4">説明欄データ作成</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">年度</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">予算編成区分</label>
          <select
            name="budgetDivision"
            value={formData.budgetDivision}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            {budgetDivisionOptions.map((division) => (
              <option key={division} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">回数</label>
          <input
            type="number"
            name="count"
            value={formData.count}
            onChange={handleChange}
            className="w-full border rounded p-2"
            min={1}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">金額種別</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="amountType"
                value="estimateRequest"
                checked={formData.amountType === 'estimateRequest'}
                onChange={handleChange}
                className="mr-2"
              />
              見積要求額
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="amountType"
                value="determinedAmount"
                checked={formData.amountType === 'determinedAmount'}
                onChange={handleChange}
                className="mr-2"
              />
              査定額
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            終了
          </button>
          <button
            type="reset"
            className="bg-yellow-500 text-white py-2 px-4 rounded"
          >
            クリア
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            OK
          </button>
        </div>
      </form>
    </div>
  );
};

export default BudgetForm;