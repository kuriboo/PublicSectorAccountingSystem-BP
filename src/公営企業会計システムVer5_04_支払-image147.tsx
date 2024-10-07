import React from 'react';

// TypeScript interface for component props
interface PaymentDetailsProps {
  decisionDate: string;
  paymentDate: string;
  invoiceDate: string;
  summary: string;
  contractor: string;
  payee: string;
  paymentMethod: string;
  decisionAmount: number;
  subtotal: number;
  tax: number;
  onCancel: () => void;
}

// Functional component using React and Tailwind CSS
const PaymentDetailsComponent: React.FC<PaymentDetailsProps> = ({
  decisionDate,
  paymentDate,
  invoiceDate,
  summary,
  contractor,
  payee,
  paymentMethod,
  decisionAmount,
  subtotal,
  tax,
  onCancel
}) => {
  return (
    <div className="p-4 border rounded-lg max-w-3xl">
      <h1 className="text-xl font-bold mb-4">支払内容照会</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>決定処理日: {decisionDate}</p>
          <p>支払日: {paymentDate}</p>
          <p>請求書日: {invoiceDate}</p>
        </div>
        <div>
          <p>摘要: {summary}</p>
        </div>
        <div className="col-span-2">
          <p>契約先: {contractor}</p>
          <p>支払先: {payee}</p>
          <p>支払方法: {paymentMethod}</p>
        </div>
        <div className="col-span-2 border-t pt-4">
          <table className="w-full table-fixed">
            <thead>
              <tr>
                <th className="w-1/3">合計決定額</th>
                <th className="w-1/3">合計本体額</th>
                <th className="w-1/3">合計消費税額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">{decisionAmount}</td>
                <td className="text-center">{subtotal}</td>
                <td className="text-center">{tax}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button
        className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={onCancel}
      >
        キャンセル
      </button>
    </div>
  );
};

export default PaymentDetailsComponent;
```