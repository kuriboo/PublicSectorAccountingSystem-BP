```tsx
// Import necessary libraries
import React from 'react';

// Define the type for the component props
type VoucherDecisionProps = {
  decisionNumber: string;
  payee: string;
  summary: string;
  decisionAmount: number;
  decisionDate: string;
  paymentDate: string;
};

// Create a functional component with TypeScript
const VoucherDecision: React.FC<VoucherDecisionProps> = ({
  decisionNumber,
  payee,
  summary,
  decisionAmount,
  decisionDate,
  paymentDate,
}) => {
  return (
    <div className="p-4 border rounded-md bg-gray-100">
      <h1 className="text-xl font-bold text-purple-800 mb-4">振替伝票決裁確定</h1>

      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-purple-200">
            <th className="p-2">決定番号</th>
            <th className="p-2">支払先</th>
            <th className="p-2">摘要</th>
            <th className="p-2">決定額</th>
            <th className="p-2">決定処理日</th>
            <th className="p-2">支払日</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="p-2">{decisionNumber}</td>
            <td className="p-2">{payee}</td>
            <td className="p-2">{summary}</td>
            <td className="p-2">{decisionAmount.toLocaleString()}</td>
            <td className="p-2">{decisionDate}</td>
            <td className="p-2">{paymentDate}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 flex justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-200 border rounded-md hover:bg-gray-300">エラー確認</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">OK</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">クリア</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">終了</button>
      </div>
    </div>
  );
};

export default VoucherDecision;
```