```tsx
// Import necessary libraries
import React from 'react';

type Option = {
  code: string;
  name: string;
  price: number;
};

type FormProps = {
  categories: string[];
  options: Option[];
  selectedCategory: string;
  selectedDiameter: string;
  amount: number;
  unitPrice: number;
  taxRate: number;
  onCategoryChange: (value: string) => void;
  onDiameterChange: (value: string) => void;
  onAmountChange: (value: number) => void;
  onTaxRateChange: (value: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const FormComponent: React.FC<FormProps> = ({
  categories,
  options,
  selectedCategory,
  selectedDiameter,
  amount,
  unitPrice,
  taxRate,
  onCategoryChange,
  onDiameterChange,
  onAmountChange,
  onTaxRateChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  // Calculate total and tax amount
  const totalPrice = unitPrice * amount;
  const taxAmount = (totalPrice * taxRate) / 100;

  return (
    <div className="bg-white p-4 shadow rounded-md space-y-4">
      {/* Category Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700">納付分類</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Diameter Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700">口径変更</label>
        <select
          value={selectedDiameter}
          onChange={(e) => onDiameterChange(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        >
          {options.map((option, index) => (
            <option key={index} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      {/* Price List */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">形状コード</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">形状名称</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">単価</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {options.map((option, index) => (
              <tr key={index}>
                <td className="px-3 py-2 whitespace-nowrap">{option.code}</td>
                <td className="px-3 py-2 whitespace-nowrap">{option.name}</td>
                <td className="px-3 py-2 whitespace-nowrap">{option.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Price and Amount */}
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">単価</label>
          <input
            type="text"
            value={unitPrice.toLocaleString()}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">数量</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">金額</label>
          <input
            type="text"
            value={totalPrice.toLocaleString()}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">消費税率</label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => onTaxRateChange(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">消費税額</label>
          <input
            type="text"
            value={taxAmount.toLocaleString()}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="flex-grow bg-blue-500 text-white font-medium py-2 rounded-md"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="flex-grow bg-gray-300 text-black font-medium py-2 rounded-md"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="flex-grow bg-gray-300 text-black font-medium py-2 rounded-md"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```