```tsx
// Import necessary dependencies
import React from 'react';

// Define the props type
type TaxAdjustmentFormProps = {
  fiscalYear: string;
  taxData: Array<{
    type: string;
    baseRate: number;
    localRate: number;
    taxIncluded: number;
    taxExcluded: number;
    consumptionTax: number;
  }>;
  onEdit: () => void;
  onDelete: () => void;
  onConfirm: () => void;
  onCancel: () => void;
};

// Define the TaxAdjustmentForm component
const TaxAdjustmentForm: React.FC<TaxAdjustmentFormProps> = ({
  fiscalYear,
  taxData,
  onEdit,
  onDelete,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h1 className="text-lg font-bold">特例的未収未払調整入力</h1>
      <div className="my-2">
        <span className="font-semibold">会計年度: </span>
        <span>{fiscalYear}</span>
      </div>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="bg-blue-200">
            <th className="border px-2 py-1">税区分</th>
            <th className="border px-2 py-1">消費税率及び地方消費税率</th>
            <th className="border px-2 py-1">地方消費税率</th>
            <th className="border px-2 py-1">税込額</th>
            <th className="border px-2 py-1">税抜額</th>
            <th className="border px-2 py-1">消費税額</th>
          </tr>
        </thead>
        <tbody>
          {taxData.map((data, index) => (
            <tr key={index} className="text-center bg-white">
              <td className="border px-2 py-1">{data.type}</td>
              <td className="border px-2 py-1">{data.baseRate.toFixed(2)}</td>
              <td className="border px-2 py-1">{data.localRate}</td>
              <td className="border px-2 py-1">{data.taxIncluded.toLocaleString()}</td>
              <td className="border px-2 py-1">{data.taxExcluded.toLocaleString()}</td>
              <td className="border px-2 py-1">{data.consumptionTax.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button onClick={onEdit} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">編集</button>
        <button onClick={onDelete} className="px-4 py-2 bg-gray-300 text-black rounded-md">行削除</button>
      </div>
      <div className="mt-4">
        <button onClick={onConfirm} className="px-4 py-2 bg-green-500 text-white rounded-md mr-2">OK</button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded-md">終了</button>
      </div>
    </div>
  );
};

export default TaxAdjustmentForm;
```