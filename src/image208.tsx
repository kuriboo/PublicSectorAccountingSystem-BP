// components/BudgetDetail.tsx

import React from 'react';

// 型定義
interface BudgetDetailProps {
  budgetSection: string;
  budgetSubsection: string;
  budgetDetail: string;
  taxType: string;
  taxRate: string;
  items: {
    unitName: string;
    specificationName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
  onCancel: () => void;
}

// Tailwindのスタイルを適用
const BudgetDetail: React.FC<BudgetDetailProps> = ({
  budgetSection,
  budgetSubsection,
  budgetDetail,
  taxType,
  taxRate,
  items,
  onCancel,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md max-w-xl">
      <h2 className="text-lg font-bold mb-4">物品詳細</h2>
      <div className="mb-4">
        <div>予算科目: {budgetSection}</div>
        <div>予算節: {budgetSubsection}</div>
        <div>予算明細: {budgetDetail}</div>
      </div>

      <div className="mb-4">
        <div>税区分: {taxType}</div>
        <div>消費税率: {taxRate}</div>
      </div>

      <table className="w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">単価名称</th>
            <th className="p-2">規格名称</th>
            <th className="p-2">数量</th>
            <th className="p-2">単価</th>
            <th className="p-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="p-2">{item.unitName}</td>
              <td className="p-2">{item.specificationName}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">{item.unitPrice.toFixed(2)}</td>
              <td className="p-2">{item.totalPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="bg-gray-500 text-white py-2 px-4 rounded"
        onClick={onCancel}
      >
        キャンセル
      </button>
    </div>
  );
};

export default BudgetDetail;
