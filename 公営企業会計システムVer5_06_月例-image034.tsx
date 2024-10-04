```tsx
import React from 'react';

// TypeScriptの型定義
interface BudgetEntry {
  itemName: string;
  nextMonthAmount: number;
  followingMonthAmount: number;
}

interface BudgetTableProps {
  entries: BudgetEntry[];
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
}

// コンポーネントの定義
const BudgetTable: React.FC<BudgetTableProps> = ({ entries, onConfirm, onClear, onClose }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="text-lg font-bold mb-4">資金予算予定入力</div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">項目名称</th>
            <th className="py-2 px-4 border-b">翌月金額</th>
            <th className="py-2 px-4 border-b">翌々月金額</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{entry.itemName}</td>
              <td className="py-2 px-4 border-b text-right">{entry.nextMonthAmount.toLocaleString()}</td>
              <td className="py-2 px-4 border-b text-right">{entry.followingMonthAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end space-x-2">
        <button 
          onClick={onConfirm} 
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-yellow-500 text-white rounded px-4 py-2 hover:bg-yellow-600"
        >
          クリア
        </button>
        <button 
          onClick={onClose} 
          className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetTable;
```