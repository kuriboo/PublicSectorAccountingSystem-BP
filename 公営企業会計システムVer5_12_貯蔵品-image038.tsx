```tsx
// Import necessary libraries
import React from 'react';

// Define TypeScript types for the component props
type InventoryEntryProps = {
  date: string;
  location: string;
  worksite: string;
  details: { itemNumber: string; itemName: string; specification: string; quantity: number; unit: string; plannedDate: string; unitPrice: number; totalPrice: number }[];
  totalAmount: number;
};

// InventoryEntry component
const InventoryEntry: React.FC<InventoryEntryProps> = ({ date, location, worksite, details, totalAmount }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="text-center text-lg font-bold mb-4">出庫予定入力</div>
      
      {/* Date and Identification Section */}
      <div className="flex justify-between mb-2">
        <span>処理年月日: {date}</span>
        <input className="border p-1" type="text" placeholder="出庫予定番号" />
      </div>
      
      {/* Location and Worksite Section */}
      <div className="mb-2">
        <div className="flex items-center mb-1">
          <span className="w-24">保管場所:</span>
          <input className="border p-1" type="text" value={location} readOnly />
        </div>
        <div className="flex items-center mb-1">
          <span className="w-24">工事名場所:</span>
          <input className="border p-1 flex-1" type="text" value={worksite} readOnly />
        </div>
      </div>
      
      {/* Details Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border p-1">品番</th>
            <th className="border p-1">品名</th>
            <th className="border p-1">規格</th>
            <th className="border p-1">数量</th>
            <th className="border p-1">単位</th>
            <th className="border p-1">出庫予定日</th>
            <th className="border p-1">単価</th>
            <th className="border p-1">金額</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} className="bg-white">
              <td className="border p-1 text-center">{detail.itemNumber}</td>
              <td className="border p-1">{detail.itemName}</td>
              <td className="border p-1 text-center">{detail.specification}</td>
              <td className="border p-1 text-center">{detail.quantity}</td>
              <td className="border p-1 text-center">{detail.unit}</td>
              <td className="border p-1 text-center">{detail.plannedDate}</td>
              <td className="border p-1 text-right">{detail.unitPrice.toFixed(2)}</td>
              <td className="border p-1 text-right">{detail.totalPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Total Amount Section */}
      <div className="flex justify-end mt-2">
        <span className="font-bold">金額合計:</span>
        <span className="ml-2">{totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default InventoryEntry;
```