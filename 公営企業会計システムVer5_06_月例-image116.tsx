```tsx
import React from 'react';

// TypeScriptの型定義
type DataRow = {
  code: string;
  description: string;
  values: number[];
};

type DataTableProps = {
  data: DataRow[];
  title?: string;
};

// Tailwind CSSを使用したスタイル付きの再利用可能なコンポーネント
const DataTable: React.FC<DataTableProps> = ({ data, title }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <div className="overflow-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border-b">Code</th>
              <th className="p-2 border-b">Description</th>
              <th className="p-2 border-b text-right">Values</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-2 border-b">{row.code}</td>
                <td className="p-2 border-b">{row.description}</td>
                <td className="p-2 border-b text-right">
                  {row.values.map((value, index) => (
                    <span key={index} className="block">
                      {value.toLocaleString()}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
```