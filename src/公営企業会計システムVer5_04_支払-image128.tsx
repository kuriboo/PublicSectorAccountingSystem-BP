import React from 'react';

// TypeScript types for props
type PaymentStatementProps = {
  fiscalYear: string;
  number: number;
  paymentDate: string;
  paymentMethod: string;
  recipient: string;
  accountType: string;
  bankName: string;
  accountNumber: string;
  branchName: string;
  representative: string;
  decisionAmount: number;
  baseAmount: number;
  taxAmount: number;
};

// Reusable Next.js + TypeScript component
const PaymentStatement: React.FC<PaymentStatementProps> = ({
  fiscalYear,
  number,
  paymentDate,
  paymentMethod,
  recipient,
  accountType,
  bankName,
  accountNumber,
  branchName,
  representative,
  decisionAmount,
  baseAmount,
  taxAmount
}) => {
  return (
    <div className="p-4 shadow-lg bg-gray-100">
      <div className="flex justify-between border-b-2 border-gray-400 mb-2 pb-2">
        <div>
          <h2 className="font-bold">支出決定</h2>
          <p>{fiscalYear} 年度 番号 {number}</p>
        </div>
        <div>
          <p className="text-gray-800">支払日: {paymentDate}</p>
          <p>支払方法: {paymentMethod}</p>
          <p>支払先: {recipient}</p>
        </div>
      </div>

      <div className="border-b-2 border-gray-400 mb-2 pb-2">
        <h3 className="font-bold">口座振込情報</h3>
        <div className="grid grid-cols-2">
          <div>
            <p>預金種別: {accountType}</p>
            <p>口座番号: {accountNumber}</p>
            <p>名義人: {representative}</p>
          </div>
          <div>
            <p>銀行名: {bankName}</p>
            <p>支店名: {branchName}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 text-right">
        <div>
          <p className="font-bold">決定額</p>
          <p>{decisionAmount}</p>
        </div>
        <div>
          <p className="font-bold">本体額</p>
          <p>{baseAmount}</p>
        </div>
        <div>
          <p className="font-bold">消費税額</p>
          <p>{taxAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatement;
