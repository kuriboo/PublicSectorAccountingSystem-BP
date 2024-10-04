```tsx
import React from 'react';

type TaxSummaryProps = {
  taxIncludedAmount: number;
  taxExcludedAmount: number;
  consumptionTaxAmount: number;
};

type TaxDetail = {
  taxCategory: string;
  consumptionTaxRate: string;
  taxIncludedAmount: number;
  taxExcludedAmount: number;
  consumptionTaxAmount: number;
};

type TaxDetailsProps = {
  details: TaxDetail[];
};

const TaxSummary: React.FC<TaxSummaryProps> = ({
  taxIncludedAmount,
  taxExcludedAmount,
  consumptionTaxAmount,
}) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h3 className="text-blue-700 mb-2">入力金額合計</h3>
      <div className="text-blue-700">
        <div>税込額: {taxIncludedAmount.toLocaleString()}</div>
        <div>税抜額: {taxExcludedAmount.toLocaleString()}</div>
        <div>消費税額: {consumptionTaxAmount.toLocaleString()}</div>
      </div>
    </div>
  );
};

const TaxDetails: React.FC<TaxDetailsProps> = ({ details }) => {
  return (
    <table className="min-w-full mt-4 border-collapse">
      <thead>
        <tr className="bg-blue-900 text-white">
          <th className="p-2 border">税区分</th>
          <th className="p-2 border">消費税率</th>
          <th className="p-2 border">税込額</th>
          <th className="p-2 border">税抜額</th>
          <th className="p-2 border">消費税額</th>
        </tr>
      </thead>
      <tbody>
        {details.map((detail, index) => (
          <tr key={index} className="odd:bg-white even:bg-blue-50 text-center">
            <td className="p-2 border">{detail.taxCategory}</td>
            <td className="p-2 border">{detail.consumptionTaxRate}</td>
            <td className="p-2 border">{detail.taxIncludedAmount.toLocaleString()}</td>
            <td className="p-2 border">{detail.taxExcludedAmount.toLocaleString()}</td>
            <td className="p-2 border">{detail.consumptionTaxAmount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TaxComponent: React.FC = () => {
  const summary = {
    taxIncludedAmount: 173251,
    taxExcludedAmount: 157500,
    consumptionTaxAmount: 15751,
  };

  const details: TaxDetail[] = [
    {
      taxCategory: '課税',
      consumptionTaxRate: '10.00%',
      taxIncludedAmount: 173251,
      taxExcludedAmount: 157500,
      consumptionTaxAmount: 15751,
    },
  ];

  return (
    <div className="max-w-lg mx-auto">
      <TaxSummary {...summary} />
      <TaxDetails details={details} />
      <div className="mt-4 text-blue-700 text-sm text-right">
        ※は軽減税率対象
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        <button className="px-4 py-2 bg-gray-200 rounded shadow">OK</button>
        <button className="px-4 py-2 bg-gray-200 rounded shadow">クリア</button>
        <button className="px-4 py-2 bg-gray-200 rounded shadow">キャンセル</button>
      </div>
    </div>
  );
};

export default TaxComponent;
```