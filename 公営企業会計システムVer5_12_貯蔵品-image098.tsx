```tsx
import React from 'react';

type InventoryFormProps = {
  title: string;
  storageLocation: string;
  itemCode: string;
  deliveryDays: number;
  correctInventory: number;
  currentInventory: number;
  temporaryInventory: number;
  currentInventoryValue: number;
  temporaryInventoryValue: number;
  shelfLifeInventory: number;
  shelfCount: number;
  shelfValue: number;
  method: 'FIFO' | 'Average' | 'Specific';
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const InventoryForm: React.FC<InventoryFormProps> = ({
  title,
  storageLocation,
  itemCode,
  deliveryDays,
  correctInventory,
  currentInventory,
  temporaryInventory,
  currentInventoryValue,
  temporaryInventoryValue,
  shelfLifeInventory,
  shelfCount,
  shelfValue,
  method,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">保管場所</label>
          <input 
            type="text" 
            value={storageLocation} 
            className="p-2 border rounded w-full" 
            readOnly 
          />
        </div>
        <div>
          <label className="block">単価コード</label>
          <input 
            type="text" 
            value={itemCode} 
            className="p-2 border rounded w-full" 
            readOnly 
          />
        </div>
        <div>
          <label className="block">納品日数</label>
          <input 
            type="number" 
            value={deliveryDays} 
            className="p-2 border rounded w-full" 
          />
        </div>
        <div>
          <label className="block">適正在庫数</label>
          <input 
            type="number" 
            value={correctInventory} 
            className="p-2 border rounded w-full" 
          />
        </div>
        <div>
          <label className="block">現在在庫数</label>
          <input 
            type="number" 
            value={currentInventory} 
            className="p-2 border rounded w-full" 
          />
        </div>
        <div>
          <label className="block">仮出庫数量</label>
          <input 
            type="number" 
            value={temporaryInventory} 
            className="p-2 border rounded w-full" 
          />
        </div>
        <div>
          <label className="block">現在在庫金額</label>
          <input 
            type="number" 
            value={currentInventoryValue} 
            className="p-2 border rounded w-full" 
          />
        </div>
        <div>
          <label className="block">棚卸単価</label>
          <input 
            type="number" 
            value={shelfValue} 
            className="p-2 border rounded w-full" 
            readOnly 
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block">評価方法区分</label>
        <div className="flex gap-4">
          {['FIFO', 'Average', 'Specific'].map((m, index) => (
            <label key={index} className="flex items-center">
              <input 
                type="radio" 
                name="method" 
                checked={method === m} 
                className="mr-2" 
                onChange={() => {}} 
                readOnly 
              />
              {m}
            </label>
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 rounded">登録</button>
        <button onClick={onEdit} className="bg-green-500 text-white px-4 py-2 rounded">訂正</button>
        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">削除</button>
      </div>
    </div>
  );
};

export default InventoryForm;
```