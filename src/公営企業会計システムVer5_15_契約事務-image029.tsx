import React from 'react';

// 型定義
interface BudgetTableProps {
  data: {
    category: string;
    subCategory: string;
    detail: string;
    allocationRate: number;
    totalIncludingTax: number;
    totalExcludingTax: number;
    consumptionTax: number;
  }[];
  onRowEdit?: (index: number) => void;
  onRowDelete?: (index: number) => void;
  onSearch?: (query: string) => void;
}

// 再利用可能なコンポーネント
const BudgetTable: React.FC<BudgetTableProps> = ({
  data,
  onRowEdit,
  onRowDelete,
  onSearch
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-2 px-4">節</th>
            <th className="py-2 px-4">細節</th>
            <th className="py-2 px-4">明細</th>
            <th className="py-2 px-4">配賦比率</th>
            <th className="py-2 px-4">設計金額(税込)</th>
            <th className="py-2 px-4">設計金額(税抜)</th>
            <th className="py-2 px-4">設計金額(消費税)</th>
            <th className="py-2 px-4">操作</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr className="text-center" key={index}>
              <td className="border py-2 px-4">{row.category}</td>
              <td className="border py-2 px-4">{row.subCategory}</td>
              <td className="border py-2 px-4">{row.detail}</td>
              <td className="border py-2 px-4">{row.allocationRate.toFixed(2)}%</td>
              <td className="border py-2 px-4">{row.totalIncludingTax.toLocaleString()}</td>
              <td className="border py-2 px-4">{row.totalExcludingTax.toLocaleString()}</td>
              <td className="border py-2 px-4">{row.consumptionTax.toLocaleString()}</td>
              <td className="border py-2 px-4">
                <button className="bg-green-500 text-white px-2 py-1 mr-2 rounded" onClick={() => onRowEdit?.(index)}>編集</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onRowDelete?.(index)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <input className="border p-2" type="text" placeholder="予算科目検索" onChange={(e) => onSearch?.(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2" onClick={() => onSearch?.('')}>検索</button>
      </div>
    </div>
  );
};

export default BudgetTable;
```