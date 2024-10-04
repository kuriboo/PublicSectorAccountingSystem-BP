```tsx
import React from 'react';

type TableRow = {
  date: string;
  quantity: number;
  unitPrice: number;
  amount: number;
};

type InventoryProps = {
  id: string;
  name: string;
  spec: string;
  quantity: number;
  totalAmount: number;
  unit: string;
  unitPrice: number;
  remainingOrders: number;
  estimatedArrivalDate: string;
  tableData: TableRow[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const InventoryComponent: React.FC<InventoryProps> = ({
  id,
  name,
  spec,
  quantity,
  totalAmount,
  unit,
  unitPrice,
  remainingOrders,
  estimatedArrivalDate,
  tableData,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white border rounded-lg">
      <div className="flex justify-between">
        <div>
          <div className="mb-2">
            <label>品番:</label> <span>{id}</span>
          </div>
          <div className="mb-2">
            <label>品名:</label> <span>{name}</span>
          </div>
          <div className="mb-2">
            <label>規格:</label> <span>{spec}</span>
          </div>
        </div>
        <div>
          <label className="mr-2">入庫数:</label>
          <input type="number" value={quantity} className="border px-2" readOnly />
          <label className="mx-2">{unit}</label>
          <label className="mr-2">単価:</label> 
          <input type="number" value={unitPrice} className="border px-2" readOnly />
        </div>
      </div>
      <div className="mb-2">
        <label>金額:</label> <span>{totalAmount.toLocaleString()}</span>
      </div>
      <div className="mb-2">
        <label>発注残数:</label> <span>{remainingOrders.toFixed(2)}</span>
      </div>
      <div className="mb-4">
        <label>入庫予定日:</label> <span>{estimatedArrivalDate}</span>
      </div>
      
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">入庫日</th>
            <th className="border px-4 py-2">数量</th>
            <th className="border px-4 py-2">単価</th>
            <th className="border px-4 py-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.date}</td>
              <td className="border px-4 py-2">{row.quantity.toFixed(2)}</td>
              <td className="border px-4 py-2">{row.unitPrice.toLocaleString()}</td>
              <td className="border px-4 py-2">{row.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onOk} className="py-2 px-4 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="py-2 px-4 bg-gray-500 text-white rounded">クリア</button>
        <button onClick={onCancel} className="py-2 px-4 bg-red-500 text-white rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default InventoryComponent;
```