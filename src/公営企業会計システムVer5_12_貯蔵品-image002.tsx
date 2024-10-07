import React from 'react';

// Type definition for the component props
interface InventoryInputProps {
  date: string;
  storageLocation: string;
  department: string;
  storageDivision: string;
  manager: string;
  itemNumber: string;
  itemName: string;
  specification: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  totalAmount: number;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

// InventoryInputComponent with Tailwind CSS
const InventoryInputComponent: React.FC<InventoryInputProps> = ({
  date,
  storageLocation,
  department,
  storageDivision,
  manager,
  itemNumber,
  itemName,
  specification,
  quantity,
  unit,
  unitPrice,
  totalAmount,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">未発注入庫入力(先入先出)</h2>
      <div className="mb-4">
        <label className="block mb-1">入庫日: </label>
        <input type="text" value={date} readOnly className="w-full p-1 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">保管場所: </label>
        <input type="text" value={storageLocation} readOnly className="w-full p-1 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">所属: </label>
        <input type="text" value={department} readOnly className="w-full p-1 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">入庫区分: </label>
        <input type="text" value={storageDivision} readOnly className="w-full p-1 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">担当者: </label>
        <input type="text" value={manager} readOnly className="w-full p-1 border rounded" />
      </div>
      <table className="w-full mb-4 border">
        <thead>
          <tr>
            <th className="border p-2">品番</th>
            <th className="border p-2">品名</th>
            <th className="border p-2">規格</th>
            <th className="border p-2">数量</th>
            <th className="border p-2">単位</th>
            <th className="border p-2">単価</th>
            <th className="border p-2">金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{itemNumber}</td>
            <td className="border p-2">{itemName}</td>
            <td className="border p-2">{specification}</td>
            <td className="border p-2">{quantity}</td>
            <td className="border p-2">{unit}</td>
            <td className="border p-2">{unitPrice}</td>
            <td className="border p-2">{totalAmount}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end gap-2">
        <button onClick={onSubmit} className="p-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="p-2 bg-gray-500 text-white rounded">クリア</button>
        <button onClick={onExit} className="p-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default InventoryInputComponent;
```