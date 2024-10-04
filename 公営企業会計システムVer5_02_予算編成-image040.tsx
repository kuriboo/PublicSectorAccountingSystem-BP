```tsx
import React from 'react';

// プロパティの型定義
type Props = {
  year: string;
  centerName: string;
  periodCount: number;
  accountType: string;
  previousYearAmount: number;
  taxIncludedAmount: number;
  taxExcludedAmount: number;
  consumptionTax: number;
  comparisonAmount: number;
};

// 再利用可能なコンポーネント
const BudgetComponent: React.FC<Props> = ({
  year,
  centerName,
  periodCount,
  accountType,
  previousYearAmount,
  taxIncludedAmount,
  taxExcludedAmount,
  consumptionTax,
  comparisonAmount,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="bg-blue-200 py-2 px-4 mb-4 rounded">
        <h2 className="text-lg">当初事業別科目別内訳査定登録</h2>
        <p>{year}年度 / {centerName}</p>
        <p>査定: {periodCount}回</p>
      </div>
      
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">前年額</th>
            <th className="px-4 py-2 border">税込</th>
            <th className="px-4 py-2 border">税抜</th>
            <th className="px-4 py-2 border">消費税</th>
            <th className="px-4 py-2 border">比較</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">{previousYearAmount.toLocaleString()}</td>
            <td className="px-4 py-2 border">{taxIncludedAmount.toLocaleString()}</td>
            <td className="px-4 py-2 border">{taxExcludedAmount.toLocaleString()}</td>
            <td className="px-4 py-2 border">{consumptionTax.toLocaleString()}</td>
            <td className="px-4 py-2 border">{comparisonAmount.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      
      <button className="bg-blue-500 text-white py-1 px-4 rounded">登録</button>
      <button className="bg-green-500 text-white py-1 px-4 mx-2 rounded">訂正</button>
      <button className="bg-red-500 text-white py-1 px-4 rounded">行削除</button>
    </div>
  );
};

export default BudgetComponent;
```