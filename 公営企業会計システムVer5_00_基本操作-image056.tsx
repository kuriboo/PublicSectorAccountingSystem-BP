```tsx
import React from 'react';

// TypeScriptの型定義
type DataRow = {
  fiscalYear: number;
  budgetType: string;
  usage: string;
  itemName: string;
  code: string;
  amount: number;
};

type Props = {
  data: DataRow[];
  className?: string;
};

const BudgetTable: React.FC<Props> = ({ data, className }) => {
  return (
    <table className={`min-w-full border-collapse ${className}`}>
      <thead>
        <tr className="bg-gray-200">
          <th className="p-3 border">会計年度</th>
          <th className="p-3 border">予算種別</th>
          <th className="p-3 border">用途</th>
          <th className="p-3 border">項目名</th>
          <th className="p-3 border">コード</th>
          <th className="p-3 border">金額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="even:bg-gray-100">
            <td className="p-3 border">{row.fiscalYear}</td>
            <td className="p-3 border">{row.budgetType}</td>
            <td className="p-3 border">{row.usage}</td>
            <td className="p-3 border">{row.itemName}</td>
            <td className="p-3 border">{row.code}</td>
            <td className="p-3 border text-right">{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BudgetTable;
```