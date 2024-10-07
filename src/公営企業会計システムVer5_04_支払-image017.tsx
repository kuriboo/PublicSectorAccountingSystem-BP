import React from 'react';

// Propsの型定義
interface BudgetItemProps {
  budgetSection: string;
  budgetDetail: string;
  description: string;
  decisionAmount: number;
  taxExcludedAmount: number;
  consumptionTaxAmount: number;
  itemName: string;
  specification: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  amount: number;
}

// BudgetItemコンポーネント
const BudgetItem: React.FC<BudgetItemProps> = ({
  budgetSection,
  budgetDetail,
  description,
  decisionAmount,
  taxExcludedAmount,
  consumptionTaxAmount,
  itemName,
  specification,
  quantity,
  unit,
  unitPrice,
  amount,
}) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="mb-4">
        <h2 className="font-bold">支出決定科目登録</h2>
        <div className="mt-2 flex justify-between">
          <div>
            <div>予算節: {budgetSection}</div>
            <div>予算明細: {budgetDetail}</div>
            <div>税区分: {description}</div>
          </div>
          <div>
            <div>決定額: {decisionAmount.toLocaleString()}</div>
            <div>税抜金額: {taxExcludedAmount.toLocaleString()}</div>
            <div>消費税額: {consumptionTaxAmount.toLocaleString()}</div>
          </div>
        </div>
      </div>
      <table className="w-full table-auto border-collapse border">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border px-2 py-1">単価名称</th>
            <th className="border px-2 py-1">規格名称</th>
            <th className="border px-2 py-1">数量</th>
            <th className="border px-2 py-1">単位</th>
            <th className="border px-2 py-1">単価</th>
            <th className="border px-2 py-1">金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">{itemName}</td>
            <td className="border px-2 py-1">{specification}</td>
            <td className="border px-2 py-1">{quantity}</td>
            <td className="border px-2 py-1">{unit}</td>
            <td className="border px-2 py-1">{unitPrice.toLocaleString()}</td>
            <td className="border px-2 py-1">{amount.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 flex justify-end">
        <button className="bg-gray-300 rounded px-3 py-1 mr-2">仕訳確認</button>
        <button className="bg-gray-300 rounded px-3 py-1">キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetItem;
