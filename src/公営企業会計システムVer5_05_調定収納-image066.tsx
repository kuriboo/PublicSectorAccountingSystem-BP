import React from 'react';

// TypeScriptの型定義
type AccountingEntryProps = {
  fiscalYear: string;
  settlementDate: string;
  settlementNumber: number;
  summary: string;
  totalSettlementAmount: number;
  totalConsumptionTax: number;
  totalDesignatedIncome: number;
  refundAmount: number;
  previousBalance: number;
};

const AccountingEntry: React.FC<AccountingEntryProps> = ({
  fiscalYear,
  settlementDate,
  settlementNumber,
  summary,
  totalSettlementAmount,
  totalConsumptionTax,
  totalDesignatedIncome,
  refundAmount,
  previousBalance,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">調定日締解除入力（前受金振替）</h1>
      <div className="mb-4">
        <div><span className="font-semibold">年度:</span> {fiscalYear}</div>
        <div><span className="font-semibold">精算日:</span> {settlementDate}</div>
        <div><span className="font-semibold">調定番号:</span> {settlementNumber}</div>
        <div><span className="font-semibold">摘要:</span> {summary}</div>
      </div>
      <div className="flex flex-col mb-4">
        <div><span className="font-semibold">合計精算金額:</span> {totalSettlementAmount}</div>
        <div><span className="font-semibold">合計消費税額:</span> {totalConsumptionTax}</div>
        <div><span className="font-semibold">合計指定収入額:</span> {totalDesignatedIncome}</div>
        <div><span className="font-semibold">還付金額:</span> {refundAmount}</div>
        <div><span className="font-semibold">前受残額:</span> {previousBalance}</div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600">OK</button>
      <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600">クリア</button>
      <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">終了</button>
    </div>
  );
};

export default AccountingEntry;
