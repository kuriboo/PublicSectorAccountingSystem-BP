import React from 'react';

// 型定義
type PaymentDetail = {
  id: number;
  receiver: string;
  payer: string;
  description: string;
  decisionAmount: number;
  paymentConfirmedDate: string;
  processingMonthDay: string;
};

// プロパティの型定義
interface PaymentDetailsProps {
  details: PaymentDetail[];
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ details }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">出納受渡入力</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border">決定番号</th>
            <th className="p-2 border">受渡</th>
            <th className="p-2 border">支払先</th>
            <th className="p-2 border">摘要</th>
            <th className="p-2 border">決定額</th>
            <th className="p-2 border">支払確定日</th>
            <th className="p-2 border">処理年月日</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.id}>
              <td className="p-2 border">{detail.id}</td>
              <td className="p-2 border">{detail.receiver}</td>
              <td className="p-2 border">{detail.payer}</td>
              <td className="p-2 border">{detail.description}</td>
              <td className="p-2 border">{detail.decisionAmount.toLocaleString()}</td>
              <td className="p-2 border">{detail.paymentConfirmedDate}</td>
              <td className="p-2 border">{detail.processingMonthDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentDetails;
