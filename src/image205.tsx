import React from 'react';

// 型定義
interface DocumentDetailProps {
  type: string;
  surveyDate: string;
  surveyPerson: string;
  revocation: string;
  incomeDate: string;
  incomePerson: string;
  valueNumber: string;
  creditor: string;
  summary: string;
  deadline: string;
  constructionShop: string;
  surveyAmount: number;
  consumptionTax: number;
  specifiedIncome: number;
}

// 再利用可能なコンポーネント
const DocumentDetail: React.FC<DocumentDetailProps> = ({
  type,
  surveyDate,
  surveyPerson,
  revocation,
  incomeDate,
  incomePerson,
  valueNumber,
  creditor,
  summary,
  deadline,
  constructionShop,
  surveyAmount,
  consumptionTax,
  specifiedIncome,
}) => {
  return (
    <div className="p-6 bg-white shadow-md">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">調定・収納詳細</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>種別: {type}</div>
          <div>調定日: {surveyDate}</div>
          <div>調定起案者: {surveyPerson}</div>
          <div>取消日: {revocation}</div>
          <div>収納日: {incomeDate}</div>
          <div>収納起案者: {incomePerson}</div>
          <div>信書番号: {valueNumber}</div>
          <div>債務者: {creditor}</div>
          <div>摘要: {summary}</div>
          <div>納入期限: {deadline}</div>
          <div>工事店: {constructionShop}</div>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4">
        <h3 className="text-lg font-semibold mb-2">調定情報</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">調定金額</th>
              <th className="py-2">内消費税額</th>
              <th className="py-2">特定収入</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">{surveyAmount}</td>
              <td className="py-2">{consumptionTax}</td>
              <td className="py-2">{specifiedIncome}</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">合計調定金額: {surveyAmount}</h3>
          <h3 className="text-lg font-semibold">合計消費税額: {consumptionTax}</h3>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetail;
