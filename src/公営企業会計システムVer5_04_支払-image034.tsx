import React from 'react';

type TaxDetails = {
  taxType: string;
  taxRate: string;
  taxIncludedAmount: number;
  taxExcludedAmount: number;
  consumptionTaxAmount: number;
};

type TaxSummaryProps = {
  totalIncludedAmount: number;
  totalExcludedAmount: number;
  totalTaxAmount: number;
  taxDetails: TaxDetails[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const TaxSummary: React.FC<TaxSummaryProps> = ({
  totalIncludedAmount,
  totalExcludedAmount,
  totalTaxAmount,
  taxDetails,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded">
      {/* Total Amounts */}
      <div className="mb-4 border-b pb-2">
        <h3 className="mb-2 text-lg font-bold text-blue-700">入力金額合計</h3>
        <div className="flex justify-between">
          <span>税込額</span>
          <span>{totalIncludedAmount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>税抜額</span>
          <span>{totalExcludedAmount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>消費税額</span>
          <span>{totalTaxAmount.toLocaleString()}</span>
        </div>
      </div>

      {/* Tax Details Table */}
      <table className="w-full table-auto text-sm">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="p-2">税区分</th>
            <th className="p-2">消費税率</th>
            <th className="p-2">税込額</th>
            <th className="p-2">税抜額</th>
            <th className="p-2">消費税額</th>
          </tr>
        </thead>
        <tbody>
          {taxDetails.map((detail, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{detail.taxType}</td>
              <td className="p-2">{detail.taxRate}</td>
              <td className="p-2">{detail.taxIncludedAmount.toLocaleString()}</td>
              <td className="p-2">{detail.taxExcludedAmount.toLocaleString()}</td>
              <td className="p-2 text-right">{detail.consumptionTaxAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}
      <div className="mt-4 flex justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClear}>クリア</button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onCancel}>キャンセル</button>
        <button className="px-4 py-2 bg-blue-700 text-white rounded" onClick={onConfirm}>OK</button>
      </div>
    </div>
  );
};

export default TaxSummary;