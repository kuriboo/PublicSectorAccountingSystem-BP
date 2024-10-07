import React, { FC } from 'react';
import 'tailwindcss/tailwind.css';

// TypeScriptの型定義
interface BasePriceCalculationProps {
  fiscalYear: string;
  acceptanceType: string;
  items: {
    receiptNumber: string;
    itemName: string;
    reductionRate: number;
    estimatedPrice: string;
    comparisonPrice: string;
  }[];
  totalAmountTaxIncluded: string;
  totalAmountExcludingTax: string;
  onConfirm: () => void;
  onCancel: () => void;
}

// 再利用可能なコンポーネント
const BasePriceCalculation: FC<BasePriceCalculationProps> = ({
  fiscalYear,
  acceptanceType,
  items,
  totalAmountTaxIncluded,
  totalAmountExcludingTax,
  onConfirm,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl mb-4">予定価格算出基礎調書</h1>
      <div className="mb-2">
        <label className="mr-2">年度:</label>
        <span>{fiscalYear}</span>
      </div>
      <div className="mb-4">
        <label className="mr-2">受付区分:</label>
        <span>{acceptanceType}</span>
      </div>
      <table className="w-full border border-gray-300 mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 p-1">受付番号</th>
            <th className="border border-gray-300 p-1">物件名</th>
            <th className="border border-gray-300 p-1">減歩率</th>
            <th className="border border-gray-300 p-1">予定価格</th>
            <th className="border border-gray-300 p-1">入札書比較価格</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-1">{item.receiptNumber}</td>
              <td className="border border-gray-300 p-1">{item.itemName}</td>
              <td className="border border-gray-300 p-1">{item.reductionRate.toFixed(1)}</td>
              <td className="border border-gray-300 p-1">{item.estimatedPrice}</td>
              <td className="border border-gray-300 p-1">{item.comparisonPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-4">
        <div>設計金額(税込): {totalAmountTaxIncluded}</div>
        <div>設計金額(税抜): {totalAmountExcludingTax}</div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-600 text-white rounded shadow"
        >
          確定
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-red-600 text-white rounded shadow"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BasePriceCalculation;
