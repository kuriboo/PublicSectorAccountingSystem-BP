import React from 'react';

// Props type definition
type LedgerEntry = {
  type: string;
  source: string;
  date: string;
  number: string;
  detail: string;
  debitItem: string;
  creditItem: string;
  amount: number;
  tax: string;
  summary1: string;
  summary2: string;
};

type LedgerComponentProps = {
  entries: LedgerEntry[];
};

// Component definition
const LedgerComponent: React.FC<LedgerComponentProps> = ({ entries }) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">特定課税仕入伝票管理入力</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">種別</th>
            <th className="border border-gray-300 p-2">発生源</th>
            <th className="border border-gray-300 p-2">伝票日付</th>
            <th className="border border-gray-300 p-2">番号</th>
            <th className="border border-gray-300 p-2">明細</th>
            <th className="border border-gray-300 p-2">借方科目</th>
            <th className="border border-gray-300 p-2">貸方科目</th>
            <th className="border border-gray-300 p-2">本体金額</th>
            <th className="border border-gray-300 p-2">税額</th>
            <th className="border border-gray-300 p-2">摘要1</th>
            <th className="border border-gray-300 p-2">摘要2</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="bg-white">
              <td className="border border-gray-300 p-2">{entry.type}</td>
              <td className="border border-gray-300 p-2">{entry.source}</td>
              <td className="border border-gray-300 p-2">{entry.date}</td>
              <td className="border border-gray-300 p-2">{entry.number}</td>
              <td className="border border-gray-300 p-2">{entry.detail}</td>
              <td className="border border-gray-300 p-2">{entry.debitItem}</td>
              <td className="border border-gray-300 p-2">{entry.creditItem}</td>
              <td className="border border-gray-300 p-2">{entry.amount.toLocaleString()}</td>
              <td className="border border-gray-300 p-2">{entry.tax}</td>
              <td className="border border-gray-300 p-2">{entry.summary1}</td>
              <td className="border border-gray-300 p-2">{entry.summary2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LedgerComponent;
```