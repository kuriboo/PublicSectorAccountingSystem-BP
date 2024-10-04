```tsx
import React from 'react';

// 型定義
interface TableRowProps {
  division: string;
  content: string;
  value: number;
  settings: string;
}

const TableRow: React.FC<TableRowProps> = ({ division, content, value, settings }) => {
  return (
    <tr className="border-b">
      <td className="px-4 py-2 text-center">{division}</td>
      <td className="px-4 py-2">{content}</td>
      <td className="px-4 py-2 text-center">{value}</td>
      <td className="px-4 py-2">{settings}</td>
    </tr>
  );
};

// 型定義
interface TableProps {
  rows: TableRowProps[];
  className?: string;
}

const Table: React.FC<TableProps> = ({ rows, className }) => {
  return (
    <table className={`min-w-full bg-white ${className}`}>
      <thead>
        <tr className="bg-blue-800 text-white">
          <th className="px-4 py-2">区分</th>
          <th className="px-4 py-2">制御内容</th>
          <th className="px-4 py-2">制御値</th>
          <th className="px-4 py-2">設定</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow key={index} {...row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
```