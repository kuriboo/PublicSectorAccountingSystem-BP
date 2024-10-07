// imports
import React from 'react';

// TypeScript Props Interface
interface BudgetTableProps {
  data: {
    date: string;
    process: string;
    description: string;
    plannedAmount: number;
    burdenNumber: number;
    burdenAmount: number;
    internalTax: number;
    contractNumber: string;
  }[];
}

// BudgetTable Component
const BudgetTable: React.FC<BudgetTableProps> = ({ data }) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Table Header */}
      <div className="text-lg font-bold mb-2">支出予算差引簿（予定額）照会</div>

      {/* Table Content */}
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-blue-500 text-white">
            <th className="py-2 px-4">日</th>
            <th className="py-2 px-4">処理</th>
            <th className="py-2 px-4">摘要</th>
            <th className="py-2 px-4">予定額</th>
            <th className="py-2 px-4">負担番号</th>
            <th className="py-2 px-4">負担額</th>
            <th className="py-2 px-4">内消費税額</th>
            <th className="py-2 px-4">契約番号</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center odd:bg-gray-200">
              <td className="py-2">{row.date}</td>
              <td className="py-2">{row.process}</td>
              <td className="py-2">{row.description}</td>
              <td className="py-2">{row.plannedAmount.toLocaleString()}</td>
              <td className="py-2">{row.burdenNumber.toLocaleString()}</td>
              <td className="py-2">{row.burdenAmount.toLocaleString()}</td>
              <td className="py-2">{row.internalTax.toLocaleString()}</td>
              <td className="py-2">{row.contractNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
