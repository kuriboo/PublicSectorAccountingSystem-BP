// Import necessary dependencies
import React from 'react';

// Define the props for the component
type RecordEntryProps = {
  title: string;
  records: Array<{
    type: string;
    source: string;
    date: string;
    number: string;
    detail: string;
    debit: string;
    credit: string;
    amount: number;
    tax: number;
    summary1: string;
    summary2: string;
  }>;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Define the RecordEntry component
const RecordEntry: React.FC<RecordEntryProps> = ({ title, records, onSubmit, onClear, onExit }) => {
  return (
    <div className="p-4 bg-gray-100 border border-gray-200 rounded">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      
      {/* Table for records */}
      <table className="w-full table-fixed border-collapse border border-gray-300 text-center">
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
          {records.map((record, index) => (
            <tr key={index} className="bg-white hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{record.type}</td>
              <td className="border border-gray-300 p-2">{record.source}</td>
              <td className="border border-gray-300 p-2">{record.date}</td>
              <td className="border border-gray-300 p-2">{record.number}</td>
              <td className="border border-gray-300 p-2">{record.detail}</td>
              <td className="border border-gray-300 p-2">{record.debit}</td>
              <td className="border border-gray-300 p-2">{record.credit}</td>
              <td className="border border-gray-300 p-2">{record.amount.toLocaleString()}</td>
              <td className="border border-gray-300 p-2">{record.tax}</td>
              <td className="border border-gray-300 p-2">{record.summary1}</td>
              <td className="border border-gray-300 p-2">{record.summary2}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          終了
        </button>
      </div>
    </div>
  );
};

export default RecordEntry;