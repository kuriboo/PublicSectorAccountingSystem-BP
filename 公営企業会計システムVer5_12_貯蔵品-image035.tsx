```tsx
import React from 'react';

// Propsの型定義
interface InventoryEntryProps {
  date: string;
  location: string;
  referenceNumber: number;
  department: string;
  category: string;
  projectName: string;
  summary: string;
  totalAmount: number;
  items: { code: string; name: string; specs: string; quantity: number; unit: string; unitPrice: number; amount: number; }[];
  onSave: () => void;
  onClear: () => void;
  onClose: () => void;
}

const InventoryEntry: React.FC<InventoryEntryProps> = ({
  date,
  location,
  referenceNumber,
  department,
  category,
  projectName,
  summary,
  totalAmount,
  items,
  onSave,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* ヘッダー */}
      <div className="text-xl text-center mb-4 bg-blue-200 p-2 rounded">
        仮予定有出庫入力（移動平均）
      </div>
      
      {/* 入出庫情報 */}
      <div className="mb-4">
        <div>
          <label className="block">入出庫日: {date}</label>
          <label className="block">保管場所: {location}</label>
        </div>
        <div>
          <label className="block">伝票番号: {referenceNumber}</label>
        </div>
      </div>

      {/* 所属・出庫情報 */}
      <div className="mb-4">
        <div>
          <label className="block">所属: {department}</label>
          <label className="block">出庫区分: {category}</label>
        </div>
      </div>

      {/* 工事名・摘要 */}
      <div className="mb-4">
        <div>
          <label className="block">工事名場所: {projectName}</label>
        </div>
        <div>
          <label className="block">摘要: {summary}</label>
        </div>
      </div>

      {/* 金額合計 */}
      <div className="text-right mb-4">
        <label className="block">金額合計: {totalAmount.toLocaleString()}円</label>
      </div>

      {/* アイテムリスト */}
      <table className="w-full border-t border-b border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">品番</th>
            <th className="p-2 text-left">品名</th>
            <th className="p-2 text-left">規格</th>
            <th className="p-2 text-left">数量</th>
            <th className="p-2 text-left">単位</th>
            <th className="p-2 text-left">単価</th>
            <th className="p-2 text-left">金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-2">{item.code}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.specs}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">{item.unit}</td>
              <td className="p-2">{item.unitPrice.toLocaleString()}円</td>
              <td className="p-2">{item.amount.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ボタン */}
      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onSave} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default InventoryEntry;
```