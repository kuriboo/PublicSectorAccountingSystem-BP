import React from 'react';

// Type definitions for component props
type TableComponentProps = {
  title: string;
  year: number;
  columns: string[];
  data: { code: string; name: string }[];
};

// Reusable TableComponent
const TableComponent: React.FC<TableComponentProps> = ({
  title,
  year,
  columns,
  data,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <div className="flex justify-between mb-4">
        <span className="text-lg font-bold">{title}</span>
        <span className="text-lg">{`年度: 平成${year}`}</span>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="py-2 px-4 bg-blue-500 text-white border-b"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4 border-r">{row.code}</td>
              <td className="py-2 px-4">{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-300 py-1 px-4 rounded mr-2">クリア</button>
        <button className="bg-blue-500 text-white py-1 px-4 rounded">OK</button>
        <button className="bg-gray-300 py-1 px-4 rounded ml-2">キャンセル</button>
      </div>
    </div>
  );
};

export default TableComponent;
