// types.ts
export interface TableRow {
  category: string;
  item: string;
  taxType: string;
  amount: number;
  taxAmount: number;
}

// TableComponent.tsx
import React from 'react';
import { TableRow } from './types';

interface TableComponentProps {
  data: TableRow[];
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr className="bg-blue-700 text-white">
          <th className="border border-gray-300 px-4 py-2">細節</th>
          <th className="border border-gray-300 px-4 py-2">明細</th>
          <th className="border border-gray-300 px-4 py-2">税</th>
          <th className="border border-gray-300 px-4 py-2">負担額</th>
          <th className="border border-gray-300 px-4 py-2">消費税額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            <td className="border border-gray-300 px-4 py-2 text-center">{row.category}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{row.item}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{row.taxType}</td>
            <td className="border border-gray-300 px-4 py-2 text-right">{row.amount.toLocaleString()}</td>
            <td className="border border-gray-300 px-4 py-2 text-right">{row.taxAmount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

// Usage example
// import TableComponent from './TableComponent';
// import { TableRow } from './types';

// const rowData: TableRow[] = [
//   { category: "事務用消耗品", item: "事務用備品", taxType: "課税", amount: 23868, taxAmount: 1768 },
// ];

// <TableComponent data={rowData} />;