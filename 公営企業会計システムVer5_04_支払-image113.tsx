```tsx
import React from 'react';

interface PaymentRecord {
  id: number;
  revision: number;
  status: string;
  recipient: string;
  description: string;
  decisionAmount: number;
  paymentConfirmationDate: string;
  processingYearMonth: string;
  checked: boolean;
}

interface PaymentTableProps {
  records: PaymentRecord[];
  onToggleCheck: (id: number) => void;
}

const PaymentTable: React.FC<PaymentTableProps> = ({ records, onToggleCheck }) => {
  return (
    <div className="rounded-lg bg-white shadow-md p-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 py-2 text-left">チェック</th>
            <th className="border-b-2 py-2 text-left">決定番号</th>
            <th className="border-b-2 py-2 text-left">訂正回数</th>
            <th className="border-b-2 py-2 text-left">決裁</th>
            <th className="border-b-2 py-2 text-left">受渡し</th>
            <th className="border-b-2 py-2 text-left">支払先</th>
            <th className="border-b-2 py-2 text-left">摘要</th>
            <th className="border-b-2 py-2 text-left">決定額</th>
            <th className="border-b-2 py-2 text-left">支払確定日</th>
            <th className="border-b-2 py-2 text-left">処理年月日</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id} className="hover:bg-gray-100">
              <td className="border-b py-2">
                <input
                  type="checkbox"
                  checked={record.checked}
                  onChange={() => onToggleCheck(record.id)}
                />
              </td>
              <td className="border-b py-2">{record.id}</td>
              <td className="border-b py-2">{record.revision}</td>
              <td className="border-b py-2">{record.status}</td>
              <td className="border-b py-2">{record.recipient}</td>
              <td className="border-b py-2">{record.description}</td>
              <td className="border-b py-2">{record.decisionAmount.toLocaleString()}</td>
              <td className="border-b py-2">{record.paymentConfirmationDate}</td>
              <td className="border-b py-2">{record.processingYearMonth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
```