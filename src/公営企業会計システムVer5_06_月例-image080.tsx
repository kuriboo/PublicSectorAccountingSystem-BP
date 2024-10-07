import React from "react";

// Define the type for props
interface TableProps {
  rows: {
    type: string;
    source: string;
    date: string;
    number: number;
    detail: number;
    debit: string;
    debitAccount: string;
    credit: string;
    creditAccount: string;
    amount: number;
    tax: number;
    summary: string;
  }[];
}

const TransactionTable: React.FC<TableProps> = ({ rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">返還</th>
            <th className="py-2 px-4 border">種別</th>
            <th className="py-2 px-4 border">発生源</th>
            <th className="py-2 px-4 border">伝票日付</th>
            <th className="py-2 px-4 border">番号</th>
            <th className="py-2 px-4 border">明細</th>
            <th className="py-2 px-4 border">借方</th>
            <th className="py-2 px-4 border">借方科目</th>
            <th className="py-2 px-4 border">貸方</th>
            <th className="py-2 px-4 border">貸方科目</th>
            <th className="py-2 px-4 border">本体金額</th>
            <th className="py-2 px-4 border">税額</th>
            <th className="py-2 px-4 border">摘要</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border"></td>
              <td className="py-2 px-4 border">{row.type}</td>
              <td className="py-2 px-4 border">{row.source}</td>
              <td className="py-2 px-4 border">{row.date}</td>
              <td className="py-2 px-4 border">{row.number}</td>
              <td className="py-2 px-4 border">{row.detail}</td>
              <td className="py-2 px-4 border">{row.debit}</td>
              <td className="py-2 px-4 border">{row.debitAccount}</td>
              <td className="py-2 px-4 border">{row.credit}</td>
              <td className="py-2 px-4 border">{row.creditAccount}</td>
              <td className="py-2 px-4 border">{row.amount.toLocaleString()}</td>
              <td className="py-2 px-4 border">{row.tax}</td>
              <td className="py-2 px-4 border">{row.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
```