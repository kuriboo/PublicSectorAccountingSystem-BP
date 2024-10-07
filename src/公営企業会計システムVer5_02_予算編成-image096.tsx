import React from 'react';

type CalculationFormProps = {
  lineNumber: number;
  unitPrice: number;
  calculationBasis: string;
  taxRate: number;
  quantity: number;
  unit: string;
  totalAmount: number;
  includeTax: boolean;
  onCalculate: () => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const CalculationForm: React.FC<CalculationFormProps> = ({
  lineNumber,
  unitPrice,
  calculationBasis,
  taxRate,
  quantity,
  unit,
  totalAmount,
  includeTax,
  onCalculate,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="mb-2">
        <label className="block font-bold">行番号</label>
        <input type="number" value={lineNumber} className="border px-2 py-1 w-full" readOnly />
      </div>

      <div className="mb-2">
        <label className="block font-bold">単価コード</label>
        <input type="text" className="border px-2 py-1 w-full" />
      </div>

      <div className="mb-2">
        <label className="block font-bold">積算基礎</label>
        <input type="text" value={calculationBasis} className="border px-2 py-1 w-full" readOnly />
      </div>

      <div className="flex mb-2">
        <div className="mr-4">
          <label className="block font-bold">積算基礎計算用消費税率 (%)</label>
          <input type="number" value={taxRate} className="border px-2 py-1 w-full" readOnly />
        </div>
        <div>
          <label className="block font-bold">税込</label>
          <div>{unitPrice.toLocaleString()}</div>
        </div>
      </div>

      <div className="mb-2 border p-2">
        <div className="flex mb-2">
          <div className="mr-2 flex-grow">
            <label className="block font-bold">単価</label>
            <input type="text" value={unitPrice} className="border px-2 py-1 w-full" readOnly />
          </div>
          <div className="mr-2">
            <label className="block font-bold">式番号</label>
            <input type="number" className="border px-2 py-1 w-full" readOnly />
          </div>
          <div className="flex items-center">
            <button className="px-2 py-1 border bg-blue-500 text-white rounded" onClick={onCalculate}>式披露</button>
          </div>
        </div>
        
        <div className="flex mb-2">
          <div className="mr-2 flex-grow">
            <label className="block font-bold">数量</label>
            <input type="number" value={quantity} className="border px-2 py-1 w-full" readOnly />
          </div>
          <div className="mr-2">
            <label className="block font-bold">単位</label>
            <input type="text" value={unit} className="border px-2 py-1 w-full" readOnly />
          </div>
          <div>
            <label className="block font-bold">金額 (円)</label>
            <input type="number" value={totalAmount} className="border px-2 py-1 w-full" readOnly />
          </div>
        </div>
      </div>

      <div className="flex items-center mb-2">
        <input type="checkbox" checked={includeTax} className="mr-2" readOnly />
        <label>積み上げする</label>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 border bg-green-500 text-white rounded" onClick={onOk}>OK</button>
        <button className="px-4 py-2 border bg-yellow-500 text-white rounded" onClick={onClear}>クリア</button>
        <button className="px-4 py-2 border bg-red-500 text-white rounded" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default CalculationForm;
