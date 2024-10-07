import React from 'react';

type RowData = {
  category: string;
  detail: string;
  tax: string;
  amount: number;
  taxAmount: number;
};

type TableProps = {
  data: RowData[];
  onEdit?: (index: number) => void;
  onDelete?: (index: number) => void;
};

const DataTable: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="px-4 py-2">細節</th>
            <th className="px-4 py-2">明細</th>
            <th className="px-4 py-2">税</th>
            <th className="px-4 py-2">負担額</th>
            <th className="px-4 py-2">消費税額</th>
            <th className="px-4 py-2">操作</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2 text-center">{row.category}</td>
              <td className="px-4 py-2 text-center">{row.detail}</td>
              <td className="px-4 py-2 text-center">{row.tax}</td>
              <td className="px-4 py-2 text-center">{row.amount.toLocaleString()}</td>
              <td className="px-4 py-2 text-center">{row.taxAmount.toLocaleString()}</td>
              <td className="px-4 py-2 text-center">
                {onEdit && (
                  <button
                    className="bg-gray-300 text-black px-2 py-1 mr-2 rounded"
                    onClick={() => onEdit(index)}
                  >
                    明細編集
                  </button>
                )}
                {onDelete && (
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => onDelete(index)}
                  >
                    行削除
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
```