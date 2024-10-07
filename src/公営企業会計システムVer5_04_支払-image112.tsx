import React from 'react';

type PaymentDetailProps = {
  fiscalYear: string;
  number: string;
  paymentDate: string;
  paymentMethod: string;
  beneficiary: string;
  accountType: string;
  bankName: string;
  branchName: string;
  accountNumber: string;
  accountHolder: string;
  decisionAmount: number;
  baseAmount: number;
  taxAmount: number;
  entries: {
    category: string;
    subCategory: string;
    details: string;
    taxType: string;
    decisionAmount: number;
    taxAmount: number;
    totalAmount: number;
  }[];
};

const PaymentDetail: React.FC<PaymentDetailProps> = ({
  fiscalYear,
  number,
  paymentDate,
  paymentMethod,
  beneficiary,
  accountType,
  bankName,
  branchName,
  accountNumber,
  accountHolder,
  decisionAmount,
  baseAmount,
  taxAmount,
  entries,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md text-sm">
      {/* Header Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">支出決定</h2>
        <div className="flex justify-between">
          <div>
            <p>平成{fiscalYear}年度</p>
            <p>番号 {number}</p>
          </div>
          <div>
            <p>支払日: {paymentDate}</p>
            <p>支払方法: {paymentMethod}</p>
            <p>支払先: {beneficiary}</p>
          </div>
        </div>
      </div>

      {/* Account Information Section */}
      <div className="mb-4 border p-2">
        <h3 className="font-semibold">口座振込情報</h3>
        <p>預金種類: {accountType}</p>
        <p>銀行名: {bankName}</p>
        <p>支店名: {branchName}</p>
        <p>口座番号: {accountNumber}</p>
        <p>名義人: {accountHolder}</p>
      </div>

      {/* Amount Information */}
      <div className="flex justify-end mb-4">
        <div>
          <p>決定額: {decisionAmount.toLocaleString()}</p>
          <p>本体額: {baseAmount.toLocaleString()}</p>
          <p>消費税額: {taxAmount.toLocaleString()}</p>
        </div>
      </div>

      {/* Entries Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
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
          {entries.map((entry, index) => (
            <tr key={index} className="border-b">
              <td className="border p-2">{entry.category}</td>
              <td className="border p-2">{entry.subCategory}</td>
              <td className="border p-2">{entry.details}</td>
              <td className="border p-2">{entry.taxType}</td>
              <td className="border p-2">{entry.decisionAmount.toLocaleString()}</td>
              <td className="border p-2">{entry.taxAmount.toLocaleString()}</td>
              <td className="border p-2">{entry.totalAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Buttons */}
      <div className="mt-4 flex justify-end space-x-2">
        <button className="bg-blue-500 text-white py-1 px-4 rounded">OK</button>
        <button className="bg-gray-500 text-white py-1 px-4 rounded">クリア</button>
        <button className="bg-red-500 text-white py-1 px-4 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default PaymentDetail;
```