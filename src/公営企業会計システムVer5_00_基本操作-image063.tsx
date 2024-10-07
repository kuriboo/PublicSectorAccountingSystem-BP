import React from 'react';

// 型定義
type TableColumn = {
  id: number;
  year: number;
  number: number;
  changes: number;
  category: number;
  corrections: number;
  processDate: string;
  note: string;
};

type DataTableProps = {
  data: TableColumn[];
  onRowSelect?: (row: TableColumn) => void;
};

// 再利用可能なテーブルコンポーネント
const DataTable: React.FC<DataTableProps> = ({ data, onRowSelect }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">支出負担年度</th>
            <th className="border px-4 py-2">支出負担番号</th>
            <th className="border px-4 py-2">変更回数</th>
            <th className="border px-4 py-2">支払種別区分</th>
            <th className="border px-4 py-2">訂正回数</th>
            <th className="border px-4 py-2">負担処理年月日</th>
            <th className="border px-4 py-2">摘要１</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => onRowSelect?.(row)}
            >
              <td className="border px-4 py-2">{row.year}</td>
              <td className="border px-4 py-2">{row.number}</td>
              <td className="border px-4 py-2">{row.changes}</td>
              <td className="border px-4 py-2">{row.category}</td>
              <td className="border px-4 py-2">{row.corrections}</td>
              <td className="border px-4 py-2">{row.processDate}</td>
              <td className="border px-4 py-2">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
```