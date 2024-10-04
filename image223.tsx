```tsx
import React from 'react';

// 型定義
type Record = {
  processingDate: string;
  budgetNumber: string;
  paymentType: string;
  estimatedAmount: number;
  description: string;
};

type Props = {
  records: Record[];
  onSearch: (query: string) => void;
  onClear: () => void;
  onCancel: () => void;
};

// コンポーネント定義
const BudgetSearch: React.FC<Props> = ({ records, onSearch, onClear, onCancel }) => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <div className="mb-4">
        <input
          type="text"
          placeholder="検索語を入力"
          className="border p-2 mr-2"
        />
        <button onClick={() => onSearch('dummy')} className="bg-blue-500 text-white p-2 rounded">
          表示
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">処理日</th>
            <th className="border p-2">予定番号</th>
            <th className="border p-2">支払種別</th>
            <th className="border p-2">予定額</th>
            <th className="border p-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td className="border p-2">{record.processingDate}</td>
              <td className="border p-2">{record.budgetNumber}</td>
              <td className="border p-2">{record.paymentType}</td>
              <td className="border p-2">{record.estimatedAmount.toLocaleString()}</td>
              <td className="border p-2">{record.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end">
        <button onClick={onClear} className="bg-yellow-500 text-white p-2 rounded mr-2">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white p-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetSearch;
```