import React from 'react';

type BudgetInfoProps = {
  budgetCode: string;
  sectionCode: string;
  detailCode: string;
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
};

const BudgetInfo: React.FC<BudgetInfoProps> = ({
  budgetCode,
  sectionCode,
  detailCode,
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
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="flex justify-between mb-4">
        <div>
          <div className="mb-2">
            <span>予算科目: </span>
            <input
              type="text"
              value={budgetCode}
              className="border p-1 rounded"
              readOnly
            />
          </div>
          <div className="mb-2">
            <span>予算細節: </span>
            <input
              type="text"
              value={sectionCode}
              className="border p-1 rounded"
              readOnly
            />
          </div>
          <div className="mb-2">
            <span>予算明細: </span>
            <input
              type="text"
              value={detailCode}
              className="border p-1 rounded"
              readOnly
            />
          </div>
          <button
            onClick={onSearch}
            className="my-2 py-1 px-3 bg-blue-500 text-white rounded"
          >
            科目検索
          </button>
        </div>
        <div className="text-right">
          <div>予算残情報</div>
          {/* Additional budget info fields can be placed here */}
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <span>決定額: </span>
          <input
            type="text"
            value={decisionAmount.toLocaleString()}
            className="border p-1 rounded"
            readOnly
          />
        </div>
        <div className="mb-2">
          <span>税抜額: </span>
          <input
            type="text"
            value={taxAmount.toLocaleString()}
            className="border p-1 rounded"
            readOnly
          />
        </div>
        <div className="flex items-center mb-2">
          <span>消費税率: </span>
          <input
            type="number"
            value={taxRate}
            className="border p-1 rounded mr-2"
            readOnly
          />
          <span className="mr-2">%</span>
          <span>消費税: </span>
          <input
            type="text"
            value={consumptionTax.toLocaleString()}
            className="border p-1 rounded"
            readOnly
          />
        </div>
        <div className="flex items-center mb-2">
          <span>他税率: </span>
          <input
            type="number"
            value={otherTaxRate}
            className="border p-1 rounded mr-2"
            readOnly
          />
          <span className="mr-2">%</span>
          <span>他税額: </span>
          <input
            type="text"
            value={otherTaxAmount.toLocaleString()}
            className="border p-1 rounded"
            readOnly
          />
        </div>
        <div className="mb-2">
          <span>摘要: </span>
          <input
            type="text"
            value={summary}
            className="w-full border p-1 rounded"
            readOnly
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onConfirm}
          className="py-1 px-3 bg-green-500 text-white rounded mr-2"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="py-1 px-3 bg-gray-500 text-white rounded"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default BudgetInfo;