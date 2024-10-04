```tsx
import React from 'react';

type FormComponentProps = {
  shapeOptions: string[];
  selectedShape: string;
  onShapeChange: (shape: string) => void;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  price: number;
  onPriceChange: (price: number) => void;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  shapeOptions,
  selectedShape,
  onShapeChange,
  quantity,
  onQuantityChange,
  price,
  onPriceChange,
  onConfirm,
  onClear,
  onCancel,
}) => {
  // Calculate the amount based on price and quantity
  const amount = price * quantity;
  // Assuming tax rate is a fixed value for simplicity
  const taxRate = 0.1;
  const taxAmount = amount * taxRate;

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {/* Shape selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">形状名</label>
        <select
          value={selectedShape}
          onChange={(e) => onShapeChange(e.target.value)}
          className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {shapeOptions.map((shape) => (
            <option key={shape} value={shape}>
              {shape}
            </option>
          ))}
        </select>
      </div>

      {/* Price input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">単価</label>
        <input
          type="number"
          value={price}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          min="0"
        />
      </div>

      {/* Quantity input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">数量</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => onQuantityChange(Number(e.target.value))}
          className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          min="1"
        />
      </div>

      {/* Computed Amount and Tax */}
      <div className="mb-4">
        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-700">金額</span>
          <span className="text-sm text-gray-900">{amount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm font-medium text-gray-700">消費税額</span>
          <span className="text-sm text-gray-900">{taxAmount.toLocaleString()}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-500"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```