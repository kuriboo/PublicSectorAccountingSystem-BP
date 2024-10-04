import React from 'react';

// TypeScriptの型定義
interface InvoiceEntryProps {
  year: string;
  slipNumber: string;
  slipDate: string;
  summary: string;
  taxedAmount: number;
  taxExcludedAmount: number;
  consumptionTaxAmount: number;
}

// 再利用可能なNext.js + TypeScriptコンポーネント
const InvoiceEntry: React.FC<InvoiceEntryProps> = ({
  year,
  slipNumber,
  slipDate,
  summary,
  taxedAmount,
  taxExcludedAmount,
  consumptionTaxAmount,
}) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <div className="mb-4">
        <span className="font-bold">年度: </span>
        <span>{year}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold">伝票番号: </span>
        <span>{slipNumber}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold">伝票日付: </span>
        <span>{slipDate}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold">摘要: </span>
        <span>{summary}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold">税込金額: </span>
        <span>{taxedAmount.toLocaleString()}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold">税抜金額: </span>
        <span>{taxExcludedAmount.toLocaleString()}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold">消費税額: </span>
        <span>{consumptionTaxAmount.toLocaleString()}</span>
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          OK
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          クリア
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InvoiceEntry;