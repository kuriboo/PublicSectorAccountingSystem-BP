import React from 'react';

// TypeScript type definitions for the component's props
type DataEntry = {
  date: string;
  number: number;
  amount: string;
  description: string;
};

interface DataTableProps {
  title: string;
  data: DataEntry[];
}

const DataTable: React.FC<DataTableProps> = ({ title, data }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-lg font-bold text-center mb-4">{title}</h2>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row">
            <th className="bg-blue-800 text-white p-2 text-left block md:table-cell">処理日</th>
            <th className="bg-blue-800 text-white p-2 text-left block md:table-cell">予定番号</th>
            <th className="bg-blue-800 text-white p-2 text-left block md:table-cell">予定額</th>
            <th className="bg-blue-800 text-white p-2 text-left block md:table-cell">摘要</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((entry, index) => (
            <tr 
              key={index}
              className={`border border-gray-300 md:border-none block md:table-row ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}
            >
              <td className="p-2 block md:table-cell">{entry.date}</td>
              <td className="p-2 block md:table-cell">{entry.number}</td>
              <td className="p-2 block md:table-cell">{entry.amount}</td>
              <td className="p-2 block md:table-cell">{entry.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;