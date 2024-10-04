```tsx
import React from 'react';

type AccountingDetailsProps = {
  decisionYear: string;
  decisionNumber: number;
  summary: string[];
  entries: {
    debit: string;
    credit: string;
    amountInclTax: number;
    amountExclTax: number;
    taxAmount: number;
  }[];
  taxRate: number;
  onCancel: () => void;
};

const AccountingDetails: React.FC<AccountingDetailsProps> = ({
  decisionYear,
  decisionNumber,
  summary,
  entries,
  taxRate,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white border rounded-md">
      <div className="flex justify-between border-b pb-2 mb-4">
        <div className="flex items-center space-x-4">
          <span>決定年度: {decisionYear}</span>
          <span>決定番号: {decisionNumber}</span>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">摘要</h2>
        <ul className="list-disc list-inside mb-4">
          {summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="border p-2">借方科目</th>
            <th className="border p-2">貸方科目</th>
            <th className="border p-2">税込金額</th>
            <th className="border p-2">税抜金額</th>
            <th className="border p-2">税額</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border p-2">{entry.debit}</td>
              <td className="border p-2">{entry.credit}</td>
              <td className="border p-2">{entry.amountInclTax}</td>
              <td className="border p-2">{entry.amountExclTax}</td>
              <td className="border p-2">{entry.taxAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex justify-between items-center mb-4">
        <span>消費税率: {taxRate.toFixed(2)}%</span>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AccountingDetails;
```