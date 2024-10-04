```tsx
import React from 'react';

// 型定義
type InvoiceEntryProps = {
  fiscalYear: string;
  voucherNumber: number;
  date: string;
  summary1: string;
  summary2: string;
  taxIncludedAmount: number;
  taxExcludedAmount: number;
  consumptionTax: number;
};

// コンポーネント定義
const InvoiceEntry: React.FC<InvoiceEntryProps> = ({
  fiscalYear,
  voucherNumber,
  date,
  summary1,
  summary2,
  taxIncludedAmount,
  taxExcludedAmount,
  consumptionTax,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      {/* テーブル */}
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-gray-500 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-4 py-2">摘要2</th>
            <th scope="col" className="px-4 py-2">振替年度</th>
            <th scope="col" className="px-4 py-2">振替番号</th>
            <th scope="col" className="px-4 py-2">伝票日付</th>
            <th scope="col" className="px-4 py-2">摘要1</th>
            <th scope="col" className="px-4 py-2">税込額</th>
            <th scope="col" className="px-4 py-2">税抜額</th>
            <th scope="col" className="px-4 py-2">消費税額</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">{summary2}</td>
            <td className="px-4 py-2">{fiscalYear}</td>
            <td className="px-4 py-2">{voucherNumber}</td>
            <td className="px-4 py-2">{date}</td>
            <td className="px-4 py-2">{summary1}</td>
            <td className="px-4 py-2">{taxIncludedAmount.toLocaleString()}</td>
            <td className="px-4 py-2">{taxExcludedAmount.toLocaleString()}</td>
            <td className="px-4 py-2">{consumptionTax.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      {/* ボタン */}
      <div className="flex justify-end mt-4 space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">OK</button>
        <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">終了</button>
      </div>
    </div>
  );
};

export default InvoiceEntry;
```