import React from "react";

// TypeScriptの型定義
type PaymentDetailProps = {
  processingDate: string;
  expenseType: string;
  conferenceDivision: string;
  partnerName: string;
  partnerId: string;
  summary: string;
  totalAmount: number;
  mainAmount: number;
  taxAmount: number;
  budgetItems: {
    budgetSection: string;
    budgetDetail: string;
    taxDivision: string;
    burdenAmount: number;
    consumptionTax: number;
  }[];
};

// Tailwind CSSを使用した再利用可能なコンポーネント
const PaymentDetail: React.FC<PaymentDetailProps> = ({
  processingDate,
  expenseType,
  conferenceDivision,
  partnerName,
  partnerId,
  summary,
  totalAmount,
  mainAmount,
  taxAmount,
  budgetItems,
}) => {
  return (
    <div className="p-4 rounded shadow-md bg-white">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <div>
          <h2 className="text-lg font-bold">{`負担処理日: ${processingDate}`}</h2>
          <p>{`決裁区分: ${expenseType}`}</p>
          <p>{`合議区分: ${conferenceDivision}`}</p>
          <p>{`相手先: ${partnerId} ${partnerName}`}</p>
          <p>{`摘要: ${summary}`}</p>
        </div>
        <div className="text-right">
          <p>{`合計負担額: ¥${totalAmount.toLocaleString()}`}</p>
          <p>{`合計本体額: ¥${mainAmount.toLocaleString()}`}</p>
          <p>{`合計消費税額: ¥${taxAmount.toLocaleString()}`}</p>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">预算节</th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">预算明细</th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">税区分</th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">负担额</th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">消费税额</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {budgetItems.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap">{item.budgetSection}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{item.budgetDetail}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{item.taxDivision}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{`¥${item.burdenAmount.toLocaleString()}`}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{`¥${item.consumptionTax.toLocaleString()}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentDetail;
