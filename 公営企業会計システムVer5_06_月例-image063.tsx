```tsx
// Import necessary modules
import React from 'react';

// Define the types for the component's props
interface BudgetFormProps {
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

// Define the functional component
const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit, onClear, onExit }) => {
  return (
    <div className="max-w-lg mx-auto p-5 bg-white shadow-sm">
      <h1 className="text-xl font-bold mb-4">予算執行状況表2（所属別・負担／執行）</h1>
      <div className="grid gap-4">
        {/* Date Range Inputs */}
        <div className="flex items-center">
          <label className="mr-2">集計日付:</label>
          <input type="date" className="border p-1" />
          <span className="mx-2">~</span>
          <input type="date" className="border p-1" />
        </div>

        {/* Department Number Inputs */}
        <div className="flex items-center">
          <label className="mr-2">所属:</label>
          <input type="text" className="border p-1" />
          <span className="mx-2">~</span>
          <input type="text" className="border p-1" />
        </div>

        {/* Budget Item Inputs */}
        <div className="flex items-center">
          <label className="mr-2">予算科目:</label>
          <input type="text" className="border p-1" />
          <span className="mx-2">~</span>
          <input type="text" className="border p-1" />
        </div>
        
        {/* Options for additional selections */}
        <div className="flex items-center">
          <label className="mr-2">作表区分:</label>
          <input type="radio" name="tableType" value="する" className="mr-1" />
          <span className="mr-2">する</span>
          <input type="radio" name="tableType" value="しない" className="mr-1" />
          <span>しない</span>
        </div>

        <div className="flex items-center">
          <label className="mr-2">集計対象:</label>
          <input type="radio" name="target" value="全体" className="mr-1" />
          <span className="mr-2">全体</span>
          <input type="radio" name="target" value="ブロック" className="mr-1" />
          <span className="mr-2">ブロック</span>
          <input type="radio" name="target" value="セグメント" className="mr-1" />
          <span>セグメント</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-6 space-x-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button onClick={onExit} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;
```