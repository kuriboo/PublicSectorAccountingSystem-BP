import React from 'react';

// Props type definition
type AdjustmentProps = {
  fiscalYear: string;
  accountingDetails: {
    num: string;
    name: string;
    segment: string;
    amount: number;
  }[];
  totalAmount: number;
  comment: string;
  onCommentChange: (comment: string) => void;
};

// Reusable component definition
const AdjustmentComponent: React.FC<AdjustmentProps> = ({
  fiscalYear,
  accountingDetails,
  totalAmount,
  comment,
  onCommentChange,
}) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h1 className="text-lg font-semibold mb-2">年度: {fiscalYear}</h1>
      <div className="mb-4">
        <table className="w-full border-collapse mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">事業</th>
              <th className="border p-2">振替コード</th>
              <th className="border p-2">振替名</th>
              <th className="border p-2">決算金額</th>
            </tr>
          </thead>
          <tbody>
            {accountingDetails.map((detail, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{detail.num}</td>
                <td className="border p-2">{detail.name}</td>
                <td className="border p-2">{detail.segment}</td>
                <td className="border p-2">{detail.amount.toLocaleString()} 円</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right font-bold">
          合計: {totalAmount.toLocaleString()} 円
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">コメント</label>
        <textarea
          className="w-full p-2 border rounded"
          value={comment}
          onChange={(e) => onCommentChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AdjustmentComponent;
