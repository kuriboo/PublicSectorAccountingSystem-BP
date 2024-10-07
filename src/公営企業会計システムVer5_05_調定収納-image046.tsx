import React from 'react';

// 型定義
type TaxFormProps = {
  section: string;
  subSection: string;
  detail: string;
  dueAmount: number;
  beforeIncrement: number;
  increment: number;
  totalAfterIncrement: number;
  internalConsumptionTax: number;
  specificIncome: number;
  consumptionRateOptions: number[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const TaxForm: React.FC<TaxFormProps> = ({
  section,
  subSection,
  detail,
  dueAmount,
  beforeIncrement,
  increment,
  totalAfterIncrement,
  internalConsumptionTax,
  specificIncome,
  consumptionRateOptions,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <p className="text-lg">{section}</p>
        <p>{subSection}</p>
        <p>{detail}</p>
        <p className="font-bold">未納額 {dueAmount.toLocaleString()}</p>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">税区分</label>
        <div className="flex items-center">
          <label className="mr-2">課税</label>
          <span>消費税率</span>
          <select className="ml-2 border border-gray-300 rounded p-1">
            {consumptionRateOptions.map((rate) => (
              <option key={rate} value={rate}>
                {rate}
              </option>
            ))}
          </select>
          <span>%</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">調定金額</label>
        <div className="flex">
          <span className="w-32">{beforeIncrement.toLocaleString()}</span>
          <input
            type="text"
            value={beforeIncrement}
            readOnly
            className="border border-gray-300 rounded p-1 ml-2 w-32"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">内消費税額</label>
        <input
          type="text"
          value={internalConsumptionTax}
          readOnly
          className="border border-gray-300 rounded p-1 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">特定収入</label>
        <input
          type="text"
          value={specificIncome}
          readOnly
          className="border border-gray-300 rounded p-1 w-full"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default TaxForm;
