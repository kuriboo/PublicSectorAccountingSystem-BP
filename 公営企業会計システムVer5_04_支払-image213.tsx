```tsx
// Import necessary libraries
import React from 'react';

// Define the type for the data to be displayed in the table
type Record = {
  date: string;
  type: string;
  slipNumber: number;
  confirmationAmount: string;
  collectedAmount: string;
  uncollectedAmount: number;
  refundedAmount: string;
  description: string;
};

// Define the type for the component properties
type RecordTableProps = {
  records: Record[];
};

// Functional component definition
const RecordTable: React.FC<RecordTableProps> = ({ records }) => {
  return (
    <div className="p-4 max-w-2xl mx-auto bg-white shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">個別調定・収納履歴</h2>
      <div className="mb-4">
        <span className="font-semibold">令和05 年度</span> 伝票番号 <span className="font-semibold">27</span>
      </div>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border p-2">起案日</th>
            <th className="border p-2">種別</th>
            <th className="border p-2">伝票No</th>
            <th className="border p-2">調定金額</th>
            <th className="border p-2">収納金額</th>
            <th className="border p-2">未収金額</th>
            <th className="border p-2">戻出金額</th>
            <th className="border p-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{record.date}</td>
              <td className="border p-2">{record.type}</td>
              <td className="border p-2">{record.slipNumber}</td>
              <td className="border p-2">{record.confirmationAmount}</td>
              <td className="border p-2">{record.collectedAmount}</td>
              <td className="border p-2">{record.uncollectedAmount}</td>
              <td className="border p-2">{record.refundedAmount}</td>
              <td className="border p-2">{record.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-300 rounded shadow">詳細</button>
        <button className="px-4 py-2 bg-gray-300 rounded shadow">再発行</button>
        <button className="px-4 py-2 bg-gray-300 rounded shadow">キャンセル</button>
      </div>
    </div>
  );
};

export default RecordTable;
```