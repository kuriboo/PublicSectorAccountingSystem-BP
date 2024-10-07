// components/CashFlowAdjustment.tsx
import React from 'react';

// 定義可能なプロパティの型を定義
interface CashFlowAdjustmentProps {
  fiscalYear: number;
  fiscalMonth: number;
  adjustmentData: {
    id: number;
    itemName: string;
    itemType: string;
    monthlyAmount: number;
    yearlyAmount: number;
    adjustmentAmount: number;
    finalAmount: number;
  }[];
}

const CashFlowAdjustment: React.FC<CashFlowAdjustmentProps> = ({ 
  fiscalYear, 
  fiscalMonth, 
  adjustmentData 
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <header className="mb-4">
        <h1 className="text-xl font-bold">キャッシュ・フロー調整額入力</h1>
        <p>令和 {fiscalYear} 年度 {fiscalMonth} 月</p>
      </header>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className="border p-2">集計番号</th>
            <th className="border p-2">項目名称1</th>
            <th className="border p-2">項目区分</th>
            <th className="border p-2">月別集計金額</th>
            <th className="border p-2">集計金額</th>
            <th className="border p-2">調整金額</th>
            <th className="border p-2">調整後金額</th>
          </tr>
        </thead>
        <tbody>
          {adjustmentData.map(data => (
            <tr key={data.id} className="hover:bg-gray-100">
              <td className="border p-2">{data.id}</td>
              <td className="border p-2">{data.itemName}</td>
              <td className="border p-2">{data.itemType}</td>
              <td className="border p-2 text-right">{data.monthlyAmount.toLocaleString()}</td>
              <td className="border p-2 text-right">{data.yearlyAmount.toLocaleString()}</td>
              <td className="border p-2 text-right">{data.adjustmentAmount.toLocaleString()}</td>
              <td className="border p-2 text-right">{data.finalAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const adjustmentData = [
  { id: 1, itemName: '業務活動によるキャッシュ・フロー', itemType: '明細見出し', monthlyAmount: 504550064, yearlyAmount: 504550064, adjustmentAmount: 0, finalAmount: 504550064 },
  // 他のデータは省略
];

const App: React.FC = () => {
  return (
    <div>
      <CashFlowAdjustment fiscalYear={4} fiscalMonth={4} adjustmentData={adjustmentData} />
    </div>
  );
};

export default App;
