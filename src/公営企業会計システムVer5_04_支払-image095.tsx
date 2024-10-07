import React from 'react';

// Propsの型定義
interface BudgetRegistrationProps {
  budgetNumber: string;
  budgetSection: string;
  budgetDetail: string;
  taxDivision: string;
  decisionAmount: number;
  taxExcludedAmount: number;
  consumptionTaxRate: number;
  consumptionTaxAmount: number;
  budgetCurrentAmount: number;
  liabilityTotal: number;
  burdenBalance: number;
  budgetaryEstimation: number;
  budgetRemainingAmount: number;
  onSearchClick: () => void;
  onSubmit: () => void;
  onClear: () => void;
}

const BudgetRegistration: React.FC<BudgetRegistrationProps> = ({
  budgetNumber,
  budgetSection,
  budgetDetail,
  taxDivision,
  decisionAmount,
  taxExcludedAmount,
  consumptionTaxRate,
  consumptionTaxAmount,
  budgetCurrentAmount,
  liabilityTotal,
  burdenBalance,
  budgetaryEstimation,
  budgetRemainingAmount,
  onSearchClick,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="font-bold">予算科目</h3>
          <div className="mb-2">{budgetNumber}</div>
          <div className="mb-2">{budgetSection}</div>
          <div className="mb-2">{budgetDetail}</div>
          <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={onSearchClick}>科目検索</button>
        </div>

        <div>
          <h3 className="font-bold">予算残情報</h3>
          <ul>
            <li>予算現額: {budgetCurrentAmount.toLocaleString()}</li>
            <li>負担累計: {liabilityTotal.toLocaleString()}</li>
            <li>負担残額: {burdenBalance.toLocaleString()}</li>
            <li>予定累計: {budgetaryEstimation.toLocaleString()}</li>
            <li>予定残額: {budgetRemainingAmount.toLocaleString()}</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="font-bold">税区分</h3>
        <div className="mb-2">{taxDivision}</div>

        <div className="flex items-center mb-2">
          <label className="mr-2">決定額: </label>
          <input type="number" value={decisionAmount} className="border rounded p-1" readOnly />
        </div>

        <div className="flex items-center mb-2">
          <label className="mr-2">税抜金額: </label>
          <input type="number" value={taxExcludedAmount} className="border rounded p-1" readOnly />
        </div>

        <div className="flex items-center mb-2">
          <label className="mr-2">消費税率: </label>
          <select className="border rounded p-1" value={consumptionTaxRate} readOnly>
            <option value={8}>8%</option>
            <option value={10}>10%</option>
          </select>
        </div>

        <div className="flex items-center mb-2">
          <label className="mr-2">消費税額: </label>
          <input type="number" value={consumptionTaxAmount} className="border rounded p-1" readOnly />
        </div>

        <div className="flex justify-end mt-4">
          <button className="bg-green-500 text-white px-4 py-2 mr-2 rounded" onClick={onSubmit}>OK</button>
          <button className="bg-gray-500 text-white px-4 py-2 mr-2 rounded" onClick={onClear}>クリア</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">キャンセル</button>
        </div>
      </div>
    </div>
  );
};

export default BudgetRegistration;
```