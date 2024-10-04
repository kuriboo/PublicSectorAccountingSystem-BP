```tsx
// components/FormComponent.tsx
import React from 'react';

type SizeOption = {
  code: string;
  name: string;
  price: number;
};

type FormComponentProps = {
  categories: string[];
  sizeOptions: SizeOption[];
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  categories,
  sizeOptions,
  onSubmit,
  onClear,
  onCancel,
}) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>(categories[0]);
  const [selectedSize, setSelectedSize] = React.useState<string>(sizeOptions[0].code);
  const [quantity, setQuantity] = React.useState<number>(1);
  const [taxRate, setTaxRate] = React.useState<number>(0);

  const selectedOption = sizeOptions.find(option => option.code === selectedSize);
  const basePrice = selectedOption ? selectedOption.price : 0;
  const priceWithTax = basePrice * (1 + taxRate / 100);

  return (
    <div className="p-4 border rounded shadow-md max-w-md">
      {/* Category Selection */}
      <div className="mb-4">
        <label className="block mb-2">納付分類</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Size Selection */}
      <div className="mb-4">
        <label className="block mb-2">口径選択</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {sizeOptions.map(option => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      {/* Price and Quantity */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2">単価</label>
          <input
            type="text"
            value={basePrice.toLocaleString()}
            readOnly
            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2">数量</label>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Tax and Total */}
      <div className="mb-4">
        <label className="block mb-2">消費税率</label>
        <input
          type="number"
          min={0}
          max={100}
          value={taxRate}
          onChange={(e) => setTaxRate(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <div className="mt-2 text-right">
          消費税額: {(basePrice * taxRate / 100).toLocaleString()}
        </div>
        <div className="mt-2 text-right">
          金額: {priceWithTax.toLocaleString()}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onSubmit}
          className="p-2 bg-blue-600 text-white rounded shadow"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="p-2 bg-gray-600 text-white rounded shadow"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="p-2 bg-red-600 text-white rounded shadow"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```