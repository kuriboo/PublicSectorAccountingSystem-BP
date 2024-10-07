import React from 'react';

interface FormProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  diameter: string;
  onDiameterChange: (diameter: string) => void;
  unitPrice: number;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  amount: number;
  taxRate: number;
  onTaxRateChange: (taxRate: number) => void;
  taxAmount: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const Form: React.FC<FormProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  diameter,
  onDiameterChange,
  unitPrice,
  quantity,
  onQuantityChange,
  amount,
  taxRate,
  onTaxRateChange,
  taxAmount,
  onSubmit,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <div className="mb-4">
        <label className="block mb-2">納付分類</label>
        <select
          value={selectedCategory}
          onChange={(e) => onSelectCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">口径選択</label>
        <input
          type="text"
          value={diameter}
          onChange={(e) => onDiameterChange(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4 flex items-center">
        <div className="flex-1">
          <label className="block mb-2">単価</label>
          <input
            type="number"
            value={unitPrice}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        <div className="flex-1 ml-2">
          <label className="block mb-2">数量</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">金額</label>
        <input
          type="number"
          value={amount}
          readOnly
          className="w-full p-2 border rounded bg-gray-100"
        />
      </div>

      <div className="mb-4 flex items-center">
        <div className="flex-1">
          <label className="block mb-2">消費税率</label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => onTaxRateChange(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex-1 ml-2">
          <label className="block mb-2">消費税額</label>
          <input
            type="number"
            value={taxAmount}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={onSubmit} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Form;
