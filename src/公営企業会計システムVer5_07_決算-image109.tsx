// components/TaxAdjustmentForm.tsx

import React from 'react';

type AdjustmentRate = {
  rate: string;
  value: number;
};

type RevenueCategory = {
  taxRate: string;
  revenueDivision: string;
  totalTaxableAmount: number;
  exemptSupplierAmount: number;
  enteredAmount: number;
};

interface TaxAdjustmentFormProps {
  taxableSalesRatio: number;
  nonAdjustmentRatio: number;
  budgetCategory: string;
  description: string;
  adjustmentAmounts: AdjustmentRate[];
  revenueCategories: RevenueCategory[];
}

const TaxAdjustmentForm: React.FC<TaxAdjustmentFormProps> = ({ 
  taxableSalesRatio,
  nonAdjustmentRatio,
  budgetCategory,
  description,
  adjustmentAmounts,
  revenueCategories
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">調整対象額入力</h2>

      <div className="mb-4">
        <div className="flex justify-between">
          <span>個別対応方式</span>
          <span>課税売上割合 {taxableSalesRatio.toFixed(1)}%</span>
          <span>非調整割合 {nonAdjustmentRatio.toFixed(1)}%</span>
        </div>
        <div>
          <span>予算区分: {budgetCategory}</span>
        </div>
        <div>
          <span>説明: {description}</span>
        </div>
      </div>

      <div className="border p-2 mb-4">
        <h3 className="text-sm font-bold">調整対象額（税率別内訳）</h3>
        {adjustmentAmounts.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.rate}</span>
            <span className="text-red-500">{item.value.toLocaleString()} 円</span>
          </div>
        ))}
      </div>

      <div className="border p-2 mb-4">
        <h3 className="text-sm font-bold">※は軽減税率</h3>
        <table className="w-full text-sm text-left">
          <thead>
            <tr>
              <th>消費税率</th>
              <th>収入区分</th>
              <th>課税仕入れ等に係る合計</th>
              <th>免税事業者からの課税仕入れ額</th>
              <th>これまでの入力金額</th>
            </tr>
          </thead>
          <tbody>
            {revenueCategories.map((category, index) => (
              <tr key={index}>
                <td>{category.taxRate}</td>
                <td>{category.revenueDivision}</td>
                <td>{category.totalTaxableAmount.toLocaleString()}</td>
                <td>{category.exemptSupplierAmount.toLocaleString()}</td>
                <td>{category.enteredAmount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="bg-gray-200 px-4 py-2 rounded">OK</button>
        <button className="bg-gray-200 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-200 px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default TaxAdjustmentForm;
