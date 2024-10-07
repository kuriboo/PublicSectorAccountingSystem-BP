// Import necessary modules
import { FC } from 'react';

// Define the types for the component props
interface ReportProps {
  year: number;
  reportNumber: string;
  determinationDate: string;
  transactionDate: string;
  payer: string;
  summary: string;
  deadline: string;
  workplace: string;
  totalAmount: number;
  consumptionTax: number;
  specialIncome: number;
}

// Define the Report component using Tailwind CSS for styling
const Report: FC<ReportProps> = ({
  year,
  reportNumber,
  determinationDate,
  transactionDate,
  payer,
  summary,
  deadline,
  workplace,
  totalAmount,
  consumptionTax,
  specialIncome,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h1 className="text-xl font-bold text-indigo-600">
        調定日締解除入力（個別調定）
      </h1>
      
      <div className="mt-4">
        <label className="block text-gray-700">
          年度: <span className="font-semibold">{year}</span>
        </label>
        
        <label className="block text-gray-700">
          調定番号: <span className="font-semibold">{reportNumber}</span>
        </label>
      </div>

      <div className="my-4">
        <p>調定日: {determinationDate}</p>
        <p>取引日: {transactionDate}</p>
      </div>

      <div className="my-4">
        <p>債務者: {payer}</p>
        <p>摘要: {summary}</p>
      </div>

      <div className="my-4">
        <p>納入期限: {deadline}</p>
        <p>工事店: {workplace}</p>
      </div>

      <div className="my-4 border-t pt-4">
        <p>合計調定金額: <span className="font-bold">{totalAmount.toLocaleString()} 円</span></p>
        <p>合計消費税額: <span className="font-bold">{consumptionTax.toLocaleString()} 円</span></p>
        <p>合計特定収入: <span className="font-bold">{specialIncome.toLocaleString()} 円</span></p>
      </div>

      <div className="flex space-x-4 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default Report;
