```tsx
import React from 'react';

// Define types for the component props
interface BudgetDetail {
  code: string;
  name: string;
}

interface BudgetTableProps {
  details: BudgetDetail[];
  onAddRow: () => void;
  onDeleteRow: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const BudgetTable: React.FC<BudgetTableProps> = ({
  details,
  onAddRow,
  onDeleteRow,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">予算</th>
              <th className="px-4 py-2 border">振替コード</th>
              <th className="px-4 py-2 border">振替名</th>
              <th className="px-4 py-2 border">性質コード</th>
              <th className="px-4 py-2 border">構成比率(%)</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{detail.code}</td>
                <td className="px-4 py-2 border">{detail.name}</td>
                <td className="px-4 py-2 border">-</td>
                <td className="px-4 py-2 border">-</td>
                <td className="px-4 py-2 border">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onAddRow}
        >
          行追加
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onDeleteRow}
        >
          行削除
        </button>
      </div>
      <div className="flex justify-end mt-4 space-x-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={onConfirm}
        >
          確定
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetTable;
```