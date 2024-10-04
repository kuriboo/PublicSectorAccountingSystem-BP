```tsx
// Import necessary modules
import React, { FC } from 'react';

// Define types for props
interface Props {
  title: string;
  dateRange: string;
  receiptNumber: string;
  entries: {
    type: string;
    source: string;
    date: string;
    number: string;
    details: string;
    debit: string;
    credit: string;
    amount: string;
    tax: string;
    remark1: string;
    remark2: string;
  }[];
}

// Create a reusable component with customizable props
const AccountingEntryForm: FC<Props> = ({
  title,
  dateRange,
  receiptNumber,
  entries,
}) => {
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4">{title}</h1>

      {/* Search Section */}
      <div className="flex items-center mb-4">
        <span className="mr-2">伝票日付:</span>
        <span className="border p-1 rounded mr-4">{dateRange}</span>
        <span className="mr-2">伝票番号:</span>
        <span className="border p-1 rounded">{receiptNumber}</span>
      </div>

      {/* Entries Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">種別</th>
            <th className="border p-2">発生源</th>
            <th className="border p-2">伝票日付</th>
            <th className="border p-2">番号</th>
            <th className="border p-2">明細</th>
            <th className="border p-2">借方科目</th>
            <th className="border p-2">貸方科目</th>
            <th className="border p-2">本体金額</th>
            <th className="border p-2">税額</th>
            <th className="border p-2">摘要1</th>
            <th className="border p-2">摘要2</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr className="text-center" key={index}>
              <td className="border p-2">{entry.type}</td>
              <td className="border p-2">{entry.source}</td>
              <td className="border p-2">{entry.date}</td>
              <td className="border p-2">{entry.number}</td>
              <td className="border p-2">{entry.details}</td>
              <td className="border p-2">{entry.debit}</td>
              <td className="border p-2">{entry.credit}</td>
              <td className="border p-2">{entry.amount}</td>
              <td className="border p-2">{entry.tax}</td>
              <td className="border p-2">{entry.remark1}</td>
              <td className="border p-2">{entry.remark2}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default AccountingEntryForm;
```