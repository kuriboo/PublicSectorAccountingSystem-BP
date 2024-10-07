// components/ExcelTable.tsx
import React from 'react';

type ExcelRow = {
  date: string;
  transaction: string;
  amount: number;
  tax: number;
};

type ExcelTableProps = {
  rows: ExcelRow[];
  tableTitle?: string;
  className?: string;
};

const ExcelTable: React.FC<ExcelTableProps> = ({ rows, tableTitle, className }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      {tableTitle && <h2 className="text-lg font-bold mb-4">{tableTitle}</h2>}
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Transaction</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Tax</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{row.date}</td>
              <td className="py-2 px-4 border-b">{row.transaction}</td>
              <td className="py-2 px-4 border-b">{row.amount.toLocaleString()}</td>
              <td className="py-2 px-4 border-b">{row.tax}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelTable;

// Usage example
/*
import React from 'react';
import ExcelTable from './components/ExcelTable';

const rowData = [
  { date: '2016/3/24', transaction: '決定', amount: 1000, tax: 8 },
  { date: '2016/3/25', transaction: '振替', amount: 42, tax: 8 },
];

const App = () => (
  <ExcelTable rows={rowData} tableTitle="Transaction Details" className="my-8" />
);

export default App;
*/
