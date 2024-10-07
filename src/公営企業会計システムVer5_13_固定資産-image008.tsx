import React from 'react';

// TypeScriptの型定義
type TableProps = {
  columns: string[];
  data: Array<{ [key: string]: string | number }>;
  onOk: () => void;
  onCancel: () => void;
};

const DataTable: React.FC<TableProps> = ({ columns, data, onOk, onCancel }) => (
  <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
    <h2 className="text-lg font-bold mb-4">負担情報明細</h2>
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div>負担年度: 平成29</div>
      <div>負担番号: 174</div>
    </div>
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-blue-600 text-white">
          {columns.map((column, index) => (
            <th key={index} className="py-2 px-4 border">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="bg-gray-100">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="py-2 px-4 border">
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className="flex justify-end mt-4">
      <button onClick={onOk} className="mr-2 px-4 py-2 bg-gray-300 rounded">
        OK
      </button>
      <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
        キャンセル
      </button>
    </div>
  </div>
);

export default DataTable;
```