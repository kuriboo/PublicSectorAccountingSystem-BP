```tsx
import React from 'react';

type BudgetAdjustmentProps = {
  fiscalYear: string;
  rows: Array<{
    budgetClassification: string;
    item: string;
    budgetProgram: string;
    budgetDetail: string;
    executedAmount: number;
    taxIncludedAmount: number;
  }>;
  onConfirm: () => void;
  onCancel: () => void;
};

const BudgetAdjustment: React.FC<BudgetAdjustmentProps> = ({
  fiscalYear,
  rows,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h1 className="text-xl font-bold mb-4">1000円丸め調整入力 (予算科目)</h1>

      <div className="mb-2">
        <span className="font-semibold">年度: </span>
        {fiscalYear}
      </div>

      <table className="w-full mb-4 border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2 border">予算款</th>
            <th className="p-2 border">予算項</th>
            <th className="p-2 border">予算目</th>
            <th className="p-2 border">予算部</th>
            <th className="p-2 border">予算明細</th>
            <th className="p-2 border">変更執行税込金額</th>
            <th className="p-2 border">変更消費税込額</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border">
              <td className="p-2 border">{row.budgetClassification}</td>
              <td className="p-2 border">{row.item}</td>
              <td className="p-2 border">{row.budgetProgram}</td>
              <td className="p-2 border">{row.budgetDetail}</td>
              <td className="p-2 border">{row.executedAmount.toLocaleString()}</td>
              <td className="p-2 border">{row.taxIncludedAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onConfirm}
        >
          確定
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetAdjustment;
```