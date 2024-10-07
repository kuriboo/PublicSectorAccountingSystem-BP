// Import necessary libraries and components
import React from 'react';

// Define the type for the component's props
type FormProps = {
  categoryOptions: string[];
  shapeOptions: { code: string; name: string; price: number }[];
  onCategoryChange: (value: string) => void;
  onShapeChange: (value: string) => void;
  onDiameterChange: (value: string) => void;
  onUnitPriceChange: (value: string) => void;
  onQuantityChange: (value: number) => void;
  onTaxRateChange: (value: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// Define the component
const CustomForm: React.FC<FormProps> = ({
  categoryOptions,
  shapeOptions,
  onCategoryChange,
  onShapeChange,
  onDiameterChange,
  onUnitPriceChange,
  onQuantityChange,
  onTaxRateChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      {/* Category selection */}
      <div className="mb-4">
        <label>納付分類:</label>
        <select
          className="ml-2 p-1 border rounded"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Shape selection */}
      <div className="mb-4">
        <label>口径選択:</label>
        <div className="flex items-center">
          <input
            type="text"
            className="p-1 border rounded"
            onChange={(e) => onDiameterChange(e.target.value)}
          />
          <span className="mx-2">→</span>
          <select
            className="p-1 border rounded"
            onChange={(e) => onShapeChange(e.target.value)}
          >
            {shapeOptions.map((shape) => (
              <option key={shape.code} value={shape.code}>
                {shape.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Shape size and price list */}
      <div className="mb-4 border p-2 rounded">
        <label>形状寸法リスト:</label>
        <table className="mt-2 w-full border">
          <thead>
            <tr>
              <th className="border p-1">形状コード</th>
              <th className="border p-1">形状名称</th>
              <th className="border p-1">単価</th>
            </tr>
          </thead>
          <tbody>
            {shapeOptions.map((shape) => (
              <tr key={shape.code}>
                <td className="border p-1">{shape.code}</td>
                <td className="border p-1">{shape.name}</td>
                <td className="border p-1">{shape.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Unit price, quantity, tax rate and amount */}
      <div className="flex mb-4">
        <div className="mr-4">
          <label>単価:</label>
          <input
            type="text"
            className="ml-2 p-1 border rounded"
            onChange={(e) => onUnitPriceChange(e.target.value)}
          />
        </div>
        <div className="mr-4">
          <label>数量:</label>
          <input
            type="number"
            className="ml-2 p-1 border rounded"
            onChange={(e) => onQuantityChange(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="mr-4">
          <label>消費税率:</label>
          <select
            className="ml-2 p-1 border rounded"
            onChange={(e) => onTaxRateChange(Number(e.target.value))}
          >
            <option value="10">10%</option>
            <option value="8">8%</option>
            <option value="5">5%</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end">
        <button className="border rounded p-1 mx-2" onClick={onSubmit}>OK</button>
        <button className="border rounded p-1 mx-2" onClick={onClear}>クリア</button>
        <button className="border rounded p-1 mx-2" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default CustomForm;
