import React from 'react';

type TaxDetail = {
  taxDivision: string;
  taxRate: string;
  withTaxAmount: number;
  withoutTaxAmount: number;
  consumptionTax: number;
};

type TaxSummaryProps = {
  taxDetails: TaxDetail[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const TaxSummary: React.FC<TaxSummaryProps> = ({ taxDetails, onOk, onClear, onCancel }) => {
  const totalWithTax = taxDetails.reduce((acc, detail) => acc + detail.withTaxAmount, 0);
  const totalWithoutTax = taxDetails.reduce((acc, detail) => acc + detail.withoutTaxAmount, 0);
  const totalConsumptionTax = taxDetails.reduce((acc, detail) => acc + detail.consumptionTax, 0);

  return (
    <div className="p-4 border rounded-md">
      <div className="border p-2 mb-4">
        <h2 className="font-bold text-center mb-2">入力金額合計</h2>
        <div className="flex justify-between">
          <span>税込額</span>
          <span>{totalWithTax.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>税抜額</span>
          <span>{totalWithoutTax.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>消費税額</span>
          <span>{totalConsumptionTax.toLocaleString()}</span>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border px-2 py-1">税区分</th>
            <th className="border px-2 py-1">消費税率</th>
            <th className="border px-2 py-1">税込額</th>
            <th className="border px-2 py-1">税抜額</th>
            <th className="border px-2 py-1">消費税額</th>
          </tr>
        </thead>
        <tbody>
          {taxDetails.map((detail, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{detail.taxDivision}</td>
              <td className="border px-2 py-1">{detail.taxRate}</td>
              <td className="border px-2 py-1">{detail.withTaxAmount.toLocaleString()}</td>
              <td className="border px-2 py-1">{detail.withoutTaxAmount.toLocaleString()}</td>
              <td className="border px-2 py-1">{detail.consumptionTax.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onOk} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default TaxSummary;
```