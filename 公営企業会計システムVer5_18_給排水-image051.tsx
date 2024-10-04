```tsx
// Import necessary libraries
import React, { useState, ChangeEvent } from 'react';

// Define types for component props
type FormComponentProps = {
  unitPrice: number;
  options: string[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// Define the FormComponent
const FormComponent: React.FC<FormComponentProps> = ({ unitPrice, options, onOk, onClear, onCancel }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [consumptionTaxRate, setConsumptionTaxRate] = useState<number>(0);

  // Define event handler for quantity change
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value, 10) || 0);
  };

  // Define event handler for tax rate change
  const handleTaxRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConsumptionTaxRate(parseFloat(event.target.value) || 0);
  };

  // Calculate amount and tax amount
  const amount = unitPrice * quantity;
  const taxAmount = (amount * consumptionTaxRate) / 100;

  return (
    <div className="p-4 border rounded-md shadow-md">
      <div>
        <label className="block mb-2">納付分類</label>
        <select className="mb-4 p-2 border rounded-md w-full">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex space-x-2">
        <div>
          <label className="block mb-2">単価</label>
          <input
            type="text"
            readOnly
            value={unitPrice.toLocaleString()}
            className="p-2 border rounded-md w-full text-center"
          />
        </div>
        <div>
          <label className="block mb-2">数量</label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="p-2 border rounded-md w-full text-center"
          />
        </div>
        <div>
          <label className="block mb-2">金額</label>
          <input
            type="text"
            readOnly
            value={amount.toLocaleString()}
            className="p-2 border rounded-md w-full text-center"
          />
        </div>
      </div>
      
      <div className="flex space-x-2 mt-2">
        <div>
          <label className="block mb-2">消費税率</label>
          <input
            type="number"
            value={consumptionTaxRate}
            onChange={handleTaxRateChange}
            className="p-2 border rounded-md w-full text-center"
          />
        </div>
        <div>
          <label className="block mb-2">消費税額</label>
          <input
            type="text"
            readOnly
            value={taxAmount.toLocaleString()}
            className="p-2 border rounded-md w-full text-center"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded-md shadow">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded-md shadow">キャンセル</button>
      </div>
    </div>
  );
};

export default FormComponent;
```