import React from 'react';

// 型定義
interface PaymentDetailsProps {
  fiscalYear: string;
  number: number;
  paymentDate: string;
  paymentMethod: string;
  paymentDestination: string;
  bankDetails: {
    accountType: string;
    bankName: string;
    branchName: string;
    accountNumber: string;
    accountHolder: string;
  };
  amounts: {
    totalAmount: number;
    principalAmount: number;
    taxAmount: number;
  };
  items: Array<{
    category: string;
    subCategory: string;
    description: string;
    taxType: string;
    decisionAmount: number;
    consumptionTax: number;
    totalTaxIncluded: number;
  }>;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  fiscalYear,
  number,
  paymentDate,
  paymentMethod,
  paymentDestination,
  bankDetails,
  amounts,
  items,
}) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <div className="mb-4">
        <h2 className="text-lg font-bold">支出決定</h2>
        <div className="text-sm">
          <div>年度: {fiscalYear}</div>
          <div>番号: {number}</div>
          <div>支払日: {paymentDate}</div>
          <div>支払方法: {paymentMethod}</div>
          <div>支払先: {paymentDestination}</div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-md font-bold">口座振込情報</h3>
        <div className="text-sm">
          <div>預金種別: {bankDetails.accountType}</div>
          <div>銀行名: {bankDetails.bankName}</div>
          <div>支店名: {bankDetails.branchName}</div>
          <div>口座番号: {bankDetails.accountNumber}</div>
          <div>名義人: {bankDetails.accountHolder}</div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-md font-bold">金額</h3>
        <div className="text-sm">
          <div>決定額: {amounts.totalAmount.toLocaleString()}円</div>
          <div>本体額: {amounts.principalAmount.toLocaleString()}円</div>
          <div>消費税額: {amounts.taxAmount.toLocaleString()}円</div>
        </div>
      </div>
      <div>
        <h3 className="text-md font-bold">支出明細</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">支出部</th>
              <th className="px-4 py-2">支出細節</th>
              <th className="px-4 py-2">支出明細</th>
              <th className="px-4 py-2">税</th>
              <th className="px-4 py-2">決定額</th>
              <th className="px-4 py-2">消費税額</th>
              <th className="px-4 py-2">税抜金額</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-100">
                <td className="border px-4 py-2">{item.category}</td>
                <td className="border px-4 py-2">{item.subCategory}</td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">{item.taxType}</td>
                <td className="border px-4 py-2">{item.decisionAmount.toLocaleString()}</td>
                <td className="border px-4 py-2">{item.consumptionTax.toLocaleString()}</td>
                <td className="border px-4 py-2">{item.totalTaxIncluded.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentDetails;
