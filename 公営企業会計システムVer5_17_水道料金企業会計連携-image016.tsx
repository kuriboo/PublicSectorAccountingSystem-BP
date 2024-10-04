```tsx
import React from 'react';

// Define a type for the data prop
type DataType = {
  id: number;
  date: string;
  description: string;
  amount: number;
}[];

// Define a type for the component props
type TableProps = {
  data: DataType;
  className?: string;
};

const ExcelTable: React.FC<TableProps> = ({ data, className }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-200">
          <tr>
            <th className="w-1/4 px-4 py-2 text-gray-800 border">ID</th>
            <th className="w-1/4 px-4 py-2 text-gray-800 border">Date</th>
            <th className="w-1/4 px-4 py-2 text-gray-800 border">Description</th>
            <th className="w-1/4 px-4 py-2 text-gray-800 border">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="bg-gray-100 odd:bg-white">
              <td className="px-4 py-2 border">{item.id}</td>
              <td className="px-4 py-2 border">{item.date}</td>
              <td className="px-4 py-2 border">{item.description}</td>
              <td className="px-4 py-2 border">{item.amount.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelTable;

// Example usage of the ExcelTable component with sample data
/*
<ExcelTable
  data={[
    { id: 1, date: '2017/9/1', description: '納付(基本・超過)', amount: 1000 },
    { id: 2, date: '2017/9/2', description: '納付(基本・超過)', amount: 2240 },
    { id: 3, date: '2017/9/20', description: '納付(基本・超過)', amount: 1760 },
    { id: 4, date: '2017/9/20', description: '納付(基本・超過)', amount: 3398 },
  ]}
/>
*/
```