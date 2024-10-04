```tsx
import React from 'react';

// Props for the BudgetForm component
interface BudgetFormProps {
  year: string;
  budgetSection: string;
  iteration: number;
  amountType: string;
  minItemCode: string;
  maxItemCode: string;
  showAdjustedOnly: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// BudgetForm component
const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  budgetSection,
  iteration,
  amountType,
  minItemCode,
  maxItemCode,
  showAdjustedOnly,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      {/* Title */}
      <h2 className="text-lg font-bold text-purple-700 mb-4">
        予算仕訳リスト／仕訳科目別作成
      </h2>
      
      {/* Auto Journal Info */}
      <div className="border p-3 rounded mb-4">
        <h3 className="text-sm font-bold text-blue-700 mb-3">自動仕訳情報</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-700">年度</label>
            <input 
              type="text" 
              className="border w-full p-2"
              value={year} 
              readOnly 
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">予算編成区分</label>
            <input 
              type="text" 
              className="border w-full p-2"
              value={budgetSection} 
              readOnly 
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">回数</label>
            <input 
              type="number" 
              className="border w-full p-2"
              value={iteration} 
              readOnly 
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">金額種別</label>
            <input 
              type="text" 
              className="border w-full p-2"
              value={amountType} 
              readOnly 
            />
          </div>
        </div>
      </div>
      
      {/* Range Specification */}
      <div className="border p-3 rounded mb-4">
        <h3 className="text-sm font-bold text-blue-700 mb-3">範囲指定</h3>
        <div className="flex items-center space-x-2">
          <label className="text-gray-700">仕訳科目</label>
          <input 
            type="text" 
            className="border p-2 w-full"
            value={minItemCode} 
            readOnly 
          />
          <span>～</span>
          <input 
            type="text" 
            className="border p-2 w-full"
            value={maxItemCode} 
            readOnly 
          />
        </div>
        <div className="mt-2">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={showAdjustedOnly} 
              readOnly 
            />
            <span className="ml-2 text-gray-700">調整入力分のみ出力</span>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button 
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          onClick={onCancel}
        >
          終了
        </button>
      </div>
    </div>
  );
}

export default BudgetForm;
```