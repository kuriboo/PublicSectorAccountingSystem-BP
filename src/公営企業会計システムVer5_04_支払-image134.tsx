import React from 'react';

// Props interface
interface PaymentDetailProps {
  fiscalYear: number;
  number: number;
  paymentDate: string;
  paymentMethod: string;
  recipient: string;
  depositType: string;
  bankName: string;
  accountNumber: string;
  branchName: string;
  accountHolder: string;
  decisionAmount: number;
  principalAmount: number;
  taxAmount: number;
  sections: {
    section: string;
    detail: string;
    explanation: string;
    tax: string;
    decisionAmount: number;
    taxAmount: number;
    taxIncludedAmount: number;
  }[];
  onCancel: () => void;
}

// PaymentDetail Component
const PaymentDetail: React.FC<PaymentDetailProps> = ({
  fiscalYear,
  number,
  paymentDate,
  paymentMethod,
  recipient,
  depositType,
  bankName,
  accountNumber,
  branchName,
  accountHolder,
  decisionAmount,
  principalAmount,
  taxAmount,
  sections,
  onCancel,
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold">支出決定</h2>
        <p>平成{fiscalYear}年度 番号 {number}</p>
        <p>支払日: {paymentDate}</p>
        <p>支払方法: {paymentMethod}</p>
        <p>支払先: {recipient}</p>
      </div>

      <div className="mb-4 border p-4">
        <h3 className="text-lg font-semibold">口座振込情報</h3>
        <p>預金種別: {depositType}</p>
        <p>銀行名: {bankName}</p>
        <p>口座番号: {accountNumber}</p>
        <p>支店名: {branchName}</p>
        <p>名義人: {accountHolder}</p>
        <div className="text-right">
          <p>決定額: {decisionAmount.toLocaleString()}</p>
          <p>本体額: {principalAmount.toLocaleString()}</p>
          <p>消費税額: {taxAmount.toLocaleString()}</p>
        </div>
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="border p-2">支出節</th>
            <th className="border p-2">支出細節</th>
            <th className="border p-2">支出明細</th>
            <th className="border p-2">税</th>
            <th className="border p-2">決定額</th>
            <th className="border p-2">消費税額</th>
            <th className="border p-2">税抜金額</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section, index) => (
            <tr key={index} className="border-b">
              <td className="border p-2">{section.section}</td>
              <td className="border p-2">{section.detail}</td>
              <td className="border p-2">{section.explanation}</td>
              <td className="border p-2">{section.tax}</td>
              <td className="border p-2">{section.decisionAmount.toLocaleString()}</td>
              <td className="border p-2">{section.taxAmount.toLocaleString()}</td>
              <td className="border p-2">{section.taxIncludedAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={onCancel}
        className="mt-4 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
      >
        キャンセル
      </button>
    </div>
  );
};

export default PaymentDetail;
```