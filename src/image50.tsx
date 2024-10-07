// components/TaxCalculationDetail.tsx
import React from 'react';

// TypeScript Interfaces
interface TaxDetail {
  title: string;
  date: string;
  amount: number;
  tax: number;
  total: number;
}

interface Props {
  data: TaxDetail[];
  summary: string;
}

// Functional Component
const TaxCalculationDetail: React.FC<Props> = ({ data, summary }) => {
  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4">消費税計算明細書</h1>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">項目</th>
            <th className="px-4 py-2">日付</th>
            <th className="px-4 py-2">金額</th>
            <th className="px-4 py-2">税額</th>
            <th className="px-4 py-2">総計</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-gray-100 odd:bg-white">
              <td className="border px-4 py-2">{item.title}</td>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">{item.amount.toLocaleString()}</td>
              <td className="border px-4 py-2">{item.tax.toLocaleString()}</td>
              <td className="border px-4 py-2">{item.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-lg font-semibold">概要</h2>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
};

export default TaxCalculationDetail;

// Example usage (in another component or page):
/*
import TaxCalculationDetail from './components/TaxCalculationDetail';

const data = [
  { title: '別納付金', date: '27.10.1', amount: 26027, tax: 1927, total: 24100 },
  // Add more items as needed
];

const summary = '総計: 2,030,112,070';

<TaxCalculationDetail data={data} summary={summary} />
*/
