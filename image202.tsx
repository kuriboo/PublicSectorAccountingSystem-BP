```tsx
import React from 'react';

// データの型定義
type TableData = {
  electronicStatus: string;
  department: string;
  date: string;
  type: string;
  accountDivision: string;
  voucherNo: number;
  description: string;
  close: string;
  issue: string;
  inputAmount: string;
};

// プロパティの型定義
type TableComponentProps = {
  data: TableData[];
};

// 再利用可能なテーブルコンポーネント
const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  return (
    <table className="min-w-full border-collapse border border-blue-500">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th className="border border-blue-400 px-2 py-1">電子決裁状況</th>
          <th className="border border-blue-400 px-2 py-1">所属</th>
          <th className="border border-blue-400 px-2 py-1">振替日</th>
          <th className="border border-blue-400 px-2 py-1">種別</th>
          <th className="border border-blue-400 px-2 py-1">伝票区分</th>
          <th className="border border-blue-400 px-2 py-1">伝票No</th>
          <th className="border border-blue-400 px-2 py-1">摘要</th>
          <th className="border border-blue-400 px-2 py-1">締め</th>
          <th className="border border-blue-400 px-2 py-1">発行</th>
          <th className="border border-blue-400 px-2 py-1">入力額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="even:bg-gray-100">
            <td className="border border-blue-400 px-2 py-1">{row.electronicStatus}</td>
            <td className="border border-blue-400 px-2 py-1">{row.department}</td>
            <td className="border border-blue-400 px-2 py-1">{row.date}</td>
            <td className="border border-blue-400 px-2 py-1">{row.type}</td>
            <td className="border border-blue-400 px-2 py-1">{row.accountDivision}</td>
            <td className="border border-blue-400 px-2 py-1">{row.voucherNo}</td>
            <td className="border border-blue-400 px-2 py-1">{row.description}</td>
            <td className="border border-blue-400 px-2 py-1">{row.close}</td>
            <td className="border border-blue-400 px-2 py-1">{row.issue}</td>
            <td className="border border-blue-400 px-2 py-1">{row.inputAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
```