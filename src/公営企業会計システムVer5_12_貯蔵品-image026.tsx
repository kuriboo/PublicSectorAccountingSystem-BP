import React from 'react';

// Props type for the component
interface InventoryDetailsProps {
  itemCode: string;
  itemName: string;
  specification: string;
  evaluationMethod: string;
  initialYear: string;
  initialNumber: number;
  seriesNumber: number;
  entries: {
    year: string;
    number: number;
    series: number;
    quantity: number;
    unitPrice: number;
    entryDate: string;
  }[];
  entryYear: string;
  quantity: number;
  unit: string;
  provisionalInventory: number;
  unitPrice: number;
  amount: number;
  currentInventory: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const InventoryDetails: React.FC<InventoryDetailsProps> = ({
  itemCode,
  itemName,
  specification,
  evaluationMethod,
  initialYear,
  initialNumber,
  seriesNumber,
  entries,
  entryYear,
  quantity,
  unit,
  provisionalInventory,
  unitPrice,
  amount,
  currentInventory,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-200">
      <div className="mb-4">
        <label className="block font-bold">品番</label>
        <input type="text" value={itemCode} readOnly className="border p-1 w-full" />
      </div>
      <div className="mb-4">
        <label className="block font-bold">品名</label>
        <input type="text" value={itemName} readOnly className="border p-1 w-full" />
      </div>
      <div className="mb-4">
        <label className="block font-bold">規格</label>
        <input type="text" value={specification} readOnly className="border p-1 w-full" />
      </div>
      <div className="mb-4">
        <label className="block font-bold">評価方法区分</label>
        <input type="text" value={evaluationMethod} readOnly className="border p-1 w-full" />
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block font-bold">当初出庫年度</label>
          <input type="text" value={initialYear} readOnly className="border p-1 w-full" />
        </div>
        <div className="mr-4">
          <label className="block font-bold">当初出庫番号</label>
          <input type="number" value={initialNumber} readOnly className="border p-1 w-full" />
        </div>
        <div>
          <label className="block font-bold">行番号</label>
          <input type="number" value={seriesNumber} readOnly className="border p-1 w-full" />
        </div>
      </div>
      <table className="mb-4 w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">当初出庫年度</th>
            <th className="border p-2">当初出庫番号</th>
            <th className="border p-2">行番号</th>
            <th className="border p-2">出庫数量</th>
            <th className="border p-2">単価</th>
            <th className="border p-2">入庫日</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border p-2">{entry.year}</td>
              <td className="border p-2">{entry.number}</td>
              <td className="border p-2">{entry.series}</td>
              <td className="border p-2">{entry.quantity}</td>
              <td className="border p-2">{entry.unitPrice}</td>
              <td className="border p-2">{entry.entryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block font-bold">入庫日</label>
          <input type="text" value={entryYear} readOnly className="border p-1 w-full" />
        </div>
        <div className="mr-4">
          <label className="block font-bold">数量</label>
          <input type="number" value={quantity} readOnly className="border p-1 w-full" />
        </div>
        <div>
          <label className="block font-bold">単位</label>
          <input type="text" value={unit} readOnly className="border p-1 w-full" />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block font-bold">仮出庫数</label>
          <input type="number" value={provisionalInventory} readOnly className="border p-1 w-full" />
        </div>
        <div className="mr-4">
          <label className="block font-bold">単価</label>
          <input type="number" value={unitPrice} readOnly className="border p-1 w-full" />
        </div>
        <div>
          <label className="block font-bold">金額</label>
          <input type="number" value={amount} readOnly className="border p-1 w-full" />
        </div>
        <div className="mr-4">
          <label className="block font-bold">現在庫数</label>
          <input type="number" value={currentInventory} readOnly className="border p-1 w-full" />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-red-500 text-white p-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default InventoryDetails;
```