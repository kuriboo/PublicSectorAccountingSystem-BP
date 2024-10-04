```tsx
import React from 'react';

// Propsの型定義
interface FormData {
  processingDate: string;
  year: string;
  decisionNumber: number;
  paymentDate: string;
  payer: string;
  payee: string;
  summary: string;
  hasBudgetCategory: boolean;
  totalAmount: number;
}

interface Props {
  data: FormData;
  onSubmit: (data: FormData) => void;
  onReset: () => void;
}

// 再利用可能なコンポーネント
const FinancialForm: React.FC<Props> = ({ data, onSubmit, onReset }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // 略: 入力変更処理
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          精算処理日
          <input 
            type="text" 
            name="processingDate" 
            value={data.processingDate} 
            onChange={handleChange} 
            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          />
        </label>
      </div>
      
      {/* その他の入力フィールド */}
      
      <div className="mb-4">
        <label className="flex items-center">
          資金予算区分
          <input 
            type="checkbox" 
            name="hasBudgetCategory" 
            checked={data.hasBudgetCategory} 
            onChange={handleChange} 
            className="ml-2 rounded"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          合計振替額
          <input 
            type="number" 
            name="totalAmount" 
            value={data.totalAmount} 
            onChange={handleChange} 
            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          />
        </label>
      </div>
      <div className="flex space-x-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          登録
        </button>
        <button type="button" onClick={onReset} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
          削除
        </button>
      </div>
    </form>
  );
};

export default FinancialForm;
```