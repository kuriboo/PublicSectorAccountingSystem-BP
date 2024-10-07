// Import necessary modules
import React from 'react';

// Define TypeScript types for props
type BudgetTableProps = {
  title: string;
  categories: {
    id: number;
    name: string;
    description: string;
    cost: number;
  }[];
  style?: string;
};

// Component definition
const BudgetTable: React.FC<BudgetTableProps> = ({ title, categories, style }) => {
  return (
    <div className={`overflow-x-auto ${style}`}>
      <h1 className="text-lg font-bold mb-4">{title}</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">項目内容</th>
            <th className="py-2 px-4 border-b">金額</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">{category.id}</td>
              <td className="py-2 px-4 border-b">{category.description}</td>
              <td className="py-2 px-4 border-b text-right">{category.cost.toLocaleString()} 円</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
```