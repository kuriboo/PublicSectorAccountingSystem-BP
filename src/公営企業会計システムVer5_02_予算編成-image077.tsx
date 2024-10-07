import React from 'react';

type BudgetRow = {
  name: string;
  total: number;
  taxAmount1: number;
  taxAmount2: number;
  adjustedAmount: number;
};

type BudgetTableProps = {
  year: string;
  items: BudgetRow[];
  taxRate: number;
  consumerTaxRate: number;
  onSearch: () => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetTable: React.FC<BudgetTableProps> = ({
  year,
  items,
  taxRate,
  consumerTaxRate,
  onSearch,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="bg-white border p-4 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">予算税区分集計額調整</h1>

      <div className="flex justify-between mb-4">
        <div>範囲指定: {year}</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onSearch}>科目検索</button>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">調整項目名</th>
            <th className="py-2 px-4 border-b">集計額</th>
            <th className="py-2 px-4 border-b">調整額</th>
            <th className="py-2 px-4 border-b">合計額</th>
            <th className="py-2 px-4 border-b">調整後の額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.total}</td>
              <td className="py-2 px-4 border-b">{item.taxAmount1}</td>
              <td className="py-2 px-4 border-b">{item.taxAmount2}</td>
              <td className="py-2 px-4 border-b">{item.adjustedAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <div className="flex space-x-4">
          <span>税率: {taxRate}%</span>
          <span>消費税率: {consumerTaxRate}%</span>
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClear}>クリア</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onOk}>OK</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onExit}>終了</button>
        </div>
      </div>
    </div>
  );
};

export default BudgetTable;
