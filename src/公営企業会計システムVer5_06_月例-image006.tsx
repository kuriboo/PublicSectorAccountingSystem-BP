import React from 'react';

// 型定義
type TableRow = {
  code: string;
  description: string;
  subtotal: number;
  taxableAmount: number;
  taxAmount: number;
  transferNumber: number;
  status: string;
};

type Props = {
  title: string;
  date: string;
  year: string;
  registerNumber: string;
  rows: TableRow[];
};

// コンポーネント定義
const RegistrationTable: React.FC<Props> = ({
  title,
  date,
  year,
  registerNumber,
  rows,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="block text-gray-700">伝票日付:</label>
          <span className="ml-2">{date}</span>
        </div>
        <div className="col-span-1">
          <label className="block text-gray-700">年度:</label>
          <span className="ml-2">{year}</span>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700">一括振替番号:</label>
          <span className="ml-2">{registerNumber}</span>
        </div>
      </div>

      <table className="mt-4 min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">仕訳コード</th>
            <th className="px-4 py-2 border">摘要</th>
            <th className="px-4 py-2 border">税込金額</th>
            <th className="px-4 py-2 border">税抜金額</th>
            <th className="px-4 py-2 border">消費税額</th>
            <th className="px-4 py-2 border">振替番号</th>
            <th className="px-4 py-2 border">締め</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2 border">{row.code}</td>
              <td className="px-4 py-2 border">{row.description}</td>
              <td className="px-4 py-2 border">{row.subtotal.toLocaleString()}</td>
              <td className="px-4 py-2 border">{row.taxableAmount.toLocaleString()}</td>
              <td className="px-4 py-2 border">{row.taxAmount.toLocaleString()}</td>
              <td className="px-4 py-2 border">{row.transferNumber}</td>
              <td className="px-4 py-2 border">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-4 flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">OK</button>
        <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">クリア</button>
        <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">終了</button>
      </div>
    </div>
  );
};

export default RegistrationTable;
