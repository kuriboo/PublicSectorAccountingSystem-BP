```tsx
import React from 'react';

// Propsの型定義
type TaxInvoiceProps = {
  year: number;
  serialNumber: number;
  date: string;
  description: string;
  inclusiveAmount: number;
  exclusiveAmount: number;
  taxAmount: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// 再利用可能なTaxInvoiceコンポーネント
const TaxInvoice: React.FC<TaxInvoiceProps> = ({
  year,
  serialNumber,
  date,
  description,
  inclusiveAmount,
  exclusiveAmount,
  taxAmount,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-96">
      {/* 年度と振替番号 */}
      <div className="mb-2">
        <span className="font-bold">年度: </span>
        {'平成' + year}
        <br />
        <span className="font-bold">振替番号: </span>
        {serialNumber}
      </div>
      
      {/* 伝票日付 */}
      <div className="mb-2">
        <span className="font-bold">伝票日付: </span>
        {date}
      </div>
      
      {/* 概要 */}
      <div className="mb-2">
        <span className="font-bold">概要: </span>
        {description}
      </div>
      
      {/* 金額情報 */}
      <div className="mb-4">
        <div>
          <span className="font-bold">税込金額: </span>
          {inclusiveAmount.toLocaleString()}
        </div>
        <div>
          <span className="font-bold">税抜金額: </span>
          {exclusiveAmount.toLocaleString()}
        </div>
        <div>
          <span className="font-bold">消費税額: </span>
          {taxAmount.toLocaleString()}
        </div>
      </div>
      
      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default TaxInvoice;
```