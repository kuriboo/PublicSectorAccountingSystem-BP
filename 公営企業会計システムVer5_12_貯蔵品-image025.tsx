```tsx
// Import necessary libraries
import React from 'react';

// Define TypeScript types for the component props
interface InventoryEntryProps {
  date: string;
  department: string;
  itemCode: string;
  itemName: string;
  spec: string;
  quantity: number;
  unitPrice: number;
  fiscalYear: string;
  warehouseNumber: string;
  onEdit: () => void;
  onDelete: () => void;
}

// Create InventoryEntry component using functional component syntax
const InventoryEntry: React.FC<InventoryEntryProps> = ({
  date,
  department,
  itemCode,
  itemName,
  spec,
  quantity,
  unitPrice,
  fiscalYear,
  warehouseNumber,
  onEdit,
  onDelete,
}) => {
  // Calculate the total amount
  const totalAmount = quantity * unitPrice;

  // Render the component
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">戻し出庫入力</h2>
          <p>入出庫日: {date}</p>
          <p>所属: {department}</p>
        </div>
        <div>
          <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={onEdit}>
            編集
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onDelete}>
            行削除
          </button>
        </div>
      </div>
      <table className="w-full bg-gray-100">
        <thead>
          <tr>
            <th className="text-left px-2 py-1">品番</th>
            <th className="text-left px-2 py-1">品名</th>
            <th className="text-left px-2 py-1">規格</th>
            <th className="text-left px-2 py-1">数量</th>
            <th className="text-left px-2 py-1">単価</th>
            <th className="text-left px-2 py-1">金額</th>
            <th className="text-left px-2 py-1">当初出庫年度</th>
            <th className="text-left px-2 py-1">当初出庫番号</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 py-1">{itemCode}</td>
            <td className="px-2 py-1">{itemName}</td>
            <td className="px-2 py-1">{spec}</td>
            <td className="px-2 py-1">{quantity}</td>
            <td className="px-2 py-1">{unitPrice.toFixed(2)}</td>
            <td className="px-2 py-1">{totalAmount.toFixed(2)}</td>
            <td className="px-2 py-1">{fiscalYear}</td>
            <td className="px-2 py-1">{warehouseNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Export the component for use in other files
export default InventoryEntry;
```