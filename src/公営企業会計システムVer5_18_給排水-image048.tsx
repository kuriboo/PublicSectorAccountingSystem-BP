// components/TaxSummary.tsx
import React from 'react';

// Type definition for the props
interface TaxSummaryProps {
  taxIncluded: number;
  taxExcluded: number;
  consumptionTax: number;
  taxRate: string;
}

// Functional component with props
const TaxSummary: React.FC<TaxSummaryProps> = ({
  taxIncluded,
  taxExcluded,
  consumptionTax,
  taxRate,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md">
      {/* Input Amount Summary */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">入力金額合計</h2>
        <ul>
          <li className="flex justify-between">
            <span>税込額</span>
            <span>{taxIncluded.toLocaleString()}</span>
          </li>
          <li className="flex justify-between">
            <span>税抜額</span>
            <span>{taxExcluded.toLocaleString()}</span>
          </li>
          <li className="flex justify-between">
            <span>消費税額</span>
            <span>{consumptionTax.toLocaleString()}</span>
          </li>
        </ul>
      </div>

      {/* Tax Breakdown Table */}
      <table className="w-full border-t border-b">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left p-2">税区分</th>
            <th className="text-left p-2">消費税率</th>
            <th className="text-left p-2">税込額</th>
            <th className="text-left p-2">税抜額</th>
            <th className="text-left p-2">消費税額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-t">課税</td>
            <td className="p-2 border-t">{taxRate}</td>
            <td className="p-2 border-t">{taxIncluded.toLocaleString()}</td>
            <td className="p-2 border-t">{taxExcluded.toLocaleString()}</td>
            <td className="p-2 border-t">{consumptionTax.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      {/* Note */}
      <p className="text-xs mt-2">※は軽減税率対象</p>

      {/* Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button className="px-4 py-2 bg-gray-200 rounded shadow">OK</button>
        <button className="px-4 py-2 bg-gray-200 rounded shadow">クリア</button>
        <button className="px-4 py-2 bg-gray-200 rounded shadow">キャンセル</button>
      </div>
    </div>
  );
};

export default TaxSummary;
