import React from 'react';

// Type definitions for component props
type PaymentDetailsProps = {
  year: string;
  number: string;
  paymentDate: string;
  paymentMethod: string;
  paymentDestination: string;
  approvalAmount: number;
  mainAmount: number;
  taxAmount: number;
  bankInfo: BankInfo;
  paymentItems: PaymentItem[];
};

type BankInfo = {
  accountType: string;
  bankName: string;
  branchName: string;
  accountNumber: string;
  accountHolder: string;
};

type PaymentItem = {
  expenditureSection: string;
  expenditureDetail: string;
  expenditureDescription: string;
  taxType: string;
  decisionAmount: number;
  consumptionTaxAmount: number;
  totalAmount: number;
};

// Reusable component
const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  year,
  number,
  paymentDate,
  paymentMethod,
  paymentDestination,
  approvalAmount,
  mainAmount,
  taxAmount,
  bankInfo,
  paymentItems,
}) => {
  return (
    <div className="p-4 bg-white shadow rounded">
      {/* Header Information */}
      <div className="mb-4 border-b-2 pb-2">
        <h2 className="text-lg font-bold">支出決定</h2>
        <div>
          <span>年度: {year}</span> <span>番号: {number}</span>
        </div>
        <div>支払日: {paymentDate}</div>
        <div>支払方法: {paymentMethod}</div>
        <div>支払先: {paymentDestination}</div>
      </div>

      {/* Bank Information */}
      <div className="mb-4 border-b-2 pb-2">
        <h3 className="text-md font-bold">口座振込情報</h3>
        <div>預金種別: {bankInfo.accountType}</div>
        <div>銀行名: {bankInfo.bankName}</div>
        <div>支店名: {bankInfo.branchName}</div>
        <div>口座番号: {bankInfo.accountNumber}</div>
        <div>名義人: {bankInfo.accountHolder}</div>
      </div>

      {/* Amount Information */}
      <div className="mb-4">
        <div>決定額: {approvalAmount.toLocaleString()}</div>
        <div>本体額: {mainAmount.toLocaleString()}</div>
        <div>消費税額: {taxAmount.toLocaleString()}</div>
      </div>

      {/* Payment Items Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
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
          {paymentItems.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{item.expenditureSection}</td>
              <td className="border p-2">{item.expenditureDetail}</td>
              <td className="border p-2">{item.expenditureDescription}</td>
              <td className="border p-2">{item.taxType}</td>
              <td className="border p-2">{item.decisionAmount.toLocaleString()}</td>
              <td className="border p-2">{item.consumptionTaxAmount.toLocaleString()}</td>
              <td className="border p-2">{item.totalAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer (e.g., Cancel Button) */}
      <div className="mt-4">
        <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-200">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
