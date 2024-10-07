import React from 'react';

// TypeScript型定義
type StatementDetailProps = {
  fiscalYear: string;
  number: number;
  paymentDate: string;
  paymentMethod: string;
  paymentDestination: string;
  accountDetails: {
    accountType: string;
    bankName: string;
    branchName: string;
    accountNumber: string;
    accountHolder: string;
  };
  amounts: {
    decisionAmount: number;
    principalAmount: number;
    taxAmount: number;
  };
  tableData: {
    expenditureSection: string;
    expenditureDetail: string;
    expenditureDescription: string;
    tax: string;
    decisionAmount: number;
    taxAmount: number;
    totalAmount: number;
  }[];
};

const StatementDetail: React.FC<StatementDetailProps> = ({
  fiscalYear,
  number,
  paymentDate,
  paymentMethod,
  paymentDestination,
  accountDetails,
  amounts,
  tableData,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-bold">支出決定</h2>
        <div>
          {fiscalYear} 年度 番号 {number}
        </div>
      </div>
      
      <div className="mb-4">
        <div>支払日: {paymentDate}</div>
        <div>支払方法: {paymentMethod}</div>
        <div>支払先: {paymentDestination}</div>
      </div>

      <div className="mb-4">
        <h3 className="font-bold border-b">口座振込情報</h3>
        <div>預金種別: {accountDetails.accountType}</div>
        <div>銀行名: {accountDetails.bankName}</div>
        <div>支店名: {accountDetails.branchName}</div>
        <div>口座番号: {accountDetails.accountNumber}</div>
        <div>名義人: {accountDetails.accountHolder}</div>
      </div>

      <div className="mb-4">
        <div>決定額: {amounts.decisionAmount.toLocaleString()}</div>
        <div>本体額: {amounts.principalAmount.toLocaleString()}</div>
        <div>消費税額: {amounts.taxAmount.toLocaleString()}</div>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="p-2 bg-indigo-600 text-white">支出節</th>
            <th className="p-2 bg-indigo-600 text-white">支出細節</th>
            <th className="p-2 bg-indigo-600 text-white">支出明細</th>
            <th className="p-2 bg-indigo-600 text-white">税</th>
            <th className="p-2 bg-indigo-600 text-white">決定額</th>
            <th className="p-2 bg-indigo-600 text-white">消費税額</th>
            <th className="p-2 bg-indigo-600 text-white">税込金額</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="p-2 border">{row.expenditureSection}</td>
              <td className="p-2 border">{row.expenditureDetail}</td>
              <td className="p-2 border">{row.expenditureDescription}</td>
              <td className="p-2 border">{row.tax}</td>
              <td className="p-2 border">{row.decisionAmount.toLocaleString()}</td>
              <td className="p-2 border">{row.taxAmount.toLocaleString()}</td>
              <td className="p-2 border">{row.totalAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatementDetail;
