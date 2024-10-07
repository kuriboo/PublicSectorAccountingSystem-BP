// Import necessary modules and components
import React from 'react';

// Define types for the props
type LedgerEntry = {
  type: string;
  source: string;
  date: string;
  number: string;
  detail: string;
  debitItem: string;
  creditItem: string;
  amount: number;
  tax: number;
  details1: string;
  details2: string;
};

type LedgerProps = {
  title: string;
  fiscalYear: string;
  entries: LedgerEntry[];
};

// Define the Ledger component
const Ledger: React.FC<LedgerProps> = ({ title, fiscalYear, entries }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <div className="text-xl font-bold mb-2">{title}</div>
      <div className="mb-4">年度: {fiscalYear}</div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">種別</th>
            <th className="py-2">発生源</th>
            <th className="py-2">伝票日付</th>
            <th className="py-2">番号</th>
            <th className="py-2">明細</th>
            <th className="py-2">借方科目</th>
            <th className="py-2">貸方科目</th>
            <th className="py-2">金額</th>
            <th className="py-2">税額</th>
            <th className="py-2">摘要1</th>
            <th className="py-2">摘要2</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{entry.type}</td>
              <td className="border px-4 py-2">{entry.source}</td>
              <td className="border px-4 py-2">{entry.date}</td>
              <td className="border px-4 py-2">{entry.number}</td>
              <td className="border px-4 py-2">{entry.detail}</td>
              <td className="border px-4 py-2">{entry.debitItem}</td>
              <td className="border px-4 py-2">{entry.creditItem}</td>
              <td className="border px-4 py-2">{entry.amount.toLocaleString()}</td>
              <td className="border px-4 py-2">{entry.tax}</td>
              <td className="border px-4 py-2">{entry.details1}</td>
              <td className="border px-4 py-2">{entry.details2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Export the component for use in other parts of the application
export default Ledger;
