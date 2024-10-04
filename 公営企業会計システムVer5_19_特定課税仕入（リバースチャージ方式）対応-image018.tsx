```tsx
import React from 'react';

// Propsの型定義
interface ExcelTableProps {
  data: (string | number)[][];
  headerStyle?: string;
  cellStyle?: string;
}

// ExcelTableコンポーネント
const ExcelTable: React.FC<ExcelTableProps> = ({
  data,
  headerStyle = "bg-blue-200",
  cellStyle = "border border-gray-300 text-center",
}) => {
  return (
    <table className="min-w-full border-collapse border border-gray-400">
      <thead>
        <tr>
          {data[0].map((header, index) => (
            <th key={index} className={`p-2 ${headerStyle}`}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={`p-2 ${cellStyle}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExcelTable;

// 使用例
// const sampleData = [
//   ["項目", "金額1", "金額2", "金額3"],
//   ["支給額", 2100000, 2100000, 2100000],
//   ["控除額", 100000, 100000, 100000],
// ];
// <ExcelTable data={sampleData} />;
```