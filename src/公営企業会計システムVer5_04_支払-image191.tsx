import React from 'react';

type AdjustmentComponentProps = {
  adjustmentDate: string;
  purchaseDate: string;
  deadline: string;
  year: number;
  number: number;
  summary: string;
  debtor: string;
  totalAdjustmentAmount: number;
  totalTaxableAmount: number;
  totalSpecialIncome: number;
  accountDetails: {
    subject: string;
    detail: string;
    description: string;
    tax: string;
    amount: number;
    internalConsumptionTax: number;
    specialIncome: number;
  }[];
};

const AdjustmentComponent: React.FC<AdjustmentComponentProps> = ({
  adjustmentDate,
  purchaseDate,
  deadline,
  year,
  number,
  summary,
  debtor,
  totalAdjustmentAmount,
  totalTaxableAmount,
  totalSpecialIncome,
  accountDetails,
}) => {
  return (
    <div className="p-4 border rounded-lg bg-white text-sm">
      {/* Header Section */}
      <div className="flex justify-between">
        <div>
          <p>調定日: {adjustmentDate}</p>
          <p>納入期限: {deadline}</p>
        </div>
        <div className="text-right">
          <p>取消日: {purchaseDate}</p>
          <p>年度: {year}</p>
          <p>調定番号: {number}</p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-4">
        <p>摘要: {summary}</p>
        <p>債務者: {debtor}</p>
      </div>

      {/* Summary of Amounts */}
      <div className="mt-4">
        <p>合計調定金額: {totalAdjustmentAmount.toLocaleString()}</p>
        <p>合計消費税額: {totalTaxableAmount}</p>
        <p>合計特定収入: {totalSpecialIncome}</p>
      </div>

      {/* Account Details Section */}
      <table className="mt-4 w-full border text-left bg-gray-100">
        <thead>
          <tr>
            <th className="p-2 border">調定科目</th>
            <th className="p-2 border">調定細節</th>
            <th className="p-2 border">調定明細</th>
            <th className="p-2 border">税</th>
            <th className="p-2 border">調定金額</th>
            <th className="p-2 border">内消費税額</th>
            <th className="p-2 border">特定収入</th>
          </tr>
        </thead>
        <tbody>
          {accountDetails.map((detail, index) => (
            <tr key={index}>
              <td className="p-2 border">{detail.subject}</td>
              <td className="p-2 border">{detail.detail}</td>
              <td className="p-2 border">{detail.description}</td>
              <td className="p-2 border">{detail.tax}</td>
              <td className="p-2 border">{detail.amount.toLocaleString()}</td>
              <td className="p-2 border">{detail.internalConsumptionTax}</td>
              <td className="p-2 border">{detail.specialIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Section */}
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-gray-300 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default AdjustmentComponent;
