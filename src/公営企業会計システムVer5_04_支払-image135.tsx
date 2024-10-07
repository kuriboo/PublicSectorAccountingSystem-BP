import React from 'react';

// Props type definition
type PaymentEntryProps = {
  decisionNo: string;
  payee: string;
  description: string;
  amount: number;
};

// Component for displaying each payment entry
const PaymentEntry: React.FC<PaymentEntryProps> = ({ decisionNo, payee, description, amount }) => (
  <tr className="border-b">
    <td className="px-4 py-2">{decisionNo}</td>
    <td className="px-4 py-2">{payee}</td>
    <td className="px-4 py-2">{description}</td>
    <td className="px-4 py-2 text-right">{amount.toLocaleString()}</td>
  </tr>
);

// Main component props
type PaymentTableProps = {
  entries: PaymentEntryProps[];
};

// Main component
const PaymentTable: React.FC<PaymentTableProps> = ({ entries }) => (
  <div className="p-4 bg-white rounded shadow-md">
    <h1 className="text-xl font-bold mb-4">支払確定解除入力</h1>
    <div className="flex justify-between mb-4">
      <span className="font-semibold">起案所属:</span>
      <button className="bg-gray-200 rounded px-2 py-1">所属</button>
    </div>
    <table className="min-w-full border">
      <thead>
        <tr className="bg-blue-500 text-white">
          <th className="px-4 py-2">決定番号</th>
          <th className="px-4 py-2">支払先</th>
          <th className="px-4 py-2">摘要</th>
          <th className="px-4 py-2">決定額</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <PaymentEntry key={index} {...entry} />
        ))}
      </tbody>
    </table>
    <div className="flex justify-end mt-4">
      <button className="bg-blue-500 text-white rounded px-4 py-2 mx-2">OK</button>
      <button className="bg-gray-200 rounded px-4 py-2 mx-2">クリア</button>
      <button className="bg-gray-200 rounded px-4 py-2 mx-2">終了</button>
    </div>
  </div>
);

export default PaymentTable;
