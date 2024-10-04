```tsx
import React from 'react';

// 型定義
interface FinancialTableProps {
  headers: string[];
  data: (string | number)[][];
  className?: string;
}

const FinancialTable: React.FC<FinancialTableProps> = ({ headers, data, className }) => {
  return (
    <div className={`overflow-auto ${className}`}>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 border border-gray-300 bg-gray-100 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-2 border border-gray-300 ${
                    typeof cell === 'number' ? 'text-right' : 'text-left'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;
```