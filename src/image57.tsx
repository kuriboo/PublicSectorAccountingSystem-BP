import React from 'react';

// TypeScriptの型定義
type DataRow = {
  columnA: string;
  columnB: string;
  columnC: string;
  columnD: string;
  columnF: number;
  columnG: string;
  columnK: number;
};

type TableProps = {
  data: DataRow[];
};

// 関数コンポーネントの定義
const DataTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-3 bg-gray-200 font-bold">Column A</th>
            <th className="py-2 px-3 bg-gray-200 font-bold">Column B</th>
            <th className="py-2 px-3 bg-gray-200 font-bold">Column C</th>
            <th className="py-2 px-3 bg-gray-200 font-bold">Column D</th>
            <th className="py-2 px-3 bg-gray-200 font-bold">Column F</th>
            <th className="py-2 px-3 bg-gray-200 font-bold">Column G</th>
            <th className="py-2 px-3 bg-gray-200 font-bold">Column K</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center border-b">
              <td className="py-2 px-3">{row.columnA}</td>
              <td className="py-2 px-3">{row.columnB}</td>
              <td className="py-2 px-3">{row.columnC}</td>
              <td className="py-2 px-3">{row.columnD}</td>
              <td className="py-2 px-3">{row.columnF}</td>
              <td className="py-2 px-3">{row.columnG}</td>
              <td className="py-2 px-3">{row.columnK}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
```