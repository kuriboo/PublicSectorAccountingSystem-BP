import React from 'react';

type TableData = {
  category: string;
  detail: string;
  tax: string;
  amount: number;
  consumptionTax: number;
};

type DataTableProps = {
  data: TableData[];
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-blue-900">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">細節</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">明細</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">税</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">負担額</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">消費税額</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.category}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.detail}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.tax}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.amount.toLocaleString()}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.consumptionTax.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

// Usage Example
/*
<DataTable
  data={[
    { category: '事務用消耗品', detail: '事務用備品', tax: '課税', amount: 23868, consumptionTax: 1768 },
    { category: '作業用消耗品', detail: '作業用備品', tax: '課税', amount: 201960, consumptionTax: 14960 },
  ]}
/>
*/
