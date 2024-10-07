// ExpenseSummary.tsx
import React, { FC } from 'react';
import 'tailwindcss/tailwind.css';

interface ExpenseSummaryProps {
  year: string;
  calculationAmount: number;
  currencyUnit: string;
  details: {
    job: string;
    accountCode: string;
    accountName: string;
    propertyCode: string;
    propertyName: string;
    amount: number;
    compositionRatio: number;
  }[];
  onConfirmData: () => void;
  onUpdateRatio: () => void;
}

const ExpenseSummary: FC<ExpenseSummaryProps> = ({
  year,
  calculationAmount,
  currencyUnit,
  details,
  onConfirmData,
  onUpdateRatio,
}) => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-md">
      <h1 className="text-center text-lg font-bold mb-4">{year} 年度</h1>
      
      <div className="mb-4">
        <span className="text-sm font-medium">決算金額:</span>
        <span className="ml-2 text-lg font-semibold">{calculationAmount.toLocaleString()}</span>
        <span className="ml-1">{currencyUnit}</span>
      </div>

      <table className="w-full bg-gray-200 text-center border-collapse">
        <thead>
          <tr className="bg-gray-300">
            <th>事業</th>
            <th>振替コード</th>
            <th>振替名</th>
            <th>性質コード</th>
            <th>性質名</th>
            <th>決算金額</th>
            <th>構成比率(%)</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} className="border-b">
              <td>{detail.job}</td>
              <td>{detail.accountCode}</td>
              <td>{detail.accountName}</td>
              <td>{detail.propertyCode}</td>
              <td>{detail.propertyName}</td>
              <td>{detail.amount.toLocaleString()}</td>
              <td>{detail.compositionRatio.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="my-4">
        <label>
          <input type="checkbox" className="mr-2" />
          このデータを確認済みにする
        </label>
        <br />
        <label>
          <input type="checkbox" className="mr-2" />
          入力した構成比率を科目別振替性質マスタに更新する
        </label>
      </div>

      <div className="flex space-x-4 justify-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onConfirmData}>
          更新
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={onUpdateRatio}>
          終了
        </button>
      </div>
    </div>
  );
};

export default ExpenseSummary;
