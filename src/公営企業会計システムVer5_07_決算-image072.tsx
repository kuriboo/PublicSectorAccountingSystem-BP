// components/TaxAdjustmentForm.tsx
import React from 'react';

interface TaxAdjustmentFormProps {
  initialTaxAmount: number;
  initialExemptionAmount: number;
  initialConsumptionTaxAmount: number;
  onConfirm: () => void;
  onCancel: () => void;
}

const TaxAdjustmentForm: React.FC<TaxAdjustmentFormProps> = ({
  initialTaxAmount,
  initialExemptionAmount,
  initialConsumptionTaxAmount,
  onConfirm,
  onCancel,
}) => {
  const [taxRate, setTaxRate] = React.useState<number>(8);

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-medium mb-4">税調整入力</h2>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>税区分</div>
        <div className="col-span-3">
          <select className="border p-2 rounded w-full">
            <option>課税</option>
            <option>免税</option>
          </select>
        </div>

        <div>税率</div>
        <input
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(Number(e.target.value))}
          className="border p-2 rounded w-full"
        />

        <div>税込額</div>
        <div>{initialTaxAmount.toLocaleString()} 円</div>

        <div>税抜額</div>
        <div>{initialExemptionAmount.toLocaleString()} 円</div>

        <div>消費税額</div>
        <div>{initialConsumptionTaxAmount.toLocaleString()} 円</div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          行確定
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default TaxAdjustmentForm;
