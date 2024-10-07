import React from 'react';

// TypeScript type definitions
interface PaymentEntryProps {
  fiscalYear: string;
  decisionNumber: string;
  paymentRecipient: string;
  paymentAmount: number;
  breakdowns: Breakdown[];
}

interface Breakdown {
  id: number;
  recipient: string;
  amount: number;
  bankName: string;
  branchName: string;
  accountType: string;
  accountNumber: string;
}

// Tailwind CSS styles are used for styling
const PaymentEntry: React.FC<PaymentEntryProps> = ({
  fiscalYear,
  decisionNumber,
  paymentRecipient,
  paymentAmount,
  breakdowns,
}) => {
  return (
    <div className="p-4 bg-gray-100 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">支払先分割入力</h2>
      <div className="mb-4">
        <div>年度: {fiscalYear}</div>
        <div>決定番号: {decisionNumber}</div>
        <div>支払先: {paymentRecipient}</div>
        <div>支払予定日: 平成29年08月06日</div>
        <div>支払金額: {paymentAmount.toLocaleString()}</div>
      </div>

      <table className="min-w-full bg-white">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left">番号</th>
            <th className="px-6 py-3 text-left">分割支払先</th>
            <th className="px-6 py-3 text-left">支払先コード</th>
            <th className="px-6 py-3 text-left">銀行名</th>
            <th className="px-6 py-3 text-left">支店名</th>
            <th className="px-6 py-3 text-left">預金種別</th>
          </tr>
        </thead>
        <tbody>
          {breakdowns.map((breakdown) => (
            <tr key={breakdown.id} className="border-b">
              <td className="px-6 py-4">{breakdown.id}</td>
              <td className="px-6 py-4">{breakdown.recipient}</td>
              <td className="px-6 py-4">{breakdown.amount.toLocaleString()}</td>
              <td className="px-6 py-4">{breakdown.bankName}</td>
              <td className="px-6 py-4">{breakdown.branchName}</td>
              <td className="px-6 py-4">{breakdown.accountType}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">OK</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded mr-2">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default PaymentEntry;
```