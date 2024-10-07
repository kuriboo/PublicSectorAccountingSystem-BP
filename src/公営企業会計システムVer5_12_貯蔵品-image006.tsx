import React from 'react';

// 型定義
interface InventoryEntryFormProps {
  processingDate: string;
  location: string;
  departmentNumber: string;
  departmentName: string;
  supplierCode: string;
  supplierName: string;
  workLocation: string;
  summary: string;
  items: {
    itemNumber: string;
    itemName: string;
    specification: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    amount: number;
    initialStorageYear: string;
    initialStorageNumber: number;
  }[];
  totalAmount: number;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const InventoryEntryForm: React.FC<InventoryEntryFormProps> = ({
  processingDate,
  location,
  departmentNumber,
  departmentName,
  supplierCode,
  supplierName,
  workLocation,
  summary,
  items,
  totalAmount,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div className="mb-4">
        <h1 className="text-lg font-bold">戻し入庫入力（先入先出）</h1>
        <div>
          <label className="block text-sm">処理年月日: {processingDate}</label>
        </div>
        <div>
          <label className="block text-sm">保管場所: {location}</label>
        </div>
        <div className="flex space-x-4">
          <div>
            <label className="block text-sm">所属: {departmentNumber}</label>
          </div>
          <div>
            <label className="block text-sm">入庫区分: {departmentName}</label>
          </div>
        </div>
        <div>
          <label className="block text-sm">業者: {supplierCode} {supplierName}</label>
        </div>
        <div>
          <label className="block text-sm">工事名場所: {workLocation}</label>
        </div>
        <div>
          <label className="block text-sm">摘要: {summary}</label>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">品番</th>
            <th className="py-2">品名</th>
            <th className="py-2">規格</th>
            <th className="py-2">数量</th>
            <th className="py-2">単位</th>
            <th className="py-2">単価</th>
            <th className="py-2">金額</th>
            <th className="py-2">当初入庫年度</th>
            <th className="py-2">当初入庫番号</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="py-1">{item.itemNumber}</td>
              <td className="py-1">{item.itemName}</td>
              <td className="py-1">{item.specification}</td>
              <td className="py-1">{item.quantity}</td>
              <td className="py-1">{item.unit}</td>
              <td className="py-1">{item.unitPrice.toLocaleString()}</td>
              <td className="py-1">{item.amount.toLocaleString()}</td>
              <td className="py-1">{item.initialStorageYear}</td>
              <td className="py-1">{item.initialStorageNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <label className="block text-sm">金額合計: {totalAmount.toLocaleString()}</label>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onSubmit}>OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default InventoryEntryForm;
