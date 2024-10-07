// components/AdjustmentForm.tsx

import React, { useState } from 'react';

// TypeScriptの型定義
type Props = {
  initialTaxRate: number;
  onSubmit: (data: FormData) => void;
};

type FormData = {
  budgetCategory: string;
  taxAdjustmentRate: string;
  description: string;
  adjustmentAmount: number;
  calculatedAmount: number;
};

// コンポーネント本体
const AdjustmentForm: React.FC<Props> = ({ initialTaxRate, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    budgetCategory: '3条',
    taxAdjustmentRate: `${initialTaxRate}%`,
    description: '',
    adjustmentAmount: 0,
    calculatedAmount: 0,
  });

  // 入力が変更されたときのイベントハンドラ
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // フォームが送信されたときのイベントハンドラ
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      {/* 予算区分 */}
      <div className="mb-4">
        <label className="block text-gray-700">予算区分</label>
        <div className="flex space-x-4">
          {['3条', '4条', 'その他'].map((category) => (
            <label key={category}>
              <input
                type="radio"
                name="budgetCategory"
                value={category}
                checked={formData.budgetCategory === category}
                onChange={handleChange}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* 税率 */}
      <div className="mb-4">
        <label className="block text-gray-700">
          免税事業者との取引における経過措置控除割合
        </label>
        <select
          name="taxAdjustmentRate"
          value={formData.taxAdjustmentRate}
          onChange={handleChange}
          className="block w-full mt-1"
        >
          {[80, 90, 100].map((rate) => (
            <option key={rate} value={`${rate}%`}>
              {rate}%
            </option>
          ))}
        </select>
      </div>

      {/* 説明 */}
      <div className="mb-4">
        <label className="block text-gray-700">説明</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="block w-full mt-1"
        />
      </div>

      {/* 調整対象額 */}
      <div className="mb-4">
        <label className="block text-gray-700">調整対象額</label>
        <input
          type="number"
          name="adjustmentAmount"
          value={formData.adjustmentAmount}
          onChange={handleChange}
          className="block w-full mt-1"
        />
      </div>

      {/* 取戻し加算調整額 */}
      <div className="mb-4">
        <label className="block text-gray-700">取戻し加算調整額</label>
        <input
          type="number"
          name="calculatedAmount"
          value={formData.calculatedAmount}
          onChange={handleChange}
          className="block w-full mt-1"
        />
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          行確定
        </button>
        <button type="button" className="px-4 py-2 bg-gray-300 text-black rounded" onClick={() => console.log('Action Cancelled')}>
          行キャンセル
        </button>
      </div>
    </form>
  );
};

export default AdjustmentForm;
```