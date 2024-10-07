// components/SpreadsheetTable.tsx

import React from 'react';

// 定義されるプロップの型
interface SpreadsheetTableProps {
  data: Array<Array<string | number>>;
  className?: string;
}

const SpreadsheetTable: React.FC<SpreadsheetTableProps> = ({ data, className }) => {
  return (
    <table className={`table-auto border-collapse w-full ${className}`}>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b">
            {row.map((cell, cellIndex) => (
              <td 
                key={cellIndex} 
                className="border p-2 text-center"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SpreadsheetTable;

// 使用例（親コンポーネントから渡されるdataプロップ）
const sampleData: Array<Array<string | number>> = [
  ['建設改良費', '施設定備費', '事務費', '給与費'],
  [2100000, 2100000, 0, 2100000],
  [2000000, 2000000, 0, 2000000],
  [1000000, 100000, 0, 100000],
];

// 親コンポーネントでSpreadsheetTableの使用例
/*
<SpreadsheetTable data={sampleData} className="my-4" />
*/
```