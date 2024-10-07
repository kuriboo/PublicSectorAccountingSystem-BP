import React from 'react';

// プロパティの型定義
interface BudgetComponentProps {
  budgetDetail: string;
  consumptionRate: number;
  budgetAmount: number;
  currentForecastAmount: number;
  currentMonthBreakdown: { month: string; rate: number; plannedAmount: number; executedAmount: number }[];
}

const BudgetComponent: React.FC<BudgetComponentProps> = ({
  budgetDetail,
  consumptionRate,
  budgetAmount,
  currentForecastAmount,
  currentMonthBreakdown
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* 基本情報 */}
      <div className="mb-6">
        <div className="text-lg font-semibold mb-2">予算明細: {budgetDetail}</div>
        <div className="flex items-center mb-4">
          <span>消費税率: </span>
          <input
            type="text"
            value={consumptionRate}
            className="ml-2 border px-2 py-1 rounded"
            readOnly
          />
          <span>%</span>
        </div>
        <div>
          <span>予算現額: </span>
          <span className="font-bold">{budgetAmount.toLocaleString()} 円</span>
        </div>
        <div>
          <span>現在決算額: </span>
          <span className="font-bold">{currentForecastAmount.toLocaleString()} 円</span>
        </div>
      </div>
      
      {/* 月別情報 */}
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">予定月</th>
            <th className="py-2 px-4">率</th>
            <th className="py-2 px-4">予定額</th>
            <th className="py-2 px-4">執行額</th>
          </tr>
        </thead>
        <tbody>
          {currentMonthBreakdown.map((entry, index) => (
            <tr key={index} className="text-center">
              <td className="border py-2 px-4">{entry.month}</td>
              <td className="border py-2 px-4">{entry.rate.toFixed(2)}</td>
              <td className="border py-2 px-4">{entry.plannedAmount.toLocaleString()}</td>
              <td className="border py-2 px-4">{entry.executedAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* アクションボタン */}
      <div className="flex justify-end mt-6">
        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600">
          OK
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600">
          クリア
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetComponent;
