import React from 'react';

// 型定義
type InventoryItemProps = {
  productCode: string;
  productName: string;
  specification: string;
  valuationMethod: string;
  entries: {
    date: string;
    quantity: number;
    unitPrice: number;
    year: number;
    number: number;
  }[];
  completionStatus: boolean;
  nextShippingDate: string;
  onComplete: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const InventoryItem: React.FC<InventoryItemProps> = ({
  productCode,
  productName,
  specification,
  valuationMethod,
  entries,
  completionStatus,
  nextShippingDate,
  onComplete,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md border rounded-md">
      <div className="flex flex-col mb-4">
        <label>品番: {productCode}</label>
        <label>品名: {productName}</label>
        <label>規格: {specification}</label>
        <label>評価方法区分: {valuationMethod}</label>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">入庫日</th>
            <th className="py-2 px-4 border">数量</th>
            <th className="py-2 px-4 border">単価</th>
            <th className="py-2 px-4 border">入庫年度</th>
            <th className="py-2 px-4 border">入庫番号</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{entry.date}</td>
              <td className="py-2 px-4 border">{entry.quantity}</td>
              <td className="py-2 px-4 border">{entry.unitPrice.toLocaleString()}</td>
              <td className="py-2 px-4 border">{entry.year}</td>
              <td className="py-2 px-4 border">{entry.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center mt-4">
        <div className="flex-grow">
          <span>完了区分: {completionStatus ? '完了する' : '完了しない'}</span>
          <br />
          <span>次回出庫予定日: {nextShippingDate}</span>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button 
          onClick={onComplete} 
          className="px-4 py-2 bg-green-500 text-white rounded mr-2"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
        >
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InventoryItem;
