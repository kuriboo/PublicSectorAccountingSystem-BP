```tsx
import React from 'react';

// コンポーネント用の型定義
type ExcelTableProps = {
  data: { [key: string]: string | number }[];
  className?: string;
};

// ExcelTableコンポーネント
const ExcelTable: React.FC<ExcelTableProps> = ({ data, className }) => {
  return (
    <table className={`min-w-full bg-white border-collapse ${className}`}>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50">
            {Object.values(row).map((value, cellIndex) => (
              <td key={cellIndex} className="px-4 py-2 border-b border-gray-200">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExcelTable;
```