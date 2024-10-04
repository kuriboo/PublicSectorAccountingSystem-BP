```tsx
// Import necessary modules
import React from 'react';

// Type definitions for props
type TaxSummaryProps = {
  includingTax: number;
  excludingTax: number;
  consumptionTax: number;
  taxRate: string;
};

// TaxSummary component
const TaxSummary: React.FC<TaxSummaryProps> = ({
  includingTax, 
  excludingTax, 
  consumptionTax,
  taxRate
}) => {
  return (
    <div className="p-4">
      <div className="border mb-4 p-2">
        <h2 className="text-blue-800 font-bold mb-2">入力金額合計</h2>
        <div className="flex justify-between">
          <span>税込額</span>
          <span>{includingTax.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>税抜額</span>
          <span>{excludingTax.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>消費税額</span>
          <span>{consumptionTax.toLocaleString()}</span>
        </div>
      </div>
      
      <table className="w-full border">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="p-2">税区分</th>
            <th className="p-2">消費税率</th>
            <th className="p-2">税込額</th>
            <th className="p-2">税抜額</th>
            <th className="p-2">消費税額</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="p-2 border">課税</td>
            <td className="p-2 border">{taxRate}</td>
            <td className="p-2 border">{includingTax.toLocaleString()}</td>
            <td className="p-2 border">{excludingTax.toLocaleString()}</td>
            <td className="p-2 border">{consumptionTax.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 flex justify-end space-x-2">
        <button className="bg-gray-300 px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default TaxSummary;
```