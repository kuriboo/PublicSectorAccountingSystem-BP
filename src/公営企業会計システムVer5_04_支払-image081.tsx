import React from 'react';
import 'tailwindcss/tailwind.css';

// TypeScript Interface for Props
interface BudgetInfoProps {
  budgetCode: string;
  budgetDetails: string;
  taxType: string;
  budgetStatus: {
    section: string;
    current: number;
    burdenAcc: number;
    burdenBalance: number;
    plannedAcc: number;
    plannedBalance: number;
  };
  amounts: {
    beforeUpdate: number;
    afterUpdate: number;
    difference: number;
    taxExcluded: number;
    consumptionTax: number;
  };
}

// React Component
const BudgetInfo: React.FC<BudgetInfoProps> = ({
  budgetCode,
  budgetDetails,
  taxType,
  budgetStatus,
  amounts,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        {/* Budget Code and Details */}
        <div>
          <h2 className="text-xl">予算科目</h2>
          <p>予算部: {budgetCode}</p>
          <p>予算細部: {budgetDetails}</p>
          <p>税区分: {taxType}</p>
        </div>

        {/* Budget Status */}
        <div>
          <h2 className="text-xl">予算残情報</h2>
          <p>節: {budgetStatus.section}</p>
          <p>予算現額: {budgetStatus.current.toLocaleString()}</p>
          <p>負担累計: {budgetStatus.burdenAcc.toLocaleString()}</p>
          <p>負担残額: {budgetStatus.burdenBalance.toLocaleString()}</p>
          <p>予定累計: {budgetStatus.plannedAcc.toLocaleString()}</p>
          <p>予定残額: {budgetStatus.plannedBalance.toLocaleString()}</p>
        </div>
      </div>

      {/* Amounts Table */}
      <div className="border-t pt-4">
        <div className="flex justify-between">
          <div>
            <h3>請負額</h3>
            <p>変更前: {amounts.beforeUpdate.toLocaleString()}</p>
            <p>変更後: <input type="number" defaultValue={amounts.afterUpdate} className="border px-2" /></p>
          </div>
          <div>
            <h3>消費税率</h3>
            <p>{((amounts.consumptionTax / amounts.taxExcluded) * 100).toFixed(2)}%</p>
          </div>
          <div>
            <h3>差額</h3>
            <p>{amounts.difference.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 mr-2">OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 mr-2">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2">キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetInfo;
