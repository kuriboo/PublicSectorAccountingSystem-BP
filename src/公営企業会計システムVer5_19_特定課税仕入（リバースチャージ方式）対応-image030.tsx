import React from 'react';

// 型定義
type TableCell = {
  content: string | number;
};

type TableRow = {
  cells: TableCell[];
};

type SpreadsheetProps = {
  data: TableRow[];
};

const Spreadsheet: React.FC<SpreadsheetProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-100">
              {row.cells.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="border border-gray-300 p-2 text-right"
                >
                  {cell.content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;