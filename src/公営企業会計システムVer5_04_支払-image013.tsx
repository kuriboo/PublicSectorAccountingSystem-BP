import React from 'react';

// Props interface for customizing the component
interface ItemEntryProps {
  itemTaxType: 'inclusive' | 'exclusive';
  unitStartDate: string;
  unitName: string;
  unitSpecification: string;
  quantity: number;
  unitPrice: number;
  additionalTaxRate: number;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const ItemEntry: React.FC<ItemEntryProps> = ({
  itemTaxType,
  unitStartDate,
  unitName,
  unitSpecification,
  quantity,
  unitPrice,
  additionalTaxRate,
  onConfirm,
  onClear,
  onCancel,
}) => {
  // Calculate total and additional tax amounts
  const totalAmount = quantity * unitPrice;
  const additionalTaxAmount = totalAmount * (additionalTaxRate / 100);

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex items-center mb-2">
        <span className="text-sm font-bold mr-2">単価区分:</span>
        <div className="flex items-center">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              checked={itemTaxType === 'inclusive'}
              className="mr-1"
              readOnly
            />
            込
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              checked={itemTaxType === 'exclusive'}
              className="mr-1"
              readOnly
            />
            抜
          </label>
        </div>
      </div>
      <div className="mb-2">
        <span className="text-sm font-bold">適用開始日:</span>
        <input
          type="text"
          value={unitStartDate}
          className="ml-2 p-1 border rounded"
          readOnly
        />
      </div>
      <div className="mb-2">
        <span className="text-sm font-bold">単価名称:</span>
        <input
          type="text"
          value={unitName}
          className="ml-2 p-1 border rounded"
          readOnly
        />
      </div>
      <div className="mb-2">
        <span className="text-sm font-bold">規格名称:</span>
        <input
          type="text"
          value={unitSpecification}
          className="ml-2 p-1 border rounded"
          readOnly
        />
      </div>
      <div className="flex mb-2">
        <span className="text-sm font-bold mr-2">数量:</span>
        <input
          type="number"
          value={quantity}
          className="p-1 border rounded mx-2"
          readOnly
        />
        <span className="text-sm">× 単価</span>
        <input
          type="number"
          value={unitPrice.toFixed(2)}
          className="p-1 border rounded mx-2"
          readOnly
        />
        <span className="text-sm">= 全額</span>
        <input
          type="number"
          value={totalAmount.toFixed(2)}
          className="p-1 border rounded mx-2"
          readOnly
        />
      </div>
      <div className="flex mb-2">
        <span className="text-sm font-bold mr-2">他税率:</span>
        <input
          type="number"
          value={additionalTaxRate.toFixed(2)}
          className="p-1 border rounded mx-2"
          readOnly
        />
        <span className="text-sm">%</span>
        <span className="ml-2">他税額</span>
        <input
          type="number"
          value={additionalTaxAmount.toFixed(2)}
          className="p-1 border rounded ml-2"
          readOnly
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ItemEntry;
