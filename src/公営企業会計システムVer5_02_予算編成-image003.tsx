// TableComponent.tsx

import React from 'react';

type TableColumn = {
  key: string;
  label: string;
};

type TableComponentProps = {
  columns: TableColumn[];
  data: Record<string, string | number>[];
  onOk: () => void;
  onCancel: () => void;
};

const TableComponent: React.FC<TableComponentProps> = ({ columns, data, onOk, onCancel }) => {
  return (
    <div className="border rounded-md shadow-md p-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-blue-800 text-white">
            {columns.map((column) => (
              <th key={column.key} className="py-2 px-4 border">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              {columns.map((column) => (
                <td key={column.key} className="py-2 px-4 text-center border">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-2 mt-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
