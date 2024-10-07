import React from 'react';
import 'tailwindcss/tailwind.css';

// 型定義
interface AssetDetailsProps {
  assetNumber: string;
  assetName: string;
  acquisitionDate: string;
  acquisitionPrice: number;
  amortizationMethod: string;
  currentYearIncrease: number;
  differenceAmount: number;
  transactions: {
    date: string;
    division: string;
    summary: string;
    adjustment: number;
    increaseDecrease: number;
    amortization: number;
    bookValueIncreaseDecrease: number;
  }[];
}

// コンポーネント定義
const AssetDetails: React.FC<AssetDetailsProps> = ({
  assetNumber,
  assetName,
  acquisitionDate,
  acquisitionPrice,
  amortizationMethod,
  currentYearIncrease,
  differenceAmount,
  transactions,
}) => {
  return (
    <div className="p-4 border rounded-lg w-full bg-white">
      <h2 className="text-xl font-bold mb-4">Asset Details</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <strong>資産番号:</strong> {assetNumber}
        </div>
        <div>
          <strong>資産名称:</strong> {assetName}
        </div>
        <div>
          <strong>取得年月日:</strong> {acquisitionDate}
        </div>
        <div>
          <strong>取得価額:</strong> {acquisitionPrice.toLocaleString()}
        </div>
        <div>
          <strong>償却方法:</strong> {amortizationMethod}
        </div>
      </div>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">異動年月日</th>
            <th className="border px-4 py-2">異動区分</th>
            <th className="border px-4 py-2">異動摘要</th>
            <th className="border px-4 py-2">更正額</th>
            <th className="border px-4 py-2">増減額</th>
            <th className="border px-4 py-2">償却額</th>
            <th className="border px-4 py-2">簿価増減額</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{transaction.date}</td>
              <td className="border px-4 py-2">{transaction.division}</td>
              <td className="border px-4 py-2">{transaction.summary}</td>
              <td className="border px-4 py-2">{transaction.adjustment}</td>
              <td className="border px-4 py-2">{transaction.increaseDecrease}</td>
              <td className="border px-4 py-2">{transaction.amortization}</td>
              <td className="border px-4 py-2">{transaction.bookValueIncreaseDecrease}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetDetails;
