```tsx
import React from 'react';

// タイプ定義
type InvoiceProps = {
  fiscalYear: string;
  serialNumber: string;
  date: string;
  summary: string;
  taxIncludedAmount: number;
  taxExcludedAmount: number;
  consumptionTax: number;
};

// コンポーネント
const Invoice: React.FC<InvoiceProps> = ({
  fiscalYear,
  serialNumber,
  date,
  summary,
  taxIncludedAmount,
  taxExcludedAmount,
  consumptionTax
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-full max-w-sm mx-auto">
      <h1 className="text-lg font-bold mb-2">{fiscalYear}年度</h1>
      <div className="mb-4">
        <span className="font-semibold">振替番号: </span>
        {serialNumber}
      </div>
      <div className="mb-4">
        <span className="font-semibold">伝票日付: </span>
        {date}
      </div>
      <div className="mb-4">
        <span className="font-semibold">摘要: </span>
        {summary}
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">税込金額: </span>
        <span>{taxIncludedAmount.toLocaleString()}円</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">税抜金額: </span>
        <span>{taxExcludedAmount.toLocaleString()}円</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">消費税額: </span>
        <span>{consumptionTax.toLocaleString()}円</span>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default Invoice;
```