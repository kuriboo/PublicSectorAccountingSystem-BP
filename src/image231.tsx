import React from 'react';

// Type definitions for props
interface TransactionTableProps {
  year: string;
  transactionNumber: string;
  debits: { category: string; subcategory: string; details: string }[];
  credits: { category: string; subcategory: string; details: string }[];
  amounts: { decision: number; baseAmount: number; taxAmount: number };
  onCancel: () => void;
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  year,
  transactionNumber,
  debits,
  credits,
  amounts,
  onCancel,
}) => {
  return (
    <div className="border rounded p-4 shadow-lg bg-white">
      <div className="flex justify-between border-b pb-2">
        <span className="text-lg font-bold">住訳確認</span>
        <button className="text-blue-500 px-2" onClick={onCancel}>キャンセル</button>
      </div>
      <div className="my-4 text-center">
        <span className="font-semibold">年度</span> {year} 
        <span className="mx-8 font-semibold">支出決定番号</span> {transactionNumber}
      </div>
      <table className="w-full table-fixed border-collapse border">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="border px-2 py-1 w-1/6">借方科目</th>
            <th className="border px-2 py-1 w-1/6">借方細節</th>
            <th className="border px-2 py-1 w-1/6">借方明細</th>
            <th className="border px-2 py-1 w-1/6">貸方科目</th>
            <th className="border px-2 py-1 w-1/6">貸方細節</th>
            <th className="border px-2 py-1 w-1/6">貸方明細</th>
          </tr>
        </thead>
        <tbody>
          {debits.map((debit, index) => (
            <tr key={index} className="text-center">
              <td className="border px-2">{debit.category}</td>
              <td className="border px-2">{debit.subcategory}</td>
              <td className="border px-2">{debit.details}</td>
              <td className="border px-2">{credits[index]?.category || ""}</td>
              <td className="border px-2">{credits[index]?.subcategory || ""}</td>
              <td className="border px-2">{credits[index]?.details || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-around mt-4">
        <div className="text-center">
          <span className="block font-semibold">決定額</span>
          <span>{amounts.decision.toLocaleString()}</span>
        </div>
        <div className="text-center">
          <span className="block font-semibold">本体額</span>
          <span>{amounts.baseAmount.toLocaleString()}</span>
        </div>
        <div className="text-center">
          <span className="block font-semibold">消費税額</span>
          <span>{amounts.taxAmount.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
```