import React from 'react';

// TypeScript 型定義
type ItemDetailsProps = {
  itemNumber: string;
  itemName: string;
  specification: string;
  entries: Array<{
    entryDate: string;
    quantity: number;
    unitPrice: number;
    entryYear: number;
    entryNumber: number;
  }>;
  exitDetails: {
    targetEntryDate: string;
    entryYear: number;
    entryNumber: number;
    quantity: number;
    unit: string;
    unitPrice: number;
    temporaryExitQuantity: number;
    currentStockQuantity: number;
  };
};

const ItemDetails: React.FC<ItemDetailsProps> = ({
  itemNumber,
  itemName,
  specification,
  entries,
  exitDetails,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <div className="flex space-x-2">
          <span className="font-bold">品番:</span>
          <span>{itemNumber}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">品名:</span>
          <span>{itemName}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">規格:</span>
          <span>{specification}</span>
        </div>
      </div>

      <div className="mb-4">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
          <thead className="bg-blue-500">
            <tr>
              <th className="px-4 py-2 text-left text-white">入庫日</th>
              <th className="px-4 py-2 text-left text-white">数量</th>
              <th className="px-4 py-2 text-left text-white">単価</th>
              <th className="px-4 py-2 text-left text-white">入庫年度</th>
              <th className="px-4 py-2 text-left text-white">入庫番号</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {entries.map((entry, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{entry.entryDate}</td>
                <td className="px-4 py-2 border">{entry.quantity}</td>
                <td className="px-4 py-2 border">{entry.unitPrice}</td>
                <td className="px-4 py-2 border">{entry.entryYear}</td>
                <td className="px-4 py-2 border">{entry.entryNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-300 pt-4">
        <div className="flex space-x-2">
          <span className="font-bold">出庫対象入庫日:</span>
          <span>{exitDetails.targetEntryDate}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">入庫年度:</span>
          <span>{exitDetails.entryYear}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">入庫番号:</span>
          <span>{exitDetails.entryNumber}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">数量:</span>
          <span>{exitDetails.quantity}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">単位:</span>
          <span>{exitDetails.unit}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">単価:</span>
          <span>{exitDetails.unitPrice}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">仮出庫数:</span>
          <span>{exitDetails.temporaryExitQuantity}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">現在庫数:</span>
          <span>{exitDetails.currentStockQuantity}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
