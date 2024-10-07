// Import necessary libraries
import React from 'react';

// Define types for the component props
type BudgetComparisonProps = {
  fiscalYear: number;
  displayAmount: 'request' | 'decision';
  taxType: 'inclusive' | 'exclusive' | 'exempt';
  budgetItems: BudgetItem[];
};

type BudgetItem = {
  budgetItemCode: string;
  itemName: string;
  previousYear: number;
  currentYear: number;
  comparison: number;
};

// BudgetComparison component
const BudgetComparison: React.FC<BudgetComparisonProps> = ({
  fiscalYear,
  displayAmount,
  taxType,
  budgetItems,
}) => {
  return (
    <div className="p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold mb-4">当初予算査定照会</h1>
      <div className="mb-4">
        <span>年度: </span>
        <span>{fiscalYear}</span>
      </div>
      <div className="mb-4">
        <span>表示金額: </span>
        <span>{displayAmount === 'request' ? '見積要求額' : '査定額'}</span>
      </div>
      <div className="mb-4">
        <span>金額種別: </span>
        <span>
          {taxType === 'inclusive' ? '税込' : taxType === 'exclusive' ? '税抜' : '消費税'}
        </span>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">予算科目</th>
            <th className="py-2">科目名称</th>
            <th className="py-2">前年度</th>
            <th className="py-2">本年度</th>
            <th className="py-2">比較</th>
          </tr>
        </thead>
        <tbody>
          {budgetItems.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{item.budgetItemCode}</td>
              <td className="py-2">{item.itemName}</td>
              <td className="py-2">{item.previousYear.toLocaleString()}</td>
              <td className="py-2">{item.currentYear.toLocaleString()}</td>
              <td className="py-2">{item.comparison.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetComparison;
