```tsx
import React from 'react';

// Props interface for the component
interface ExpenseReportProps {
  title: string;
  dateRange: string;
  reportNumber: string;
  generateDate: string;
  totalAmount: number;
  details: Array<{
    item: string;
    amount: number;
    tax: number;
    total: number;
    description?: string;
  }>;
}

const ExpenseReport: React.FC<ExpenseReportProps> = ({
  title,
  dateRange,
  reportNumber,
  generateDate,
  totalAmount,
  details,
}) => {
  return (
    <div className="p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <div className="mb-3 text-sm text-gray-600">
        <p>{`期間: ${dateRange}`}</p>
        <p>{`レポート番号: ${reportNumber}`}</p>
        <p>{`作成日: ${generateDate}`}</p>
      </div>
      <table className="min-w-full divide-y divide-gray-200 mb-4">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 py-2 text-left text-sm font-medium text-gray-500">項目</th>
            <th className="px-2 py-2 text-right text-sm font-medium text-gray-500">金額</th>
            <th className="px-2 py-2 text-right text-sm font-medium text-gray-500">税</th>
            <th className="px-2 py-2 text-right text-sm font-medium text-gray-500">合計</th>
            <th className="px-2 py-2 text-left text-sm font-medium text-gray-500">摘要</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {details.map((detail, index) => (
            <tr key={index}>
              <td className="px-2 py-2 text-sm text-gray-700">{detail.item}</td>
              <td className="px-2 py-2 text-sm text-right text-gray-700">{detail.amount.toLocaleString()}円</td>
              <td className="px-2 py-2 text-sm text-right text-gray-700">{detail.tax.toLocaleString()}円</td>
              <td className="px-2 py-2 text-sm text-right text-gray-700">{detail.total.toLocaleString()}円</td>
              <td className="px-2 py-2 text-sm text-gray-700">{detail.description || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right text-lg font-semibold text-gray-800">
        {`総計: ${totalAmount.toLocaleString()}円`}
      </div>
    </div>
  );
};

export default ExpenseReport;
```