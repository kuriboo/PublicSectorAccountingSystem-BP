import React from 'react';

type RecordType = {
  date: string;
  category: string;
  number: number;
  estimatedAmount?: number;
  responsibleAmount?: number;
  previousPayment?: number;
  paymentAmount?: number;
  outstandingAmount?: number;
  summary: string;
};

type PaymentHistoryProps = {
  records: RecordType[];
};

const PaymentHistory: React.FC<PaymentHistoryProps> = ({ records }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <header className="mb-4">
        <h1 className="text-lg font-bold">支出履歴</h1>
        <button className="px-2 py-1 bg-gray-200 text-gray-800 rounded">再発行</button>
        <button className="ml-2 px-2 py-1 bg-gray-200 text-gray-800 rounded">キャンセル</button>
      </header>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border p-1">起案日</th>
            <th className="border p-1">種別</th>
            <th className="border p-1">伝票No</th>
            <th className="border p-1">予定額</th>
            <th className="border p-1">負担額</th>
            <th className="border p-1">前払金額</th>
            <th className="border p-1">支出金額</th>
            <th className="border p-1">負担未執行額</th>
            <th className="border p-1">摘要</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="text-center">
              <td className="border p-1">{record.date}</td>
              <td className="border p-1">{record.category}</td>
              <td className="border p-1">{record.number}</td>
              <td className="border p-1">{record.estimatedAmount ?? '-'}</td>
              <td className="border p-1">{record.responsibleAmount ?? '-'}</td>
              <td className="border p-1">{record.previousPayment ?? '-'}</td>
              <td className="border p-1">{record.paymentAmount ?? '-'}</td>
              <td className="border p-1">{record.outstandingAmount ?? '-'}</td>
              <td className="border p-1">{record.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
