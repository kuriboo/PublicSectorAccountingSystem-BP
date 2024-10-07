import React from 'react';
import 'tailwindcss/tailwind.css';

// TypeScriptの型定義
type PaymentDetailProps = {
  fiscalYear: string;
  number: number;
  paymentDate: string;
  paymentMethod: string;
  payer: string;
  transferDetails: {
    accountType: string;
    bankName: string;
    branchName: string;
    accountNumber: string;
    accountHolder: string;
  };
  totalAmount: number;
  baseAmount: number;
  taxAmount: number;
  items: {
    section: string;
    detail: string;
    description: string;
    taxType: string;
    decisionAmount: number;
    taxExcludedAmount: number;
  }[];
};

// Next.js + TypeScriptコンポーネント
const PaymentDetail: React.FC<PaymentDetailProps> = ({
  fiscalYear,
  number,
  paymentDate,
  paymentMethod,
  payer,
  transferDetails,
  totalAmount,
  baseAmount,
  taxAmount,
  items,
}) => {
  return (
    <div className="max-w-4xl mx-auto my-4 p-4 border">
      <h1 className="text-xl font-bold mb-2">支払決定</h1>
      <div className="mb-4">
        <div className="flex justify-between">
          <div>平成{fiscalYear}年度</div>
          <div>番号 {number}</div>
        </div>
        <div>支払日 {paymentDate}</div>
        <div>支払方法 {paymentMethod}</div>
        <div>支払先 {payer}</div>
      </div>
      <div className="mb-4 border-t pt-2">
        <h2 className="font-semibold">口座振込情報</h2>
        <div>預金種別 {transferDetails.accountType}</div>
        <div>銀行名 {transferDetails.bankName}</div>
        <div>支店名 {transferDetails.branchName}</div>
        <div>口座番号 {transferDetails.accountNumber}</div>
        <div>名義人 {transferDetails.accountHolder}</div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between">
          <div>決定額 {totalAmount.toLocaleString()}</div>
          <div>本体額 {baseAmount.toLocaleString()}</div>
          <div>消費税額 {taxAmount.toLocaleString()}</div>
        </div>
      </div>
      <table className="w-full table-auto mt-4">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th>支出節</th>
            <th>支出細節</th>
            <th>支出明細</th>
            <th>税</th>
            <th>決定額</th>
            <th>税抜金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-t">
              <td>{item.section}</td>
              <td>{item.detail}</td>
              <td>{item.description}</td>
              <td>{item.taxType}</td>
              <td>{item.decisionAmount.toLocaleString()}</td>
              <td>{item.taxExcludedAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentDetail;
