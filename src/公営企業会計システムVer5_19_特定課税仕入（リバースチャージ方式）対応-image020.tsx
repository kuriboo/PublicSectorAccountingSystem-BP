import React from 'react';

// TypeScriptの型定義
type TableRow = {
  no: number;
  item: string;
  tax6Percent: string;
  tax4Percent: string;
  tax3Percent: string;
  tax24Percent: string;
  tax8Percent: string;
  total: string;
  calculationMethod: string;
  note: string;
};

type TaxTableProps = {
  rows: TableRow[];
};

// 再利用可能なコンポーネントの定義
const TaxTable: React.FC<TaxTableProps> = ({ rows }) => {
  return (
    <div className="container mx-auto my-4 p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-300">
            {[
              'No.',
              '項目',
              '課税6,3%対象 A',
              '課税4%対象 B',
              '課税3%対象 C',
              '課税6,24%対象 D',
              '課税7,8%対象 E',
              '合計 (X+D+E)',
              '計算式（税抜、外税）',
              '中作者',
            ].map((header, index) => (
              <th key={index} className="border px-2 py-1 text-left text-xs">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.no} className="bg-white">
              <td className="border px-2 py-1 text-xs">{row.no}</td>
              <td className="border px-2 py-1 text-xs">{row.item}</td>
              <td className="border px-2 py-1 text-xs">{row.tax6Percent}</td>
              <td className="border px-2 py-1 text-xs">{row.tax4Percent}</td>
              <td className="border px-2 py-1 text-xs">{row.tax3Percent}</td>
              <td className="border px-2 py-1 text-xs">{row.tax24Percent}</td>
              <td className="border px-2 py-1 text-xs">{row.tax8Percent}</td>
              <td className="border px-2 py-1 text-xs">{row.total}</td>
              <td className="border px-2 py-1 text-xs">{row.calculationMethod}</td>
              <td className="border px-2 py-1 text-xs">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxTable;
```