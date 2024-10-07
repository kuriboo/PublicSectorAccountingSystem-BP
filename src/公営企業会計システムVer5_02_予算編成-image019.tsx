import React from 'react';

// Props type definition
interface BudgetEntryProps {
  fiscalYear: number;
  entryNumber: number;
  isTaxIncluded: boolean;
  projects: { id: string; name: string; description: string }[];
  amountDetails: {
    projectPlanAmount: number;
    decisionEstimateAmount: number;
  };
  accountItems: {
    code: string;
    name: string;
    currentAmount: number;
    decisionAmount: number;
    estimateAmount: number;
  }[];
}

// BudgetEntry component definition
const BudgetEntry: React.FC<BudgetEntryProps> = ({
  fiscalYear,
  entryNumber,
  isTaxIncluded,
  projects,
  amountDetails,
  accountItems,
}) => {
  return (
    <div className="p-4 text-sm">
      <header className="mb-4">
        <h1 className="text-xl font-bold">事業別決算見込登録</h1>
        <div className="flex space-x-2 mt-2">
          <span>平成{fiscalYear}年度</span>
          <span>決算見込回数 {entryNumber}</span>
          <span>決算見込</span>
        </div>
      </header>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">事業一覧</h2>
        {projects.map((project) => (
          <div key={project.id} className="flex items-center space-x-2">
            <span className="bg-blue-200 px-2 py-1 rounded">{project.id}</span>
            <span>{project.name} - {project.description}</span>
          </div>
        ))}
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">金額種別</h2>
        <div>
          <label className="mr-4">
            <input type="radio" checked={isTaxIncluded} readOnly /> 税込
          </label>
          <label>
            <input type="radio" checked={!isTaxIncluded} readOnly /> 税抜
          </label>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">施策内訳</h2>
        <div>事業計画額: {amountDetails.projectPlanAmount.toLocaleString()}</div>
        <div>決算見込額: {amountDetails.decisionEstimateAmount.toLocaleString()}</div>
      </section>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-2 py-1">科目コード</th>
            <th className="border border-gray-300 px-2 py-1">科目名称</th>
            <th className="border border-gray-300 px-2 py-1">予算現額</th>
            <th className="border border-gray-300 px-2 py-1">現在決算額</th>
            <th className="border border-gray-300 px-2 py-1">決算見込額</th>
          </tr>
        </thead>
        <tbody>
          {accountItems.map((item) => (
            <tr key={item.code} className="text-right">
              <td className="border border-gray-300 px-2 py-1">{item.code}</td>
              <td className="border border-gray-300 px-2 py-1 text-left">{item.name}</td>
              <td className="border border-gray-300 px-2 py-1">{item.currentAmount.toLocaleString()}</td>
              <td className="border border-gray-300 px-2 py-1">{item.decisionAmount.toLocaleString()}</td>
              <td className="border border-gray-300 px-2 py-1">{item.estimateAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end space-x-4 mt-4">
        <button className="bg-gray-300 px-4 py-2 rounded">編集</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">確認</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">クリア</button>
      </div>
    </div>
  );
};

export default BudgetEntry;
