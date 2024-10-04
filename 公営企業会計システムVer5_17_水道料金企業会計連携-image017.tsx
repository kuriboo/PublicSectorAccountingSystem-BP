import React from 'react';

// Define the types for the component props
interface TableColumn {
  header: string;
  key: string;
}

interface TableRow {
  [key: string]: string | number; // Key can be any column key, value is string or number
}

interface DataTableProps {
  columns: TableColumn[];
  data: TableRow[];
  className?: string; // Optional Tailwind CSS class for customization
}

// DataTable component
const DataTable: React.FC<DataTableProps> = ({ columns, data, className }) => {
  return (
    <table className={`min-w-full bg-white shadow-md ${className || ''}`}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className="p-3 text-left border-b font-medium text-gray-700"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-100">
            {columns.map((column) => (
              <td key={column.key} className="p-3 border-b">
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;