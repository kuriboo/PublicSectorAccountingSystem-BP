import React from 'react';

type PaymentEntry = {
  decisionNumber: number;
  correctionCount: number;
  amount: number;
  paymentDateConfirmed: string;
  processingDate: string;
  description: string;
};

type PaymentProps = {
  title: string;
  entries: PaymentEntry[];
  totalAmount: number;
  className?: string;
};

const PaymentComponent: React.FC<PaymentProps> = ({
  title,
  entries,
  totalAmount,
  className = '',
}) => {
  return (
    <div className={`bg-gray-100 p-4 ${className}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <table className="min-w-full mt-4 bg-white border">
        <thead>
          <tr>
            <th className="border px-2 py-1">決定番号</th>
            <th className="border px-2 py-1">訂正回数</th>
            <th className="border px-2 py-1">決裁金額</th>
            <th className="border px-2 py-1">支払確定日</th>
            <th className="border px-2 py-1">処理年月日</th>
            <th className="border px-2 py-1">摘要</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{entry.decisionNumber}</td>
              <td className="border px-2 py-1">{entry.correctionCount}</td>
              <td className="border px-2 py-1">{entry.amount.toLocaleString()}</td>
              <td className="border px-2 py-1">{entry.paymentDateConfirmed}</td>
              <td className="border px-2 py-1">{entry.processingDate}</td>
              <td className="border px-2 py-1">{entry.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-2">
        <span className="font-bold">決定額合計: </span>
        <span>{totalAmount.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default PaymentComponent;
