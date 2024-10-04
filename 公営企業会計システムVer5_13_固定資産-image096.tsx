```tsx
import React from 'react';

// Type definitions for the component props
interface AssetDetailsProps {
  assetNumber: string;
  acquisitionYear: string;
  acquisitionAmount: number;
  depreciationRate: number;
  remainingValue: number;
  yearlyDepreciation: number;
  depreciationLimitRate: number;
  depreciationLimitValue: number;
  fundDetails: FundDetail[];
}

// Type definitions for fund details
interface FundDetail {
  fundCode: string;
  fundName: string;
  depreciationDivision: string;
  amount: number;
}

// Reusable and customizable component using Tailwind CSS for styling
const AssetDetails: React.FC<AssetDetailsProps> = ({
  assetNumber,
  acquisitionYear,
  acquisitionAmount,
  depreciationRate,
  remainingValue,
  yearlyDepreciation,
  depreciationLimitRate,
  depreciationLimitValue,
  fundDetails,
}) => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h1 className="text-lg font-bold">予測資産財産表示</h1>
      
      <div className="my-4">
        <div className="flex justify-between">
          <span>資産番号: {assetNumber}</span>
          <span>予測用</span>
        </div>

        <div className="flex justify-between">
          <span>取得年月: {acquisitionYear} 年度</span>
          <span>取得金額: ¥{acquisitionAmount.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>償却率: {depreciationRate}%</span>
          <span>残存価額: ¥{remainingValue.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>年間償却額: ¥{yearlyDepreciation.toLocaleString()}</span>
          <span>償却限度率: {depreciationLimitRate}%</span>
        </div>

        <div className="flex justify-between">
          <span>償却限度額: ¥{depreciationLimitValue.toLocaleString()}</span>
        </div>
      </div>

      <h2 className="text-md font-bold mt-4">管種明細</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">財源コード</th>
            <th className="border px-4 py-2">財源名称</th>
            <th className="border px-4 py-2">償却区分</th>
            <th className="border px-4 py-2">財源金額</th>
          </tr>
        </thead>
        <tbody>
          {fundDetails.map((fund, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{fund.fundCode}</td>
              <td className="border px-4 py-2">{fund.fundName}</td>
              <td className="border px-4 py-2">{fund.depreciationDivision}</td>
              <td className="border px-4 py-2">¥{fund.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetDetails;
```