import React from 'react';

type BudgetItem = {
  category: string;
  item: string;
  taxedAmount3: number;
  untaxedAmount3: number;
  taxedAmount4: number;
  untaxedAmount4: number;
  taxedAmount30: number;
  untaxedAmount30: number;
};

type BudgetTableProps = {
  data: BudgetItem[];
};

const BudgetTable: React.FC<BudgetTableProps> = ({ data }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-2 border-b">予算区分</th>
          <th className="px-4 py-2 border-b">項目</th>
          <th className="px-4 py-2 border-b">課税額3.00%</th>
          <th className="px-4 py-2 border-b">税抜額</th>
          <th className="px-4 py-2 border-b">課税額4.00%</th>
          <th className="px-4 py-2 border-b">税抜額</th>
          <th className="px-4 py-2 border-b">課税額30%</th>
          <th className="px-4 py-2 border-b">税抜額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-4 py-2 border-b">{item.category}</td>
            <td className="px-4 py-2 border-b">{item.item}</td>
            <td className="px-4 py-2 border-b text-right">
              {item.taxedAmount3.toLocaleString()}
            </td>
            <td className="px-4 py-2 border-b text-right">
              {item.untaxedAmount3.toLocaleString()}
            </td>
            <td className="px-4 py-2 border-b text-right">
              {item.taxedAmount4.toLocaleString()}
            </td>
            <td className="px-4 py-2 border-b text-right">
              {item.untaxedAmount4.toLocaleString()}
            </td>
            <td className="px-4 py-2 border-b text-right">
              {item.taxedAmount30.toLocaleString()}
            </td>
            <td className="px-4 py-2 border-b text-right">
              {item.untaxedAmount30.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BudgetTable;
