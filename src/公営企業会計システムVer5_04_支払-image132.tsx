import React from 'react';

type PaymentDetail = {
  department: string;
  detail: string;
  tax: string;
  decisionAmount: number;
  taxAmount: number;
  totalAmount: number;
};

type PaymentDetailsProps = {
  fiscalYear: number;
  number: number;
  paymentDate: string;
  paymentMethod: string;
  payee: string;
  accountType: string;
  bank: string;
  accountNumber: string;
  branch: string;
  accountHolder: string;
  decisionAmount: number;
  baseAmount: number;
  taxAmount: number;
  details: PaymentDetail[];
  onCancel: () => void;
};

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  fiscalYear,
  number,
  paymentDate,
  paymentMethod,
  payee,
  accountType,
  bank,
  accountNumber,
  branch,
  accountHolder,
  decisionAmount,
  baseAmount,
  taxAmount,
  details,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="border-b pb-2 mb-4">
        <h1 className="text-lg font-bold">支払決定（決裁差異明細）</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>{`年度: 平成${fiscalYear}年度 番号: ${number}`}</p>
            <p>{`支払日: ${paymentDate}`}</p>
            <p>{`支払方法: ${paymentMethod}`}</p>
            <p>{`支払先: ${payee}`}</p>
          </div>
          <div className="border p-2">
            <h2 className="font-semibold">口座振込情報</h2>
            <p>{`預金種目: ${accountType}`}</p>
            <p>{`銀行名: ${bank}`}</p>
            <p>{`口座番号: ${accountNumber}`}</p>
            <p>{`支店名: ${branch}`}</p>
            <p>{`名義人: ${accountHolder}`}</p>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <div>
            <p>{`決定額: ${decisionAmount.toLocaleString()}円`}</p>
            <p>{`本体額: ${baseAmount.toLocaleString()}円`}</p>
            <p>{`消費税額: ${taxAmount.toLocaleString()}円`}</p>
          </div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">支出節</th>
            <th className="border px-2 py-1">支出細節</th>
            <th className="border px-2 py-1">支出明細</th>
            <th className="border px-2 py-1">税</th>
            <th className="border px-2 py-1">決定額</th>
            <th className="border px-2 py-1">消費税額</th>
            <th className="border px-2 py-1">税抜金額</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-2 py-1">{detail.department}</td>
              <td className="border px-2 py-1">{detail.detail}</td>
              <td className="border px-2 py-1">{detail.detail}</td>
              <td className="border px-2 py-1">{detail.tax}</td>
              <td className="border px-2 py-1 text-right">{detail.decisionAmount.toLocaleString()}</td>
              <td className="border px-2 py-1 text-right">{detail.taxAmount.toLocaleString()}</td>
              <td className="border px-2 py-1 text-right">{detail.totalAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        <button onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
```