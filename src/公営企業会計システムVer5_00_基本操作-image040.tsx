import React from 'react';

// Tailwind CSS for styling
import 'tailwindcss/tailwind.css';

// TypeScript interface for component props
interface DataTableProps {
  data: Array<{
    detail1: string;
    detail2: string;
    taxType: string;
    amount: number;
    consumptionTax: number;
  }>;
}

// Reusable DataTable component
const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="border border-gray-400 bg-blue-900 text-white px-4 py-2">細節</th>
          <th className="border border-gray-400 bg-blue-900 text-white px-4 py-2">明細</th>
          <th className="border border-gray-400 bg-blue-900 text-white px-4 py-2">税</th>
          <th className="border border-gray-400 bg-blue-900 text-white px-4 py-2">負担額</th>
          <th className="border border-gray-400 bg-blue-900 text-white px-4 py-2">消費税額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="odd:bg-white even:bg-gray-100">
            <td className="border border-gray-400 px-4 py-2">{row.detail1}</td>
            <td className="border border-gray-400 px-4 py-2">{row.detail2}</td>
            <td className="border border-gray-400 px-4 py-2">{row.taxType}</td>
            <td className="border border-gray-400 px-4 py-2 text-right">{row.amount.toLocaleString()}</td>
            <td className="border border-gray-400 px-4 py-2 text-right">{row.consumptionTax.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

// Example usage of the DataTable component
// import DataTable from './DataTable';

// const data = [
//   { detail1: '事務用消耗品', detail2: '事務用品', taxType: '課税', amount: 23868, consumptionTax: 1768 },
//   { detail1: '作業用消耗品', detail2: '作業用備品', taxType: '課税', amount: 201960, consumptionTax: 14960 },
// ];

// <DataTable data={data} />;
