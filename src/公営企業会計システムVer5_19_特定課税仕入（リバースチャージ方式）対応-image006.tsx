// Import necessary libraries
import React from 'react';

// Define the type for component properties
interface InvoiceInputProps {
  fiscalYear: string;
  slipNumber: string;
  slipDate: string;
  summary: string;
  inclusiveTaxAmount: number;
  exclusiveTaxAmount: number;
  consumptionTax: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Define the InvoiceInput component
const InvoiceInput: React.FC<InvoiceInputProps> = ({
  fiscalYear,
  slipNumber,
  slipDate,
  summary,
  inclusiveTaxAmount,
  exclusiveTaxAmount,
  consumptionTax,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <div className="text-lg font-bold mb-2">特定課税仕入伝票管理入力</div>
      
      <div className="mb-4">
        <label className="block font-semibold">年度: </label>
        <span>{fiscalYear}</span>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">振替番号: </label>
        <input
          type="text"
          value={slipNumber}
          readOnly
          className="border border-gray-300 p-1"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">伝票日付: </label>
        <span>{slipDate}</span>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">摘要: </label>
        <span>{summary}</span>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">税込金額: </label>
        <span>{inclusiveTaxAmount}</span>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">税抜金額: </label>
        <span>{exclusiveTaxAmount}</span>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">消費税額: </label>
        <span>{consumptionTax}</span>
      </div>

      <div className="flex space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white py-1 px-3 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-black py-1 px-3 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white py-1 px-3 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InvoiceInput;
