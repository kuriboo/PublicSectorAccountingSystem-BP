```tsx
import React from 'react';

// 型定義
interface BudgetItem {
  category: string;
  content: string;
  pattern: string;
  amount: number;
}

interface BudgetTableProps {
  title: string;
  fiscalYear: string;
  items: BudgetItem[];
}

// Tailwind CSS スタイルを適用したコンポーネント
const BudgetTable: React.FC<BudgetTableProps> = ({ title, fiscalYear, items }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <h2 className="text-lg mb-2">{fiscalYear}</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">番号</th>
            <th className="py-2 px-4 border-b">事業内容</th>
            <th className="py-2 px-4 border-b">仕訳パターン</th>
            <th className="py-2 px-4 border-b">金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">{index + 1}</td>
              <td className="py-2 px-4 border-b">{item.category}</td>
              <td className="py-2 px-4 border-b">{item.pattern}</td>
              <td className="py-2 px-4 border-b text-right">{item.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
```