```ts
import React from 'react';

type InventoryFormProps = {
  productCode: string;
  productName: string;
  spec: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  plannedQuantity: number;
  currentQuantity: number;
  completeStatus: boolean;
  nextDeliveryDate: string;
  onQuantityChange: (quantity: number) => void;
  onCompleteStatusChange: (status: boolean) => void;
  onNextDeliveryDateChange: (date: string) => void;
};

const InventoryForm: React.FC<InventoryFormProps> = ({
  productCode,
  productName,
  spec,
  quantity,
  unitPrice,
  totalAmount,
  plannedQuantity,
  currentQuantity,
  completeStatus,
  nextDeliveryDate,
  onQuantityChange,
  onCompleteStatusChange,
  onNextDeliveryDateChange,
}) => {
  return (
    <div className="p-4 space-y-4 bg-white rounded shadow">
      <div>
        <div className="text-sm">品番: {productCode}</div>
        <div className="text-sm">品名: {productName}</div>
        <div className="text-sm">規格: {spec}</div>
      </div>
      <div className="flex items-center">
        <label className="mr-2">数量</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => onQuantityChange(parseFloat(e.target.value))}
          className="border rounded p-1"
        />
        <span className="ml-2">単位 m</span>
      </div>
      <div className="flex justify-between text-sm">
        <div>単価: {unitPrice.toLocaleString()}</div>
        <div>金額: {totalAmount.toLocaleString()}</div>
        <div>仮出庫数: {plannedQuantity}</div>
        <div>現在庫数: {currentQuantity}</div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-sm">完了区分</div>
        <label>
          <input
            type="radio"
            name="completeStatus"
            checked={completeStatus}
            onChange={() => onCompleteStatusChange(true)}
            className="mr-1"
          />
          完了する
        </label>
        <label>
          <input
            type="radio"
            name="completeStatus"
            checked={!completeStatus}
            onChange={() => onCompleteStatusChange(false)}
            className="mr-1"
          />
          完了しない
        </label>
      </div>
      <div className="flex items-center">
        <label className="mr-2">次回出庫予定日</label>
        <input
          type="date"
          value={nextDeliveryDate}
          onChange={(e) => onNextDeliveryDateChange(e.target.value)}
          className="border rounded p-1"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-200 rounded">OK</button>
        <button className="px-4 py-2 bg-gray-200 rounded">クリア</button>
        <button className="px-4 py-2 bg-gray-200 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default InventoryForm;
```