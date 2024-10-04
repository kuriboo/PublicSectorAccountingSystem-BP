```tsx
import React, { ChangeEvent, FC, useState } from 'react';

// TypeScriptの型定義
interface Props {
  taxDivisionOptions: string[];
  incomeDivisionOptions: string[];
  defaultTaxRate: number;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  transferAmount: number;
  mainAmount: number;
  taxRate: number;
  taxAmount: number;
}

// コンポーネントの定義
const PaymentForm: FC<Props> = ({
  taxDivisionOptions,
  incomeDivisionOptions,
  defaultTaxRate,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    transferAmount: 440000,
    mainAmount: 400000,
    taxRate: defaultTaxRate,
    taxAmount: 40000,
  });

  // 入力変更時のハンドラー
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'taxRate' || name === 'transferAmount' ? parseFloat(value) : value,
    });
  };

  // フォーム送信時のハンドラー
  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <div className="mb-4">
        {/* 税区分 */}
        <label className="block text-gray-700">税区分</label>
        <select name="taxDivision" className="block w-full mt-1 p-2 border border-gray-300 rounded">
          {taxDivisionOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        {/* 収入区分 */}
        <label className="block text-gray-700">収入区分</label>
        <select name="incomeDivision" className="block w-full mt-1 p-2 border border-gray-300 rounded">
          {incomeDivisionOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        {/* 振替額 */}
        <label className="block text-gray-700">振替額</label>
        <input
          type="number"
          name="transferAmount"
          value={formData.transferAmount}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        {/* 本体金額 */}
        <label className="block text-gray-700">本体金額</label>
        <input
          type="number"
          name="mainAmount"
          value={formData.mainAmount}
          readOnly
          className="block w-full mt-1 p-2 border border-gray-300 rounded bg-gray-100"
        />
      </div>

      <div className="mb-4">
        {/* 消費税率 */}
        <label className="block text-gray-700">消費税率</label>
        <input
          type="number"
          name="taxRate"
          value={formData.taxRate}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        {/* 消費税額 */}
        <label className="block text-gray-700">消費税額</label>
        <input
          type="number"
          name="taxAmount"
          value={formData.taxAmount}
          readOnly
          className="block w-full mt-1 p-2 border border-gray-300 rounded bg-gray-100"
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          摘要
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
```