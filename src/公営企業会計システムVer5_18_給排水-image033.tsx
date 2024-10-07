import React from "react";

// 型定義
type TaxDetail = {
  taxCategory: string;
  taxRate: string;
  totalPrice: number;
  taxExcludedPrice: number;
  consumptionTax: number;
};

interface TaxSummaryProps {
  totalIncludingTax: number;
  totalExcludingTax: number;
  totalConsumptionTax: number;
  taxDetails: TaxDetail[];
}

const TaxSummary: React.FC<TaxSummaryProps> = ({
  totalIncludingTax,
  totalExcludingTax,
  totalConsumptionTax,
  taxDetails
}) => {
  return (
    <div className="p-4 max-w-md mx-auto">
      {/* 全体の合計 */}
      <div className="border p-4 mb-4">
        <h2 className="text-lg font-bold mb-2">入力金額合計</h2>
        <div className="flex justify-between">
          <span>税込額</span>
          <span>{totalIncludingTax.toLocaleString()}円</span>
        </div>
        <div className="flex justify-between">
          <span>税抜額</span>
          <span>{totalExcludingTax.toLocaleString()}円</span>
        </div>
        <div className="flex justify-between">
          <span>消費税額</span>
          <span>{totalConsumptionTax.toLocaleString()}円</span>
        </div>
      </div>

      {/* 詳細テーブル */}
      <table className="w-full border">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="border px-4 py-2">税区分</th>
            <th className="border px-4 py-2">消費税率</th>
            <th className="border px-4 py-2">税込額</th>
            <th className="border px-4 py-2">税抜額</th>
            <th className="border px-4 py-2">消費税額</th>
          </tr>
        </thead>
        <tbody>
          {taxDetails.map((detail, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{detail.taxCategory}</td>
              <td className="border px-4 py-2">{detail.taxRate}</td>
              <td className="border px-4 py-2">{detail.totalPrice.toLocaleString()}</td>
              <td className="border px-4 py-2">{detail.taxExcludedPrice.toLocaleString()}</td>
              <td className="border px-4 py-2">{detail.consumptionTax.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 備考 */}
      <div className="text-sm mt-2 text-right">※は軽減税率対象</div>

      {/* ボタン */}
      <div className="flex justify-center mt-4">
        <button className="bg-gray-200 px-4 py-2 mx-1 rounded">OK</button>
        <button className="bg-gray-200 px-4 py-2 mx-1 rounded">クリア</button>
        <button className="bg-gray-200 px-4 py-2 mx-1 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default TaxSummary;
```