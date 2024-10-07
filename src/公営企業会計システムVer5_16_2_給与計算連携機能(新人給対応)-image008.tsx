import React from 'react';

// Type definitions for the props
interface Record {
  status: string;
  year: number;
  number: number;
  paymentDate: string;
  accountYear: number;
  code: number;
  manager: number;
  amount: number;
  deduction: number;
  note: string;
}

interface Props {
  title: string;
  records: Record[];
  onDeleteSelected: () => void;
  onDisplay: () => void;
}

// The main component
const RecordsTable: React.FC<Props> = ({ title, records, onDeleteSelected, onDisplay }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      
      <button onClick={onDeleteSelected} className="bg-red-500 text-white px-4 py-2 rounded mb-4">
        削除
      </button>

      <table className="min-w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">締め処理</th>
            <th className="border p-2">決定年度</th>
            <th className="border p-2">決定番号</th>
            <th className="border p-2">支給日</th>
            <th className="border p-2">会計年度</th>
            <th className="border p-2">目コード</th>
            <th className="border p-2">管理区分</th>
            <th className="border p-2">支給額</th>
            <th className="border p-2">控除額</th>
            <th className="border p-2">備考</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{record.status}</td>
              <td className="border p-2">{record.year}</td>
              <td className="border p-2">{record.number}</td>
              <td className="border p-2">{record.paymentDate}</td>
              <td className="border p-2">{record.accountYear}</td>
              <td className="border p-2">{record.code}</td>
              <td className="border p-2">{record.manager}</td>
              <td className="border p-2">{record.amount}</td>
              <td className="border p-2">{record.deduction}</td>
              <td className="border p-2">{record.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={onDisplay} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        表示
      </button>
    </div>
  );
};

export default RecordsTable;
