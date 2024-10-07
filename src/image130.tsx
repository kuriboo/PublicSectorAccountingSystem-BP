// Import necessary libraries
import React from 'react';

// Define the types for the component's props
type AssetRecordProps = {
  assetNumber: string;
  assetName: string;
  movementDate: string;
  movementAmount: number;
  depreciationRate: number;
  remainingValue: number;
  onSave: () => void;
  onCancel: () => void;
};

const AssetRecord: React.FC<AssetRecordProps> = ({
  assetNumber,
  assetName,
  movementDate,
  movementAmount,
  depreciationRate,
  remainingValue,
  onSave,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <div className="mb-4">
        <h2 className="text-xl font-bold">資産異動履歴</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">資産番号</label>
          <span className="block">{assetNumber}</span>
        </div>
        <div>
          <label className="block text-sm font-medium">資産名称</label>
          <span className="block">{assetName}</span>
        </div>
        <div>
          <label className="block text-sm font-medium">異動年月日</label>
          <span className="block">{movementDate}</span>
        </div>
        <div>
          <label className="block text-sm font-medium">異動金額</label>
          <span className="block">{movementAmount.toLocaleString()}</span>
        </div>
        <div>
          <label className="block text-sm font-medium">償却限度率</label>
          <span className="block">{depreciationRate.toFixed(2)}%</span>
        </div>
        <div>
          <label className="block text-sm font-medium">残存価額</label>
          <span className="block">{remainingValue.toLocaleString()}</span>
        </div>
      </div>
      <div className="mt-4">
        <button 
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onSave}
        >
          行確定
        </button>
        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetRecord;
