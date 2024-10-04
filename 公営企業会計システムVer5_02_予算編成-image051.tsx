import React from 'react';

// Type definitions for component props
type TableRow = {
  budgetItem: string;
  itemName: string;
  beforeRevision: number;
  currentRevision: number;
  afterRevision: number;
};

type BudgetTableProps = {
  year: string;
  revisionNumber: number;
  title: string;
  rows: TableRow[];
};

const BudgetTable: React.FC<BudgetTableProps> = ({ year, revisionNumber, title, rows }) => {
  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className="mb-4">
        <span className="mr-2">年度:</span>
        <span>{year}</span>
        <span className="mr-2 ml-4">補正:</span>
        <span>{revisionNumber}</span>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-2 bg-gray-100">予算科目</th>
            <th className="border border-gray-200 px-4 py-2 bg-gray-100">科目名称</th>
            <th className="border border-gray-200 px-4 py-2 bg-gray-100">補正前</th>
            <th className="border border-gray-200 px-4 py-2 bg-gray-100">今回補正</th>
            <th className="border border-gray-200 px-4 py-2 bg-gray-100">補正後</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-200 px-4 py-2">{row.budgetItem}</td>
              <td className="border border-gray-200 px-4 py-2">{row.itemName}</td>
              <td className="border border-gray-200 px-4 py-2 text-right">
                {row.beforeRevision.toLocaleString()}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-right">
                {row.currentRevision.toLocaleString()}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-right">
                {row.afterRevision.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;