```tsx
import React from 'react';

// Props type definition
type FinanceFormProps = {
  year: string;
  decisionNumber: string;
  summary: string;
  debits: Array<{ item: string; detail: string; amount: number }>;
  credits: Array<{ item: string; detail: string; amount: number }>;
  taxAmount: number;
  total: number;
  onDetailsEdit: () => void;
  onRowDelete: () => void;
};

// FinanceForm component
const FinanceForm: React.FC<FinanceFormProps> = ({
  year,
  decisionNumber,
  summary,
  debits,
  credits,
  taxAmount,
  total,
  onDetailsEdit,
  onRowDelete,
}) => {
  return (
    <div className="p-4 border-2 border-gray-300">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span>決定年度: {year}</span>
          <span>決定番号: {decisionNumber}</span>
          <span>摘要: {summary}</span>
        </div>
      </div>

      <table className="w-full mb-4">
        <thead>
          <tr className="bg-blue-200">
            <th className="p-2">借方科目</th>
            <th className="p-2">借方細節・明細</th>
            <th className="p-2">税込金額</th>
            <th className="p-2">税抜金額</th>
            <th className="p-2">消費税額</th>
          </tr>
        </thead>
        <tbody>
          {debits.map((debit, index) => (
            <tr key={index} className="text-center">
              <td className="p-2">{debit.item}</td>
              <td className="p-2">{debit.detail}</td>
              <td className="p-2">{debit.amount.toLocaleString()}</td>
              <td className="p-2">{(debit.amount - taxAmount).toLocaleString()}</td>
              <td className="p-2">{taxAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mb-4">
        <span className="mr-4">合計: {total.toLocaleString()}</span>
      </div>

      <div className="flex space-x-4 justify-end">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={onDetailsEdit}
        >
          明細編集
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          onClick={onRowDelete}
        >
          行削除
        </button>
      </div>
    </div>
  );
};

export default FinanceForm;
```