```tsx
import React from 'react';

// 型定義
type Record = {
  debitItem: string;
  debitDetail: string;
  debitDescription: string;
  creditItem: string;
  creditDetail: string;
  creditDescription: string;
};

type ConfirmationTableProps = {
  year: string;
  decisionNumber: string;
  records: Record[];
  decisionAmount: number;
  baseAmount: number;
  taxAmount: number;
  onCancel: () => void;
};

// コンポーネント定義
const ConfirmationTable: React.FC<ConfirmationTableProps> = ({
  year,
  decisionNumber,
  records,
  decisionAmount,
  baseAmount,
  taxAmount,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white border border-gray-300">
      <div className="flex justify-between items-center bg-blue-500 p-2 text-white">
        <h1 className="text-xl">仕訳確認</h1>
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div>年度: {year}</div>
          <div>支出決定番号: {decisionNumber}</div>
        </div>
        <table className="w-full border-collapse border border-gray-400 mb-4">
          <thead className="bg-blue-100">
            <tr>
              <th className="border border-gray-400 px-2 py-1">予算</th>
              <th className="border border-gray-400 px-2 py-1">借方科目</th>
              <th className="border border-gray-400 px-2 py-1">借方細節</th>
              <th className="border border-gray-400 px-2 py-1">借方明細</th>
              <th className="border border-gray-400 px-2 py-1">貸方科目</th>
              <th className="border border-gray-400 px-2 py-1">貸方細節</th>
              <th className="border border-gray-400 px-2 py-1">貸方明細</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-400 px-2 py-1">仮払消費税</td>
                <td className="border border-gray-400 px-2 py-1">{record.debitItem}</td>
                <td className="border border-gray-400 px-2 py-1">{record.debitDetail}</td>
                <td className="border border-gray-400 px-2 py-1">{record.debitDescription}</td>
                <td className="border border-gray-400 px-2 py-1">{record.creditItem}</td>
                <td className="border border-gray-400 px-2 py-1">{record.creditDetail}</td>
                <td className="border border-gray-400 px-2 py-1">{record.creditDescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between text-right mb-4">
          <div>決定額: {decisionAmount.toLocaleString()}</div>
          <div>本体額: {baseAmount.toLocaleString()}</div>
          <div>消費税額: {taxAmount.toLocaleString()}</div>
        </div>
        <button
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ConfirmationTable;
```