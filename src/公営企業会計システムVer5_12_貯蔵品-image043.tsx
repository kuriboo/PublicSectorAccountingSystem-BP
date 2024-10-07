import React from 'react';

// Props type definition for the component
type InventoryFormProps = {
  storageLocation: string;
  storageLocationCode: string;
  itemCode: string;
  itemName: string;
  itemSpec: string;
  quantity: number;
  unit: string;
  provisionalAmount: number;
  currentStock: number;
  department: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const InventoryForm: React.FC<InventoryFormProps> = ({
  storageLocation,
  storageLocationCode,
  itemCode,
  itemName,
  itemSpec,
  quantity,
  unit,
  provisionalAmount,
  currentStock,
  department,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="max-w-lg p-4 mx-auto bg-white rounded-lg shadow-lg space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">管理棚編集（先入先出）</h2>
        <span className="text-sm">{department}</span>
      </div>
      
      {/* Form fields */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block font-semibold">保管場所</label>
          <span className="block">{storageLocationCode}</span>
          <span className="block">{storageLocation}</span>
        </div>
        
        <div>
          <label className="block font-semibold">品番</label>
          <span className="block">{itemCode}</span>
        </div>
        
        <div>
          <label className="block font-semibold">品名</label>
          <span className="block">{itemName}</span>
        </div>
        
        <div>
          <label className="block font-semibold">規格</label>
          <span className="block">{itemSpec}</span>
        </div>
        
        <div className="col-span-2">
          <label className="block font-semibold">数量</label>
          <input
            type="number"
            value={quantity}
            className="border p-1 rounded w-full"
            readOnly
          />
          <span className="ml-2">{unit}</span>
        </div>
        
        <div>
          <label className="block font-semibold">仮出庫数</label>
          <span className="block">{provisionalAmount}</span>
        </div>
        
        <div>
          <label className="block font-semibold">現在庫数</label>
          <span className="block">{currentStock}</span>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onConfirm} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">キャンセル</button>
      </div>
    </div>
  );
};

export default InventoryForm;
```