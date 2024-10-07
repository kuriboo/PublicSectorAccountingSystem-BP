import React from 'react';

// 型定義
type DetailProps = {
  fiscalYear: string;
  decisionNumber: number;
  summary: string;
  creditDetails: string;
  depositDetails: string;
  taxIncludedAmount: number;
  taxExcludedAmount: number;
  consumptionTaxAmount: number;
  onCancel: () => void;
};

// コンポーネント
const DetailComponent: React.FC<DetailProps> = ({
  fiscalYear,
  decisionNumber,
  summary,
  creditDetails,
  depositDetails,
  taxIncludedAmount,
  taxExcludedAmount,
  consumptionTaxAmount,
  onCancel,
}) => {
  return (
    <div className="p-4 border border-gray-300 shadow-lg">
      <div className="mb-4">
        <h1 className="text-xl font-bold">決定詳細</h1>
        <div className="mt-2 flex justify-between">
          <div>決定年度: {fiscalYear}</div>
          <div>決定番号: {decisionNumber}</div>
        </div>
        <div className="mt-2">摘要: {summary}</div>
      </div>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">借方詳細・明細</th>
            <th className="px-4 py-2">預り金詳細・明細</th>
            <th className="px-4 py-2">税込金額</th>
            <th className="px-4 py-2">税抜額</th>
            <th className="px-4 py-2">消費税額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{creditDetails}</td>
            <td className="border px-4 py-2">{depositDetails}</td>
            <td className="border px-4 py-2">{taxIncludedAmount}</td>
            <td className="border px-4 py-2">{taxExcludedAmount}</td>
            <td className="border px-4 py-2">{consumptionTaxAmount}</td>
          </tr>
        </tbody>
      </table>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={onCancel}
      >
        キャンセル
      </button>
    </div>
  );
};

export default DetailComponent;
