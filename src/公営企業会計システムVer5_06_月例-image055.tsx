// Import necessary libraries
import React from 'react';

// Define prop types for the component
interface FormProps {
  startDate: string;
  endDate: string;
  budgetNumber: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Form component
const BudgetForm: React.FC<FormProps> = ({
  startDate,
  endDate,
  budgetNumber,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-center mb-4">範囲指定</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium">集計日付</label>
          <input type="text" defaultValue={startDate} className="w-full mt-1 p-2 border rounded" />
          <input type="text" defaultValue={endDate} className="w-full mt-1 p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">予算科目</label>
          <input type="text" defaultValue={budgetNumber} className="w-full mt-1 p-2 border rounded" />
        </div>
        <div className="flex space-x-4 mb-4">
          <button type="button" onClick={onSubmit} className="flex-1 py-2 bg-blue-500 text-white rounded">OK</button>
          <button type="button" onClick={onClear} className="flex-1 py-2 bg-gray-500 text-white rounded">クリア</button>
          <button type="button" onClick={onClose} className="flex-1 py-2 bg-red-500 text-white rounded">終了</button>
        </div>
      </form>
    </div>
  );
};

export default BudgetForm;
```