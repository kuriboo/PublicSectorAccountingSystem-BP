// Import necessary modules
import React from 'react';

// Define TypeScript types for props
interface TaxTableProps {
  title: string;
  period: string;
  office: string;
  data: Array<{
    category: string;
    oldTaxTotal: number;
    rate6_24: number;
    rate7_8: number;
    total: number;
  }>;
}

// Define the component using Tailwind CSS for styling
const TaxTable: React.FC<TaxTableProps> = ({ title, period, office, data }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <p className="mb-2"><strong>期間:</strong> {period}</p>
      <p className="mb-4"><strong>事業所:</strong> {office}</p>
      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">区分</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">旧税率部分計</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">税率6.24%適用分</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">税率7.8%適用分</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">合計</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 whitespace-nowrap">{item.category}</td>
              <td className="px-4 py-2 whitespace-nowrap">{item.oldTaxTotal.toLocaleString()}</td>
              <td className="px-4 py-2 whitespace-nowrap">{item.rate6_24.toLocaleString()}</td>
              <td className="px-4 py-2 whitespace-nowrap">{item.rate7_8.toLocaleString()}</td>
              <td className="px-4 py-2 whitespace-nowrap">{item.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxTable;