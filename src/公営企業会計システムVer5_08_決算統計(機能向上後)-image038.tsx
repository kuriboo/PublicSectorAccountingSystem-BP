import React from 'react';

type Segment = {
  code: string;
  name: string;
  amount: number;
  ratio: number;
};

type Props = {
  year: string;
  totalAmount: number;
  segments: Segment[];
};

const FinancialSummary: React.FC<Props> = ({ year, totalAmount, segments }) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">{year}年度</h2>
      
      <div className="flex justify-between mb-4">
        <div>
          <p>振替</p>
          <p>事業 171 公共下水道</p>
          <p>大分類 010 下水道事業収益</p>
          <p>中分類 010 営業収益</p>
          <p>小分類 010 下水道使用料</p>
        </div>
        <div>
          <p>性質</p>
          <p>事業</p>
          <p>大分類</p>
          <p>中分類</p>
          <p>小分類</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="font-bold">決算金額 {totalAmount.toLocaleString()} 千円</p>
      </div>
      
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">施設決算統計セグメント</th>
            <th className="border border-gray-300 px-4 py-2">施設決算統計セグメント名</th>
            <th className="border border-gray-300 px-4 py-2">決算金額</th>
            <th className="border border-gray-300 px-4 py-2">構成比率(%)</th>
          </tr>
        </thead>
        <tbody>
          {segments.map(segment => (
            <tr key={segment.code}>
              <td className="border border-gray-300 px-4 py-2">{segment.code}</td>
              <td className="border border-gray-300 px-4 py-2">{segment.name}</td>
              <td className="border border-gray-300 px-4 py-2">{segment.amount.toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">{segment.ratio.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialSummary;

// Example usage
/*
<FinancialSummary 
  year="令和002" 
  totalAmount={107840} 
  segments={[
    { code: "1710001", name: "汚水", amount: 107840, ratio: 100.0 },
    { code: "1710002", name: "雨水", amount: 0, ratio: 0.0 }
  ]}
/>
*/
