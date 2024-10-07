import React from 'react';

// 型定義
type Props = {
  budgetSection: string;
  budgetDetailSection: string;
  budgetItem: string;
  taxType: string;
  incomeType: string;
  taxRate: number;
  remainingLiability: number;
  determinedAmount: number;
  consumptionTaxAmount: number;
  onConfirmClick: () => void;
  onClearClick: () => void;
};

// 再利用可能なコンポーネント
const BudgetInfoCard: React.FC<Props> = ({
  budgetSection,
  budgetDetailSection,
  budgetItem,
  taxType,
  incomeType,
  taxRate,
  remainingLiability,
  determinedAmount,
  consumptionTaxAmount,
  onConfirmClick,
  onClearClick
}) => {
  return (
    <div className="p-4 border bg-white shadow">
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="font-bold">予算科目</h2>
          <p>予算節: {budgetSection}</p>
          <p>予算細節: {budgetDetailSection}</p>
          <p>予算項目: {budgetItem}</p>
        </div>
        <div>
          <h2 className="font-bold">予算残情報</h2>
          <p>税区分: {taxType}</p>
          <p>収入区分: {incomeType}</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-bold">消費税率</h2>
        <p>{taxRate.toFixed(2)}%</p>
      </div>

      <div className="mb-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">負担残額</th>
              <th className="border-b p-2">決定金額</th>
              <th className="border-b p-2">消費税額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-2">{remainingLiability.toLocaleString()}</td>
              <td className="border-b p-2 bg-blue-100">{determinedAmount.toLocaleString()}</td>
              <td className="border-b p-2 bg-purple-100">{consumptionTaxAmount.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="bg-gray-200 px-4 py-2" onClick={onClearClick}>クリア</button>
        <button className="bg-blue-500 text-white px-4 py-2" onClick={onConfirmClick}>OK</button>
      </div>
    </div>
  );
};

export default BudgetInfoCard;
```