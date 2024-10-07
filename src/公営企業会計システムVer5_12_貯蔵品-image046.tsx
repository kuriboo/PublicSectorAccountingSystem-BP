import React from 'react';

type InventoryDetailsProps = {
  locationCode: string;
  locationName: string;
  itemCode: string;
  itemName: string;
  specification: string;
  unit: string;
  currentStock: number;
  currentStockValue: number;
  averageUnitPrice: number;
};

const InventoryDetails: React.FC<InventoryDetailsProps> = ({
  locationCode,
  locationName,
  itemCode,
  itemName,
  specification,
  unit,
  currentStock,
  currentStockValue,
  averageUnitPrice,
}) => {
  return (
    <div className="p-4 border border-gray-300 bg-white rounded shadow-lg">
      <h1 className="text-xl font-bold mb-4">月別在庫照会</h1>
      {/* Location Details */}
      <div className="mb-2">
        <span className="font-bold">保管場所:</span> {locationCode} {locationName}
      </div>

      {/* Item Details */}
      <div className="mb-2">
        <span className="font-bold">品番:</span> {itemCode}
      </div>
      <div className="mb-2">
        <span className="font-bold">品名:</span> {itemName}
      </div>
      <div className="mb-2">
        <span className="font-bold">規格:</span> {specification}
      </div>

      {/* Stock Details */}
      <div className="mb-2">
        <span className="font-bold">単位:</span> {unit}
      </div>
      <div className="mb-2">
        <span className="font-bold">現在庫数:</span> {currentStock}
      </div>
      <div className="mb-2">
        <span className="font-bold">現在庫金額:</span> {currentStockValue.toLocaleString()} 円
      </div>
      <div className="mb-2">
        <span className="font-bold">平均単価:</span> {averageUnitPrice.toLocaleString()} 円
      </div>

      {/* Actions */}
      <div className="flex justify-end mt-4">
        <button className="bg-gray-200 px-4 py-2 mx-2 rounded">クリア</button>
        <button className="bg-gray-200 px-4 py-2 mx-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default InventoryDetails;
