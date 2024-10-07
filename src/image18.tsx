import React from 'react';

// 型定義
interface BudgetFormProps {
  budgetCategory: string;
  budgetSubsection: string;
  budgetDetail: string;
  taxDivision: string;
  incomeDivision: string[];
  decisionAmount: number;
  taxAmount: number;
  consumptionTaxRate: string[];
  consumptionTaxAmount: number;
  otherTaxRate: number;
  otherTaxAmount: number;
  summary: string;
  onSummaryChange: (newSummary: string) => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  budgetCategory,
  budgetSubsection,
  budgetDetail,
  taxDivision,
  incomeDivision,
  decisionAmount,
  taxAmount,
  consumptionTaxRate,
  consumptionTaxAmount,
  otherTaxRate,
  otherTaxAmount,
  summary,
  onSummaryChange,
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <div className="grid grid-cols-2 gap-4">
        {/* 左側の設定 */}
        <div>
          <div>
            <label>予算科目</label>
            <div className="text-blue-800">{budgetCategory}</div>
          </div>
          <div>
            <label>予算細部</label>
            <div className="text-blue-800">{budgetSubsection}</div>
          </div>
          <div>
            <label>予算明細</label>
            <div className="text-blue-800">{budgetDetail}</div>
          </div>
          <div>
            <button className="bg-blue-500 text-white p-2 mt-2 rounded">科目検索</button>
          </div>
          <div>
            <label>税区分</label>
            <div>{taxDivision}</div>
          </div>
          <div>
            <label>収入区分</label>
            <select className="border p-1">
              {incomeDivision.map((income, index) => (
                <option key={index}>{income}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* 右側の情報 */}
        <div>
          <div>
            <label>決定額</label>
            <div className="text-right text-gray-700">{decisionAmount.toLocaleString()}</div>
          </div>
          <div>
            <label>税抜額</label>
            <div className="text-right text-gray-700">{taxAmount.toLocaleString()}</div>
          </div>
          <div className="flex items-center">
            <label>消費税率</label>
            <select className="border p-1 mx-2">
              {consumptionTaxRate.map((rate, index) => (
                <option key={index}>{rate}</option>
              ))}
            </select>
            <div className="text-right text-gray-700">{consumptionTaxAmount.toLocaleString()}</div>
          </div>
          <div className="flex items-center">
            <label>他税率</label>
            <input 
              type="number"
              value={otherTaxRate}
              className="border p-1 mx-2 w-16 text-right"
              readOnly
            />
            <div className="text-right text-gray-700">{otherTaxAmount.toLocaleString()}</div>
          </div>
          <div>
            <label>摘要</label>
            <input
              type="text"
              value={summary}
              onChange={(e) => onSummaryChange(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white p-2 mx-2 rounded">OK</button>
        <button className="bg-gray-500 text-white p-2 mx-2 rounded">クリア</button>
        <button className="bg-gray-500 text-white p-2 mx-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetForm;