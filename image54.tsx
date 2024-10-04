```tsx
import React from 'react';

type Props = {
  rows: Array<{
    date: string;
    category: string;
    amount: number;
    taxRate: number;
    description: string;
  }>;
};

const TaxReportTable: React.FC<Props> = ({ rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        {/* Table Head */}
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-right">Amount</th>
            <th className="py-3 px-6 text-right">Tax Rate</th>
            <th className="py-3 px-6 text-left">Description</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="text-gray-600 text-sm font-light">
          {rows.map((row, index) => (
            <tr
              key={index}
              className={`border-b border-gray-200 hover:bg-gray-100 ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.date}</td>
              <td className="py-3 px-6 text-left">{row.category}</td>
              <td className="py-3 px-6 text-right">{row.amount.toLocaleString()}</td>
              <td className="py-3 px-6 text-right">{row.taxRate}%</td>
              <td className="py-3 px-6 text-left">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxReportTable;
```