```tsx
import React from 'react';

type PaymentMethod = '振込' | 'その他';
type ReceiptStatus = '未' | '済';

interface PaymentEntry {
  decisionNumber: number;
  correctionCount: number;
  decisionStatus: ReceiptStatus;
  recipient: string;
  description: string;
  amount: number;
  confirmationDate: string;
  processingDate: string;
}

interface PaymentTableProps {
  entries: PaymentEntry[];
  scheduledPaymentDate: string;
  paymentMethod: PaymentMethod;
  onShow: () => void;
}

const PaymentTable: React.FC<PaymentTableProps> = ({
  entries,
  scheduledPaymentDate,
  paymentMethod,
  onShow,
}) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-purple-100 p-4 mb-4 rounded">
        <h1 className="text-xl font-bold mb-2">出納受渡入力（バーコード）</h1>
        <div className="mb-2">
          <span>支払予定日: {scheduledPaymentDate}</span>
        </div>
        <div className="mb-4">
          <span>支払方法: {paymentMethod}</span>
        </div>
        <button
          onClick={onShow}
          className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
        >
          表示
        </button>
      </div>
      <table className="w-full border border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">決定番号</th>
            <th className="p-2 border">訂正回数</th>
            <th className="p-2 border">決裁</th>
            <th className="p-2 border">受渡</th>
            <th className="p-2 border">支払先</th>
            <th className="p-2 border">摘要</th>
            <th className="p-2 border">決定額</th>
            <th className="p-2 border">支払確定日</th>
            <th className="p-2 border">処理年月日</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="even:bg-gray-100">
              <td className="p-2 border">{entry.decisionNumber}</td>
              <td className="p-2 border">{entry.correctionCount}</td>
              <td className="p-2 border">{entry.decisionStatus}</td>
              <td className="p-2 border">{entry.recipient}</td>
              <td className="p-2 border">{entry.description}</td>
              <td className="p-2 border text-right">{entry.amount.toLocaleString()}</td>
              <td className="p-2 border">{entry.confirmationDate}</td>
              <td className="p-2 border">{entry.processingDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
```