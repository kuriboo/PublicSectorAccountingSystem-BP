import React from 'react';

// 型定義
interface TableData {
  category: string;
  taxCategory: string;
  tax: string;
  sizeChange: string;
  sizeMethod: string;
  taxIncludeExclude: string;
  unitPrice: number;
  quantity: number;
  adjustedAmount: number;
  internalConsumptionTax: number;
  taxExemption: string;
}

interface Props {
  data: TableData[];
}

// テーブルコンポーネント
const TableComponent: React.FC<Props> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="px-4 py-2">区分</th>
            <th className="px-4 py-2">納付分類区分名</th>
            <th className="px-4 py-2">税</th>
            <th className="px-4 py-2">口径変更</th>
            <th className="px-4 py-2">形状寸法</th>
            <th className="px-4 py-2">税込／抜</th>
            <th className="px-4 py-2">単価</th>
            <th className="px-4 py-2">数量</th>
            <th className="px-4 py-2">調定金額</th>
            <th className="px-4 py-2">内消費税額</th>
            <th className="px-4 py-2">減免</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{item.category}</td>
              <td className="px-4 py-2">{item.taxCategory}</td>
              <td className="px-4 py-2">{item.tax}</td>
              <td className="px-4 py-2">{item.sizeChange}</td>
              <td className="px-4 py-2">{item.sizeMethod}</td>
              <td className="px-4 py-2">{item.taxIncludeExclude}</td>
              <td className="px-4 py-2">{item.unitPrice.toLocaleString()}</td>
              <td className="px-4 py-2">{item.quantity}</td>
              <td className="px-4 py-2">{item.adjustedAmount.toLocaleString()}</td>
              <td className="px-4 py-2">{item.internalConsumptionTax.toLocaleString()}</td>
              <td className="px-4 py-2">{item.taxExemption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
