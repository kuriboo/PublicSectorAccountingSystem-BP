// components/TableComponent.tsx
import React from 'react';

// TypeScript props for the TableComponent
interface TableRow {
  category: string;
  amount: number;
  total?: number;
  remarks?: string;
}

interface TableComponentProps {
  title: string;
  subtitle: string;
  rows: TableRow[];
}

const TableComponent: React.FC<TableComponentProps> = ({ title, subtitle, rows }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Title Section */}
      <header className="mb-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <h2 className="text-sm text-gray-600">{subtitle}</h2>
      </header>
      
      {/* Table Section */}
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">分類名</th>
            <th className="border border-gray-300 px-4 py-2">額</th>
            <th className="border border-gray-300 px-4 py-2">備考</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{row.category}</td>
              <td className="border border-gray-300 px-4 py-2">{row.amount.toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{row.remarks || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
```

```tsx
// Example of using the TableComponent
import React from 'react';
import TableComponent from './components/TableComponent';

const data = [
  { category: '販売不動産', amount: 4102, remarks: '計' },
  { category: '販売不動産期末', amount: 46744, remarks: '-' },
  { category: '販売不動産期末計', amount: 47200, remarks: '-' },
  { category: '合計', amount: 47200, remarks: '-' }
];

const App: React.FC = () => {
  return (
    <TableComponent 
      title="財務報告"
      subtitle="平成12年4月から平成13年3月"
      rows={data}
    />
  );
};

export default App;
```