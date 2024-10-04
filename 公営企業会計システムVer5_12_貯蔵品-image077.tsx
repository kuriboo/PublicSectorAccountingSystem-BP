```tsx
import React from 'react';
import { FC } from 'react';

// Tailwind CSS styling
const inputStyles = "border p-2 text-sm w-full";
const labelStyles = "text-sm font-bold my-1";
const containerStyles = "grid grid-cols-2 gap-4 p-4 bg-white shadow md:w-1/2";

// 型定義
interface ItemFormProps {
  itemCode: string;
  itemName: string;
  specification: string;
  evaluationMethod: string;
  stockAmount: number;
  unit: string;
  unitPrice: number;
  locationCode: string;
  storedQuantity: number;
  adjustmentAmount: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const ItemForm: FC<ItemFormProps> = ({
  itemCode,
  itemName,
  specification,
  evaluationMethod,
  stockAmount,
  unit,
  unitPrice,
  locationCode,
  storedQuantity,
  adjustmentAmount,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className={containerStyles}>
      <div>
        <label className={labelStyles}>品番</label>
        <input type="text" value={itemCode} className={inputStyles} readOnly />
      </div>
      <div>
        <label className={labelStyles}>品名</label>
        <input type="text" value={itemName} className={inputStyles} readOnly />
      </div>
      <div>
        <label className={labelStyles}>規格</label>
        <input type="text" value={specification} className={inputStyles} readOnly />
      </div>
      <div>
        <label className={labelStyles}>評価方法区分</label>
        <input type="text" value={evaluationMethod} className={inputStyles} readOnly />
      </div>
      <div>
        <label className={labelStyles}>現在在庫数</label>
        <input type="number" value={stockAmount} className={inputStyles} readOnly />
      </div>
      <div>
        <label className={labelStyles}>単位</label>
        <input type="text" value={unit} className={inputStyles} readOnly />
      </div>
      <div>
        <label className={labelStyles}>単価</label>
        <input type="number" value={unitPrice} className={inputStyles} readOnly />
      </div>
      <div>
        <label className={labelStyles}>保管場所コード</label>
        <input type="text" value={locationCode} className={inputStyles} readOnly />
      </div>
      <div>
        <label className={labelStyles}>棚卸高</label>
        <input type="number" value={storedQuantity} className={inputStyles} readOnly />
      </div>
      <div>
        <label className={labelStyles}>調整金額</label>
        <input type="number" value={adjustmentAmount} className={inputStyles} readOnly />
      </div>
      <div className="flex space-x-4 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onOk}>OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default ItemForm;
```