import React from 'react';

// TypeScriptの型定義
interface InventoryItemProps {
  productCode: string;
  productName: string;
  specification: string;
  valuationMethod: string;
  entries: {
    date: string;
    quantity: number;
    unitPrice: number;
    initialYear: string;
    initialNumber: number;
  }[];
  currentStock: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({
  productCode,
  productName,
  specification,
  valuationMethod,
  entries,
  currentStock,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-lg">
      {/* 商品情報 */}
      <div className="mb-4">
        <div className="flex items-center">
          <span className="font-bold">品番:</span>
          <span className="ml-2">{productCode}</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold">品名:</span>
          <span className="ml-2">{productName}</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold">規格:</span>
          <span className="ml-2">{specification}</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold">評価方法区分:</span>
          <span className="ml-2">{valuationMethod}</span>
        </div>
      </div>

      {/* 入庫情報 */}
      <table className="w-full mb-4 table-auto">
        <thead>
          <tr className="bg-blue-200">
            <th className="p-2">入庫日</th>
            <th className="p-2">数量</th>
            <th className="p-2">単価</th>
            <th className="p-2">当初入庫年度</th>
            <th className="p-2">当初入庫番号</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="bg-white">
              <td className="p-2">{entry.date}</td>
              <td className="p-2">{entry.quantity}</td>
              <td className="p-2">{entry.unitPrice.toFixed(2)}</td>
              <td className="p-2">{entry.initialYear}</td>
              <td className="p-2">{entry.initialNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 在庫情報 */}
      <div className="flex items-center mb-4">
        <span className="font-bold">現在庫数:</span>
        <span className="ml-2">{currentStock}</span>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onOk}>OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default InventoryItem;
```