import React from 'react';

type TableRow = {
  fiscalYear: number;
  budget: string;
  code: string;
  detail: string;
  name: string;
  nextYearFiscalYear: string;
  nextYearBudget: string;
};

type DataTableProps = {
  data: TableRow[];
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">会計年度</th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">予算</th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">科目コード</th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">名称</th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">次年度</th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">次年度項目</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="even:bg-gray-50">
            <td className="py-2 px-4 border-b border-gray-200">{row.fiscalYear}</td>
            <td className="py-2 px-4 border-b border-gray-200">{row.budget}</td>
            <td className="py-2 px-4 border-b border-gray-200">{row.code}</td>
            <td className="py-2 px-4 border-b border-gray-200">{row.name}</td>
            <td className="py-2 px-4 border-b border-gray-200">{row.nextYearFiscalYear}</td>
            <td className="py-2 px-4 border-b border-gray-200">{row.nextYearBudget}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
