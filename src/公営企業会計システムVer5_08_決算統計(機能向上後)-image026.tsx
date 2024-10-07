import React from 'react';

// Propsの型定義
interface TableComponentProps {
  title: string;
  fiscalYear: string;
  data: Array<{
    code: string;
    name: string;
    debitAmount: number;
    creditAmount: number;
    debitBalance: number;
    creditBalance: number;
    adjustment: string;
  }>;
}

// 再利用可能なテーブルコンポーネント
const TableComponent: React.FC<TableComponentProps> = ({ title, fiscalYear, data }) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex items-center justify-between my-2">
        <span className="text-sm">年度: {fiscalYear}</span>
      </div>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-2 py-1 border">仕訳番号</th>
            <th className="px-2 py-1 border">仕訳歌名前</th>
            <th className="px-2 py-1 border">借方金額 (円)</th>
            <th className="px-2 py-1 border">貸方金額 (円)</th>
            <th className="px-2 py-1 border">借方残高 (円)</th>
            <th className="px-2 py-1 border">貸方残高 (円)</th>
            <th className="px-2 py-1 border">端数調整</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="even:bg-gray-200">
              <td className="px-2 py-1 border">{row.code}</td>
              <td className="px-2 py-1 border">{row.name}</td>
              <td className="px-2 py-1 border">{row.debitAmount.toLocaleString()}</td>
              <td className="px-2 py-1 border">{row.creditAmount.toLocaleString()}</td>
              <td className="px-2 py-1 border">{row.debitBalance.toLocaleString()}</td>
              <td className="px-2 py-1 border">{row.creditBalance.toLocaleString()}</td>
              <td className="px-2 py-1 border">{row.adjustment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;