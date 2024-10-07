import React from 'react';

// TypeScriptの型定義
interface BudgetDetail {
  section: string;
  subSection: string;
  description: string;
  budgetAffiliation: string;
  amount: number;
  balance: number;
}

interface Props {
  year: string;
  allocationNumber: number;
  allocationDate: string;
  allocationDivision: string;
  proposal: string;
  proposer: string;
  summary: string;
  increaseItems: BudgetDetail[];
  decreaseItems: BudgetDetail[];
  onReissue: () => void;
  onCancel: () => void;
}

const BudgetDetailsComponent: React.FC<Props> = ({
  year,
  allocationNumber,
  allocationDate,
  allocationDivision,
  proposal,
  proposer,
  summary,
  increaseItems,
  decreaseItems,
  onReissue,
  onCancel,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-4">
      {/* ヘッダー情報 */}
      <div className="mb-6">
        <div className="flex justify-between">
          <div>年度: {year}</div>
          <div>流用充用番号: {allocationNumber}</div>
        </div>
        <div>流用充用日: {allocationDate}</div>
        <div>流用充用区分: {allocationDivision}</div>
        <div>起案所属: {proposal}</div>
        <div>起案者: {proposer}</div>
        <div>摘要: {summary}</div>
      </div>
      
      {/* 増額科目 */}
      <div className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-400 mb-2">増額科目</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="px-2 py-1">節</th>
              <th className="px-2 py-1">細節</th>
              <th className="px-2 py-1">明細</th>
              <th className="px-2 py-1">予算所属</th>
              <th className="px-2 py-1">金額</th>
              <th className="px-2 py-1">予算残額</th>
            </tr>
          </thead>
          <tbody>
            {increaseItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-2 py-1">{item.section}</td>
                <td className="px-2 py-1">{item.subSection}</td>
                <td className="px-2 py-1">{item.description}</td>
                <td className="px-2 py-1">{item.budgetAffiliation}</td>
                <td className="px-2 py-1">{item.amount.toLocaleString()}</td>
                <td className="px-2 py-1">{item.balance.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* 減額科目 */}
      <div className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-400 mb-2">減額科目</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="px-2 py-1">節</th>
              <th className="px-2 py-1">細節</th>
              <th className="px-2 py-1">明細</th>
              <th className="px-2 py-1">予算所属</th>
              <th className="px-2 py-1">金額</th>
              <th className="px-2 py-1">予算残額</th>
            </tr>
          </thead>
          <tbody>
            {decreaseItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-2 py-1">{item.section}</td>
                <td className="px-2 py-1">{item.subSection}</td>
                <td className="px-2 py-1">{item.description}</td>
                <td className="px-2 py-1">{item.budgetAffiliation}</td>
                <td className="px-2 py-1">{item.amount.toLocaleString()}</td>
                <td className="px-2 py-1">{item.balance.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ボタン */}
      <div className="flex justify-end gap-4">
        <button 
          onClick={onReissue} 
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          再発行
        </button>
        <button 
          onClick={onCancel} 
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetDetailsComponent;
```