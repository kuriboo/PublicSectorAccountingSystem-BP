import React from 'react';

type Entry = {
  type: string;
  source: string;
  date: string;
  number: number;
  detail: string;
  debitAccount: string;
  creditAccount: string;
  amount: number;
  tax: number;
  summary1: string;
  summary2?: string;
};

type EntryTableProps = {
  entries: Entry[];
};

const EntryTable: React.FC<EntryTableProps> = ({ entries }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-200">
            <th className="px-4 py-2 border border-gray-300">種別</th>
            <th className="px-4 py-2 border border-gray-300">発生源</th>
            <th className="px-4 py-2 border border-gray-300">伝票日付</th>
            <th className="px-4 py-2 border border-gray-300">番号</th>
            <th className="px-4 py-2 border border-gray-300">明細</th>
            <th className="px-4 py-2 border border-gray-300">借方科目</th>
            <th className="px-4 py-2 border border-gray-300">貸方科目</th>
            <th className="px-4 py-2 border border-gray-300">本体金額</th>
            <th className="px-4 py-2 border border-gray-300">税額</th>
            <th className="px-4 py-2 border border-gray-300">摘要1</th>
            <th className="px-4 py-2 border border-gray-300">摘要2</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="bg-white even:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">{entry.type}</td>
              <td className="px-4 py-2 border border-gray-300">{entry.source}</td>
              <td className="px-4 py-2 border border-gray-300">{entry.date}</td>
              <td className="px-4 py-2 border border-gray-300">{entry.number}</td>
              <td className="px-4 py-2 border border-gray-300">{entry.detail}</td>
              <td className="px-4 py-2 border border-gray-300">{entry.debitAccount}</td>
              <td className="px-4 py-2 border border-gray-300">{entry.creditAccount}</td>
              <td className="px-4 py-2 border border-gray-300">{entry.amount.toLocaleString()}</td>
              <td className="px-4 py-2 border border-gray-300">{entry.tax.toLocaleString()}</td>
              <td className="px-4 py-2 border border-gray-300">{entry.summary1}</td>
              <td className="px-4 py-2 border border-gray-300">{entry.summary2 || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntryTable;
