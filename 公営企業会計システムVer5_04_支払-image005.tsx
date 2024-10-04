import React, { useState } from 'react';

// Define the types for the props
type PricingFormProps = {
  initialQuantity?: number;
  initialUnitPrice?: number;
  onSubmit?: (total: number) => void;
};

const PricingForm: React.FC<PricingFormProps> = ({
  initialQuantity = 0,
  initialUnitPrice = 0,
  onSubmit
}) => {
  // Component state for form fields
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [unitPrice, setUnitPrice] = useState<number>(initialUnitPrice);
  const [unitName, setUnitName] = useState<string>('事務机');
  const [specification, setSpecification] = useState<string>('');

  // Calculate total amount
  const total = quantity * unitPrice;

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(total);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow-md rounded-md"
    >
      {/* Unit Details */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">単価内容</label>
        <input 
          type="text"
          value={unitName}
          onChange={(e) => setUnitName(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      {/* Quantity and Unit Price */}
      <div className="mb-4 flex space-x-2">
        <div>
          <label className="block mb-2 font-semibold">数量</label>
          <input 
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">単価</label>
          <input 
            type="number"
            value={unitPrice}
            onChange={(e) => setUnitPrice(Number(e.target.value))}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Specification */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">規格名称</label>
        <input 
          type="text"
          value={specification}
          onChange={(e) => setSpecification(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      {/* Total */}
      <div className="mb-4 font-bold text-lg">
        合計: {total.toLocaleString()}円
      </div>

      {/* Submit Button */}
      <div className="flex space-x-3">
        <button 
          type="submit"
          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button 
          type="reset"
          className="bg-gray-300 py-1 px-4 rounded hover:bg-gray-400"
          onClick={() => {
            setQuantity(initialQuantity);
            setUnitPrice(initialUnitPrice);
            setUnitName('事務机');
            setSpecification('');
          }}
        >
          クリア
        </button>
      </div>
    </form>
  );
};

export default PricingForm;