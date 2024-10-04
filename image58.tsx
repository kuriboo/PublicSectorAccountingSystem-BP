```tsx
import React from 'react';

type ExcelData = {
  columnA: string;
  columnB: string;
  columnC: string;
  columnD: string;
  columnE?: string; // Optional as some cells seem empty
  columnF: string;
  columnG: string;
  columnH: string;
  columnI: string;
  columnJ: string;
  columnK: number;
};

type ExcelTableProps = {
  data: ExcelData[];
};

const ExcelTable: React.FC<ExcelTableProps> = ({ data }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-200 px-4 py-2">A</th>
          <th className="border border-gray-200 px-4 py-2">B</th>
          <th className="border border-gray-200 px-4 py-2">C</th>
          <th className="border border-gray-200 px-4 py-2">D</th>
          <th className="border border-gray-200 px-4 py-2">E</th>
          <th className="border border-gray-200 px-4 py-2">F</th>
          <th className="border border-gray-200 px-4 py-2">G</th>
          <th className="border border-gray-200 px-4 py-2">H</th>
          <th className="border border-gray-200 px-4 py-2">I</th>
          <th className="border border-gray-200 px-4 py-2">J</th>
          <th className="border border-gray-200 px-4 py-2">K</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border border-gray-200 px-4 py-2">{row.columnA}</td>
            <td className="border border-gray-200 px-4 py-2">{row.columnB}</td>
            <td className="border border-gray-200 px-4 py-2">{row.columnC}</td>
            <td className="border border-gray-200 px-4 py-2">{row.columnD}</td>
            <td className="border border-gray-200 px-4 py-2">{row.columnE ?? ''}</td>
            <td className="border border-gray-200 px-4 py-2">{row.columnF}</td>
            <td className="border border-gray-200 px-4 py-2">{row.columnG}</td>
            <td className="border border-gray-200 px-4 py-2">{row.columnH}</td>
            <td className="border border-gray-200 px-4 py-2">{row.columnI}</td>
            <td className="border border-gray-200 px-4 py-2">{row.columnJ}</td>
            <td className="border border-gray-200 px-4 py-2">{row.columnK}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExcelTable;

// Sample usage
/*
<ExcelTable
  data={[
    {
      columnA: "支出",
      columnB: "不課税支出",
      columnC: "収益的支出",
      columnD: "課税売上対応分",
      columnE: "1",
      columnF: "課税",
      columnG: "1",
      columnH: "",
      columnI: "課税",
      columnJ: "8",
      columnK: 1137468,
    },
    // More rows...
  ]}
/>
*/
```