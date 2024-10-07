import React from 'react';

type PaymentDetail = {
  id: number;
  revisionCount: number;
  status: string;
  reception: string;
  office: string;
  description: string;
  paymentAmount: number;
  paymentConfirmDate: string;
  processingDate: string;
};

type PaymentFormProps = {
  paymentDetails: PaymentDetail[];
  onDetailChange: (id: number) => void;
};

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentDetails, onDetailChange }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">出納受渡入力（バーコード）</h1>
      <table className="w-full table-auto border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">決定番号</th>
            <th className="border px-4 py-2">訂正回数</th>
            <th className="border px-4 py-2">決裁</th>
            <th className="border px-4 py-2">受渡</th>
            <th className="border px-4 py-2">支払先</th>
            <th className="border px-4 py-2">摘要</th>
            <th className="border px-4 py-2">決定額</th>
            <th className="border px-4 py-2">支払確定日</th>
            <th className="border px-4 py-2">処理年月日</th>
          </tr>
        </thead>
        <tbody>
          {paymentDetails.map((detail) => (
            <tr key={detail.id} className="bg-white hover:bg-gray-100 cursor-pointer" onClick={() => onDetailChange(detail.id)}>
              <td className="border px-4 py-2 text-center">{detail.id}</td>
              <td className="border px-4 py-2 text-center">{detail.revisionCount}</td>
              <td className="border px-4 py-2 text-center">{detail.status}</td>
              <td className="border px-4 py-2 text-center">{detail.reception}</td>
              <td className="border px-4 py-2">{detail.office}</td>
              <td className="border px-4 py-2">{detail.description}</td>
              <td className="border px-4 py-2 text-right">{detail.paymentAmount.toLocaleString()}</td>
              <td className="border px-4 py-2 text-center">{detail.paymentConfirmDate}</td>
              <td className="border px-4 py-2 text-center">{detail.processingDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentForm;
```