import React, { useState } from 'react';

// TypeScript interface for the component props
interface ContractEditProps {
  productId: string;
  productName: string;
  productSpec: string;
  unit: string;
  initialQuantity: number;
  initialUnitPrice: number;
  onConfirm: (quantity: number, unitPrice: number) => void;
  onClear: () => void;
  onCancel: () => void;
}

// Next.js + Tailwind CSS functional component
const ContractEdit: React.FC<ContractEditProps> = ({
  productId,
  productName,
  productSpec,
  unit,
  initialQuantity,
  initialUnitPrice,
  onConfirm,
  onClear,
  onCancel,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [unitPrice, setUnitPrice] = useState(initialUnitPrice);

  return (
    <div className="bg-white p-4 shadow-lg max-w-lg mx-auto rounded">
      <h1 className="text-lg font-bold mb-4">契約発注明細編集</h1>
      <div className="mb-2">
        <label className="block text-gray-700">品番</label>
        <input
          type="text"
          value={productId}
          readOnly
          className="w-full px-2 py-1 border rounded bg-gray-100"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">品名</label>
        <div className="px-2 py-1 border rounded bg-gray-100">{productName}</div>
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">規格</label>
        <div className="px-2 py-1 border rounded bg-gray-100">{productSpec}</div>
      </div>
      <div className="flex mb-2">
        <div className="w-1/2 mr-2">
          <label className="block text-gray-700">数量</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-2 py-1 border rounded text-right"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">単位</label>
          <div className="px-2 py-1 border rounded bg-gray-100">{unit}</div>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="block text-gray-700">単価</label>
          <input
            type="number"
            value={unitPrice}
            onChange={(e) => setUnitPrice(Number(e.target.value))}
            className="w-full px-2 py-1 border rounded text-right"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">金額</label>
          <div className="px-2 py-1 border rounded bg-gray-100 text-right">
            {(quantity * unitPrice).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => onConfirm(quantity, unitPrice)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-4 mr-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-4 mr-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-4 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ContractEdit;
