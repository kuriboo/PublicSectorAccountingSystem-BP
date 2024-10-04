```tsx
import React from 'react';

// Props for the component
interface AssetSummaryProps {
  assetNumber: string;
  assetName: string;
  previousBalance: number;
  currentAmountAdded: number;
  currentAmountSubtracted: number;
  totalBalance: number;
  onEdit: () => void;
  onOk: () => void;
  onClear: () => void;
  onEnd: () => void;
}

const AssetSummary: React.FC<AssetSummaryProps> = ({
  assetNumber,
  assetName,
  previousBalance,
  currentAmountAdded,
  currentAmountSubtracted,
  totalBalance,
  onEdit,
  onOk,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100 border rounded-lg">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-2">財源別固定資産累計マスタ</h1>
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="font-bold mr-2">資産番号:</span>
            <span>{assetNumber}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">資産名称:</span>
            <span>{assetName}</span>
          </div>
        </div>
      </div>

      {/* Balance Section */}
      <div className="mb-4">
        <div className="border p-2">
          <p>帳簿原価 前期末残高: {previousBalance.toLocaleString()}</p>
          <p>当期増加額: {currentAmountAdded.toLocaleString()}</p>
          <p>当期減少額: {currentAmountSubtracted.toLocaleString()}</p>
          <p>現在高: {totalBalance.toLocaleString()}</p>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-end space-x-4 mt-4">
        <button onClick={onEdit} className="bg-blue-500 text-white px-4 py-2 rounded">
          編集
        </button>
        <button onClick={onOk} className="bg-green-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onEnd} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetSummary;
```