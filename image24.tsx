```tsx
import React, { useState } from 'react';

// Type definitions for props
type MyComponentProps = {
  categories: string[];
  mouthOptions: string[];
  shapes: { code: number; name: string; price: number }[];
  unitPrice: number;
  taxRate: number;
};

const MyComponent: React.FC<MyComponentProps> = ({
  categories,
  mouthOptions,
  shapes,
  unitPrice,
  taxRate,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [selectedMouth, setSelectedMouth] = useState<string>(mouthOptions[0]);
  const [selectedShape, setSelectedShape] = useState<number>(shapes[0].code);

  // Calculate total price and tax
  const totalPrice = unitPrice * quantity;
  const taxAmount = totalPrice * (taxRate / 100);

  return (
    <div className="p-4 border rounded-md bg-gray-100">
      <div className="flex flex-col mb-4">
        <label htmlFor="category" className="mb-1">納付分類</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="mouth" className="mb-1">口径選択</label>
        <select
          id="mouth"
          value={selectedMouth}
          onChange={(e) => setSelectedMouth(e.target.value)}
          className="p-2 border rounded-md"
        >
          {mouthOptions.map((mouth) => (
            <option key={mouth} value={mouth}>
              {mouth}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="shape" className="mb-1">形状名称</label>
        <select
          id="shape"
          value={selectedShape}
          onChange={(e) => setSelectedShape(Number(e.target.value))}
          className="p-2 border rounded-md"
        >
          {shapes.map((shape) => (
            <option key={shape.code} value={shape.code}>
              {shape.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="quantity" className="mb-1">数量</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="p-2 border rounded-md"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <div>単価: {unitPrice.toLocaleString()}</div>
        <div>金額: {totalPrice.toLocaleString()}</div>
        <div>消費税額: {taxAmount.toLocaleString()}</div>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-300 rounded-full">クリア</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full">OK</button>
        <button className="px-4 py-2 bg-gray-300 rounded-full">キャンセル</button>
      </div>
    </div>
  );
};

export default MyComponent;
```