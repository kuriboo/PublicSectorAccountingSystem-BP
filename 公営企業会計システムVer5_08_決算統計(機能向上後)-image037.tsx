```tsx
import React from 'react';

// Type definitions for the component props
interface FinancialData {
  segmentCode: string;
  segmentName: string;
  taxAmount: number;
  consumptionTax: number;
  totalAmount: number;
  compositionRatio: number;
}

interface FinancialTableProps {
  year: string;
  projects: string[];
  financialData: FinancialData[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const FinancialTable: React.FC<FinancialTableProps> = ({
  year,
  projects,
  financialData,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <div className="text-center mb-4">
        <h1 className="font-bold">施設決済セグメント金額調整（予算科目）</h1>
        <p className="font-semibold">令和{year}年度</p>
      </div>
      <div className="mb-4">
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
      <table className="table-auto w-full text-sm text-left border-separate">
        <thead>
          <tr>
            <th className="px-2 py-1 border">施設決済セグメント</th>
            <th className="px-2 py-1 border">施設決済セグメント名</th>
            <th className="px-2 py-1 border">税抜額</th>
            <th className="px-2 py-1 border">消費税額</th>
            <th className="px-2 py-1 border">税込額</th>
            <th className="px-2 py-1 border">構成比率(%)</th>
          </tr>
        </thead>
        <tbody>
          {financialData.map((data) => (
            <tr key={data.segmentCode} className="hover:bg-gray-100">
              <td className="px-2 py-1 border">{data.segmentCode}</td>
              <td className="px-2 py-1 border">{data.segmentName}</td>
              <td className="px-2 py-1 border">{data.taxAmount.toLocaleString()}</td>
              <td className="px-2 py-1 border">{data.consumptionTax.toLocaleString()}</td>
              <td className="px-2 py-1 border">{data.totalAmount.toLocaleString()}</td>
              <td className="px-2 py-1 border">{data.compositionRatio.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 mr-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default FinancialTable;

// Example usage:
// <FinancialTable
//   year="002"
//   projects={["公共下水道", "下水道事業収益", "営業収益", "下水道使用料"]}
//   financialData={[{
//     segmentCode: "17100011",
//     segmentName: "汚水",
//     taxAmount: 107840,
//     consumptionTax: 10783,
//     totalAmount: 118623,
//     compositionRatio: 100.0000,
//   }]}
//   onConfirm={() => console.log("Confirmed")}
//   onClear={() => console.log("Cleared")}
//   onCancel={() => console.log("Cancelled")}
// />
```