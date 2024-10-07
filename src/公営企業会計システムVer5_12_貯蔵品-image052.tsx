import React from 'react';

type TableColumn = {
  id: string;
  label: string;
  width?: string;
};

type TableRow = {
  [key: string]: string | number;
};

type Props = {
  columns: TableColumn[];
  rows: TableRow[];
};

const DataTable: React.FC<Props> = ({ columns, rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-600"
                style={{ width: column.width }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={column.id}
                  className="px-4 py-2 border-b border-gray-300 text-sm text-gray-700"
                >
                  {row[column.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

// Example usage:
// const columns = [
//   { id: 'entryYear', label: '入庫年度' },
//   { id: 'entryNumber', label: '入庫番号' },
//   { id: 'entryAmount', label: '入庫数量' },
//   { id: 'entryUnitPrice', label: '入庫単価' },
// ];

// const rows = [
//   {
//     entryYear: '平成29年度',
//     entryNumber: '32',
//     entryAmount: 39,
//     entryUnitPrice: 2500,
//   },
//   {
//     entryYear: '平成29年度',
//     entryNumber: '58',
//     entryAmount: 72,
//     entryUnitPrice: 2500,
//   },
// ];

// <DataTable columns={columns} rows={rows} />
