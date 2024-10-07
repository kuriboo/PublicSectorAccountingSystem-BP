import React from 'react';

// 型定義
interface Transaction {
  changeDate: string;
  contractDate: string;
  completionDate: string;
  amount: string;
}

interface FinancialTableProps {
  totalDeduction: number;
  remainingAmount: number;
  transactions: Transaction[];
}

const FinancialTable: React.FC<FinancialTableProps> = ({ 
  totalDeduction, 
  remainingAmount, 
  transactions 
}) => {
  return (
    <div className="p-4">
      {/* 財務概要 */}
      <div className="mb-4">
        <p className="text-blue-700 mb-1">控除金額: {totalDeduction}</p>
        <p className="text-blue-700">残額: {remainingAmount}</p>
      </div>
      
      {/* 取引テーブル */}
      <table className="min-w-full table-auto border-collapse border border-blue-700">
        <thead>
          <tr>
            <th className="border border-blue-700 p-2 bg-blue-700 text-white">変更日</th>
            <th className="border border-blue-700 p-2 bg-blue-700 text-white">契約日</th>
            <th className="border border-blue-700 p-2 bg-blue-700 text-white">完了日</th>
            <th className="border border-blue-700 p-2 bg-blue-700 text-white">金額</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="border border-blue-700 p-2 text-center">{transaction.changeDate}</td>
              <td className="border border-blue-700 p-2 text-center">{transaction.contractDate}</td>
              <td className="border border-blue-700 p-2 text-center">{transaction.completionDate}</td>
              <td className="border border-blue-700 p-2 text-center">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;
