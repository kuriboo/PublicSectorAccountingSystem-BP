import React from 'react';

type AssetManagementProps = {
  assetNumber: string;
  assetName: string;
  originalValue: number;
  currentQuantity: number;
  unit: string;
  currentAmount: number;
  onConfirm: () => void;
  onCancel: () => void;
};

const AssetManagement: React.FC<AssetManagementProps> = ({
  assetNumber,
  assetName,
  originalValue,
  currentQuantity,
  unit,
  currentAmount,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="flex justify-between mb-4">
        <div>
          <span className="font-bold">資産番号</span>: {assetNumber}
        </div>
        <div>
          <span className="font-bold">資産名称</span>: {assetName}
        </div>
        <div>
          <span className="font-bold">更正後帳簿原価</span>: {originalValue.toLocaleString()}
        </div>
      </div>

      <table className="w-full mb-4 border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 p-2">管理名称</th>
            <th className="border border-gray-300 p-2">現在数量</th>
            <th className="border border-gray-300 p-2">単位</th>
            <th className="border border-gray-300 p-2">現在金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">{assetName}</td>
            <td className="border border-gray-300 p-2">{currentQuantity}</td>
            <td className="border border-gray-300 p-2">{unit}</td>
            <td className="border border-gray-300 p-2">{currentAmount.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetManagement;
```