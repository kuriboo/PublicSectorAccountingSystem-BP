import React from 'react';

type BudgetDetailProps = {
  budgetCode: string;
  budgetSection: string;
  budgetItem: string;
  currentBudget: number;
  totalBurden: number;
  remainingBurden: number;
  taxDivision?: string;
  incomeDivisionOptions: string[];
  decisionAmount: number;
  taxAmount: number;
  consumptionTaxRate: number;
  consumptionTaxAmount: number;
  otherTaxRate?: number;
  otherTaxAmount?: number;
  onApprove: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BudgetDetail: React.FC<BudgetDetailProps> = ({
  budgetCode,
  budgetSection,
  budgetItem,
  currentBudget,
  totalBurden,
  remainingBurden,
  taxDivision,
  incomeDivisionOptions,
  decisionAmount,
  taxAmount,
  consumptionTaxRate,
  consumptionTaxAmount,
  otherTaxRate,
  otherTaxAmount,
  onApprove,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center">
            <span className="font-bold mr-2">予算科目:</span>
            <span>{budgetCode}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">予算節:</span>
            <span>{budgetSection}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">予算明細:</span>
            <span>{budgetItem}</span>
          </div>
        </div>
        <div>
          <div className="font-bold">予算残情報</div>
          <div className="flex items-center">
            <span className="mr-2">予算現額:</span>
            <span>{currentBudget.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">負担累計:</span>
            <span>{totalBurden.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">負担残額:</span>
            <span>{remainingBurden.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div>
          <div className="flex items-center">
            <span className="mr-2">税込額:</span>
            <span>{decisionAmount.toLocaleString()}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="mr-2">税抜額:</span>
            <span>{taxAmount.toLocaleString()}</span>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <span className="mr-2">消費税率:</span>
            <span>{consumptionTaxRate} %</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="mr-2">消費税額:</span>
            <span>{consumptionTaxAmount.toLocaleString()}</span>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <span className="mr-2">割増税率:</span>
            <span>{otherTaxRate} %</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="mr-2">割増税額:</span>
            <span>{otherTaxAmount?.toLocaleString() || 0}</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <textarea
          className="w-full h-16 p-2 border rounded mt-2"
          placeholder="概要"
        />
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 mr-2 rounded">キャンセル</button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded">クリア</button>
        <button onClick={onApprove} className="bg-green-500 text-white px-4 py-2 rounded">OK</button>
      </div>
    </div>
  );
};

export default BudgetDetail;
