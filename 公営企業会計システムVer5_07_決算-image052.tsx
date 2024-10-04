```tsx
import React from 'react';

// データの型定義
type DataRow = {
  title: string;
  values: number[];
};

// プロパティの型定義
type FinancialTableProps = {
  data: DataRow[];
  title: string;
  footerNote: string;
};

const FinancialTable: React.FC<FinancialTableProps> = ({
  data,
  title,
  footerNote,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-800 text-white text-xl font-semibold">
        {title}
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">項目</th>
            <th className="border px-4 py-2">当年度</th>
            <th className="border px-4 py-2">前年度</th>
            <th className="border px-4 py-2">増減</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{row.title}</td>
              {row.values.map((value, i) => (
                <td key={i} className="border px-4 py-2 text-right">
                  {value.toLocaleString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-6 py-4 bg-gray-100 text-sm">
        <p className="text-gray-600">{footerNote}</p>
      </div>
    </div>
  );
};

export default FinancialTable;
```