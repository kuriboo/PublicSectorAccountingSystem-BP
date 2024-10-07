import React from 'react';

// TypeScript interface for component props
interface TableProps {
  data: Array<{
    id: number;
    columnA: string;
    columnB: string;
    columnC: string;
    columnD: string;
    columnE: string;
    columnF: number;
    columnG: string;
    columnH: number;
    columnI: number;
    columnJ: number;
  }>;
}

// A reusable table component using Tailwind CSS for styling
const CustomTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {/* Table headers */}
            <th className="py-2 px-4 border-b border-gray-300">Column A</th>
            <th className="py-2 px-4 border-b border-gray-300">Column B</th>
            <th className="py-2 px-4 border-b border-gray-300">Column C</th>
            <th className="py-2 px-4 border-b border-gray-300">Column D</th>
            <th className="py-2 px-4 border-b border-gray-300">Column E</th>
            <th className="py-2 px-4 border-b border-gray-300">Column F</th>
            <th className="py-2 px-4 border-b border-gray-300">Column G</th>
            <th className="py-2 px-4 border-b border-gray-300">Column H</th>
            <th className="py-2 px-4 border-b border-gray-300">Column I</th>
            <th className="py-2 px-4 border-b border-gray-300">Column J</th>
          </tr>
        </thead>
        <tbody>
          {/* Rendering rows from data */}
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">{row.columnA}</td>
              <td className="py-2 px-4 border-b border-gray-300">{row.columnB}</td>
              <td className="py-2 px-4 border-b border-gray-300">{row.columnC}</td>
              <td className="py-2 px-4 border-b border-gray-300">{row.columnD}</td>
              <td className="py-2 px-4 border-b border-gray-300">{row.columnE}</td>
              <td className="py-2 px-4 border-b border-gray-300">{row.columnF}</td>
              <td className="py-2 px-4 border-b border-gray-300">{row.columnG}</td>
              <td className="py-2 px-4 border-b border-gray-300">{row.columnH}</td>
              <td className="py-2 px-4 border-b border-gray-300">{row.columnI}</td>
              <td className="py-2 px-4 border-b border-gray-300">{row.columnJ}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
```