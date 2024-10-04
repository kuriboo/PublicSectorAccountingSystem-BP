```tsx
// components/ExpenseTable.tsx
import React from 'react';

// Type definitions for the table data
type ExpenseItem = {
  responsibilityNumber: number;
  detailNumber: number;
  changeCount: number;
  description: string;
  taxExcludedAmount: number;
};

type ExpenseTableProps = {
  data: ExpenseItem[];
  title: string;
};

// Tailwind CSS for styling
const tableStyle = "table-auto w-full text-left border-collapse";
const headerStyle = "bg-gray-200 border-b";
const rowStyle = "hover:bg-gray-100 border-b";
const cellStyle = "py-2 px-4 border";

const ExpenseTable: React.FC<ExpenseTableProps> = ({ data, title }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold my-4">{title}</h2>
      <table className={tableStyle}>
        <thead className={headerStyle}>
          <tr>
            <th className={cellStyle}>負担番号</th>
            <th className={cellStyle}>明細番号</th>
            <th className={cellStyle}>変更回数</th>
            <th className={cellStyle}>摘要</th>
            <th className={cellStyle}>税抜金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.responsibilityNumber} className={rowStyle}>
              <td className={cellStyle}>{item.responsibilityNumber}</td>
              <td className={cellStyle}>{item.detailNumber}</td>
              <td className={cellStyle}>{item.changeCount}</td>
              <td className={cellStyle}>{item.description}</td>
              <td className={cellStyle}>{item.taxExcludedAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
```

```tsx
// pages/index.tsx
import React from 'react';
import ExpenseTable from '../components/ExpenseTable';

const HomePage: React.FC = () => {
  const expenseData = [
    { responsibilityNumber: 144, detailNumber: 0, changeCount: 0, description: "図書費", taxExcludedAmount: 15556 },
    { responsibilityNumber: 145, detailNumber: 0, changeCount: 1, description: "庁舎修繕", taxExcludedAmount: 46297 },
    // その他のデータをここに追加
  ];

  return (
    <div className="p-4">
      <ExpenseTable data={expenseData} title="費用明細表" />
    </div>
  );
};

export default HomePage;
```