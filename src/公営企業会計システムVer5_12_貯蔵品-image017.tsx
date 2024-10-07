import React from 'react';

type InventoryData = {
  date: string;
  quantity: number;
  unitPrice: number;
  total: number;
};

type InventoryComponentProps = {
  productNumber: string;
  productName: string;
  specification: string;
  currentInventory: number;
  unit: string;
  unitPrice: number;
  totalAmount: number;
  scheduledDate: string;
  remainingOrder: number;
  inventoryData: InventoryData[];
};

const InventoryComponent: React.FC<InventoryComponentProps> = ({
  productNumber,
  productName,
  specification,
  currentInventory,
  unit,
  unitPrice,
  totalAmount,
  scheduledDate,
  remainingOrder,
  inventoryData,
}) => {
  return (
    <div className="border p-4 max-w-md bg-white">
      <div className="mb-4">
        <div>品番: {productNumber}</div>
        <div>品名: {productName}</div>
        <div>規格: {specification}</div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div>入庫数: {currentInventory}</div>
        <div>単価: {unitPrice.toLocaleString()}</div>
        <div>合計: {totalAmount.toLocaleString()}</div>
        <div>入庫予定日: {scheduledDate}</div>
        <div>発注残数: {remainingOrder}</div>
      </div>
      <table className="w-full border-t border-b">
        <thead>
          <tr>
            <th>入庫日</th>
            <th>数量</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((entry, index) => (
            <tr key={index} className="border-b">
              <td>{entry.date}</td>
              <td>{entry.quantity.toFixed(2)}</td>
              <td>{entry.unitPrice.toLocaleString()}</td>
              <td>{entry.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryComponent;
