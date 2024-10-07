// imports
import React from 'react';

// Props type definition
type InventoryEntryProps = {
  date: string;
  location: string;
  constructionSite: string;
  itemNumber: string;
  itemName: string;
  specification: string;
  quantity: number;
  unit: string;
  deliveryDate: string;
  unitPrice: number;
};

// InventoryEntry component
const InventoryEntry: React.FC<InventoryEntryProps> = ({
  date,
  location,
  constructionSite,
  itemNumber,
  itemName,
  specification,
  quantity,
  unit,
  deliveryDate,
  unitPrice,
}) => {
  const totalAmount = quantity * unitPrice;

  return (
    <div className="p-4 bg-gray-100 border rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">出庫予定入力</h2>

      <div className="mb-4">
        <label className="block font-bold mb-1">処理年月日:</label>
        <span>{date}</span>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">保管場所:</label>
        <span>{location}</span>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">工事名場所:</label>
        <span>{constructionSite}</span>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">品番</th>
            <th className="border p-2">品名</th>
            <th className="border p-2">規格</th>
            <th className="border p-2">数量</th>
            <th className="border p-2">単位</th>
            <th className="border p-2">出庫予定日</th>
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
            <td className="border p-2">{deliveryDate}</td>
            <td className="border p-2">{unitPrice.toFixed(2)}</td>
            <td className="border p-2">{totalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InventoryEntry;
