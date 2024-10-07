import React from 'react';

type BudgetComponentProps = {
  budgetCode: string;
  budgetSection: string;
  budgetDetail: string;
  decisionAmount: number;
  taxAmount: number;
  taxRate: number;
  consumptionTax: number;
  otherTaxRate: number;
  otherTaxAmount: number;
  summary: string;
  onSearch: () => void;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BudgetComponent: React.FC<BudgetComponentProps> = ({
  budgetCode,
  budgetSection,
  budgetDetail,
  decisionAmount,
  taxAmount,
  taxRate,
  consumptionTax,
  otherTaxRate,
  otherTaxAmount,
  summary,
  onSearch,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h2 className="font-bold">予算科目</h2>
          <div className="mt-2">
            <label>予算部:</label>
            <input
              type="text"
              value={budgetCode}
              className="border ml-2 p-1"
            />
          </div>
          <div className="mt-2">
            <label>予算細部:</label>
            <input
              type="text"
              value={budgetSection}
              className="border ml-2 p-1"
            />
          </div>
          <div className="mt-2">
            <label>予算明細:</label>
            <input
              type="text"
              value={budgetDetail}
              className="border ml-2 p-1"
            />
          </div>
          <button onClick={onSearch} className="mt-2 py-1 px-3 bg-blue-500 text-white rounded">
            科目検索
          </button>
        </div>
        
        <div className="w-1/2">
          <h2 className="font-bold">予算残情報</h2>
          {/* Add additional budget remaining information here */}
        </div>
      </div>
      
      <div className="mt-4">
        <div>
          <label>決定額:</label>
          <input
            type="number"
            value={decisionAmount.toLocaleString()}
            className="border ml-2 p-1"
          />
        </div>
        <div className="mt-2">
          <label>税抜額:</label>
          <input
            type="number"
            value={taxAmount}
            className="border ml-2 p-1"
          />
        </div>
        <div className="mt-2 flex items-center">
          <label>消費税率:</label>
          <input
            type="number"
            value={taxRate}
            className="border ml-2 p-1 w-16"
          />
          <span>%</span>
          <label className="ml-4">消費税:</label>
          <input
            type="number"
            value={consumptionTax}
            className="border ml-2 p-1"
          />
        </div>
        <div className="mt-2 flex items-center">
          <label>他税率:</label>
          <input
            type="number"
            value={otherTaxRate}
            className="border ml-2 p-1 w-16"
          />
          <span>%</span>
          <label className="ml-4">他額:</label>
          <input
            type="number"
            value={otherTaxAmount}
            className="border ml-2 p-1"
          />
        </div>
      </div>
      
      <div className="mt-4">
        <label>摘要:</label>
        <input
          type="text"
          value={summary}
          className="border ml-2 p-1 w-full"
        />
      </div>
      
      <div className="mt-4 flex space-x-4">
        <button onClick={onConfirm} className="py-1 px-3 bg-green-500 text-white rounded">OK</button>
        <button onClick={onClear} className="py-1 px-3 bg-yellow-500 text-white rounded">クリア</button>
        <button onClick={onCancel} className="py-1 px-3 bg-red-500 text-white rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetComponent;