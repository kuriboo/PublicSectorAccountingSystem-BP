import React from 'react';

// タイプ定義
type VoucherProps = {
  title: string;
  fiscalYear: string;
  decisionNo: string;
  manager: string;
  departmentHead: string;
  operationHead: string;
  executionHead: string;
  managerDate: string;
  operationDate: string;
  budgetItems: Array<{
    creditAccount: string;
    debitAccount: string;
    amount: number;
  }>;
};

// コンポーネント定義
const Voucher: React.FC<VoucherProps> = ({
  title,
  fiscalYear,
  decisionNo,
  manager,
  departmentHead,
  operationHead,
  executionHead,
  managerDate,
  operationDate,
  budgetItems,
}) => {
  return (
    <div className="border p-4 m-4 max-w-2xl mx-auto">
      <h1 className="text-center text-xl font-bold">{title}</h1>
      <div className="flex justify-between py-2 border-b">
        <span>年度: {fiscalYear}</span>
        <span>伝票No.: {decisionNo}</span>
      </div>
      <div className="py-2 border-b">
        <div className="flex justify-between">
          <span>管理者: {manager}</span>
          <span>課長: {departmentHead}</span>
        </div>
        <div className="flex justify-between">
          <span>業務保長: {operationHead}</span>
          <span>施工保長: {executionHead}</span>
        </div>
      </div>
      <div className="py-2 border-b">
        <div className="flex justify-between">
          <span>管理者日付: {managerDate}</span>
          <span>業務日付: {operationDate}</span>
        </div>
      </div>
      <div className="py-4">
        <table className="w-full table-auto border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1 text-left">借方科目</th>
              <th className="border px-2 py-1 text-left">貸方科目</th>
              <th className="border px-2 py-1 text-right">金額</th>
            </tr>
          </thead>
          <tbody>
            {budgetItems.map((item, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-100">
                <td className="border px-2 py-1">{item.debitAccount}</td>
                <td className="border px-2 py-1">{item.creditAccount}</td>
                <td className="border px-2 py-1 text-right">
                  {item.amount.toLocaleString()}円
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Voucher;