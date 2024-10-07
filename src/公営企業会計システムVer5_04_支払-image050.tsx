import React from 'react';

type BudgetChangeProps = {
  budgetSectionCode: string;
  businessCode: string;
  budgetDetail: string;
  taxClassification: string;
  designTaxExAmount: number;
  consumptionTaxRate: number;
  beforeChangeRequestAmount: number;
  afterChangeRequestAmount: number;
  taxExAmount: number;
  consumptionTaxAmount: number;
  budgetInfo: {
    currentAmount: number;
    carryOverAmount: number;
    plannedAmount: number;
    plannedRemaining: number;
  };
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BudgetChange: React.FC<BudgetChangeProps> = ({
  budgetSectionCode,
  businessCode,
  budgetDetail,
  taxClassification,
  designTaxExAmount,
  consumptionTaxRate,
  beforeChangeRequestAmount,
  afterChangeRequestAmount,
  taxExAmount,
  consumptionTaxAmount,
  budgetInfo,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="border p-4">
      {/* Budget Section */}
      <div className="flex justify-between mb-4">
        <div className="flex-1">
          <div className="text-lg font-bold">予算科目</div>
          <div>予算節: {budgetSectionCode}</div>
          <div>予算細節: {businessCode}</div>
          <div>予算明細: {budgetDetail}</div>
          <div>税区分: {taxClassification}</div>
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold">予算残情報</div>
          <div>予算現額: {budgetInfo.currentAmount.toLocaleString()}</div>
          <div>負担累計: {budgetInfo.carryOverAmount.toLocaleString()}</div>
          <div>負担超額: {(budgetInfo.currentAmount - budgetInfo.carryOverAmount).toLocaleString()}</div>
          <div>予定累計: {budgetInfo.plannedAmount.toLocaleString()}</div>
          <div>予定残額: {budgetInfo.plannedRemaining.toLocaleString()}</div>
        </div>
      </div>
      {/* Amount Details */}
      <div className="border-t pt-4">
        <div>設計税抜額: {designTaxExAmount.toLocaleString()}</div>
        <div className="flex items-center mb-2">
          <div className="mr-2">請負率:</div>
          <input type="number" className="border p-1" defaultValue={(afterChangeRequestAmount / beforeChangeRequestAmount) * 100} />%
        </div>
        <div className="flex">
          <div className="mr-4">
            <div>請負額</div>
            <div>変更前: {beforeChangeRequestAmount.toLocaleString()}</div>
            <div>変更後: {afterChangeRequestAmount.toLocaleString()}</div>
          </div>
          <div className="mr-4">
            <div>税抜額: {taxExAmount.toLocaleString()}</div>
          </div>
          <div>
            <div>消費税額: {consumptionTaxAmount.toLocaleString()}</div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-end mt-4">
        <button className="bg-gray-200 p-2 mx-1" onClick={onOk}>OK</button>
        <button className="bg-gray-200 p-2 mx-1" onClick={onClear}>クリア</button>
        <button className="bg-gray-200 p-2 mx-1" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetChange;
