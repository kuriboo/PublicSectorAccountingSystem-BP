import React from 'react';

type PlanComponentProps = {
  year: string;
  budgetDivision: string;
  sectionCode: string;
  subSectionCode: string;
  detailCode: string;
  plannedAmount: number;
  reservedAmount: number;
  monthlyAmounts: number[];
  onSearch: () => void;
  onDisplay: () => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const PlanComponent: React.FC<PlanComponentProps> = ({
  year,
  budgetDivision,
  sectionCode,
  subSectionCode,
  detailCode,
  plannedAmount,
  reservedAmount,
  monthlyAmounts,
  onSearch,
  onDisplay,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md max-w-lg mx-auto">
      <div className="mb-4">
        <div className="flex mb-2">
          <label className="w-24 font-semibold">年度:</label>
          <span>{year}</span>
        </div>
        <div className="flex mb-2">
          <label className="w-24 font-semibold">予算編成区分:</label>
          <span>{budgetDivision}</span>
        </div>
        <div className="flex mb-2">
          <label className="w-24 font-semibold">節:</label>
          <span>{sectionCode}</span>
        </div>
        <div className="flex mb-2">
          <label className="w-24 font-semibold">細節:</label>
          <span>{subSectionCode}</span>
        </div>
        <div className="flex mb-2">
          <label className="w-24 font-semibold">明細:</label>
          <span>{detailCode}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span>予算額: {plannedAmount.toLocaleString()}</span>
          <span>(単位: 千円)</span>
        </div>
        <span>保留額: {reservedAmount.toLocaleString()}</span>
      </div>

      <table className="w-full mb-4 border">
        <thead>
          <tr>
            {Array.from({ length: 12 }, (_, i) => (
              <th key={i} className="border p-1">
                {i + 4}月
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {monthlyAmounts.map((amount, index) => (
              <td key={index} className="border p-1 text-right">
                {amount.toLocaleString()}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between">
        <button onClick={onSearch} className="btn">科目検索</button>
        <button onClick={onDisplay} className="btn">表示</button>
        <button onClick={onOk} className="btn">OK</button>
        <button onClick={onClear} className="btn">クリア</button>
        <button onClick={onExit} className="btn">終了</button>
      </div>
    </div>
  );
};

export default PlanComponent;