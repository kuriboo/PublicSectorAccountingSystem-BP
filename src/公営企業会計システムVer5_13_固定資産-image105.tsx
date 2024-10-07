import React from 'react';

// TypeScriptの型定義
type AssetMovementProps = {
  assetNumber: string;
  assetName: string;
  date: string;
  details: {
    type: string;
    amount: number;
    total: number;
    originalValue: number;
  };
  components: {
    techNumber: number;
    description: string;
    quantity: number;
    unit: string;
    amount: number;
  }[];
  onConfirm: () => void;
  onCancel: () => void;
};

const AssetMovement: React.FC<AssetMovementProps> = ({
  assetNumber,
  assetName,
  date,
  details,
  components,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <div className="mb-4">
        <div className="text-lg font-bold">資産番号: {assetNumber}</div>
        <div className="text-lg">資産名称: {assetName}</div>
      </div>
      <table className="w-full mb-4 border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">異動年月日</th>
            <th className="border px-2 py-1">異動区分</th>
            <th className="border px-2 py-1">異動額(資産)</th>
            <th className="border px-2 py-1">異動額(明細合計)</th>
            <th className="border px-2 py-1">異動後帳簿原価</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">{date}</td>
            <td className="border px-2 py-1">{details.type}</td>
            <td className="border px-2 py-1">{details.amount.toLocaleString()}</td>
            <td className="border px-2 py-1">{details.total.toLocaleString()}</td>
            <td className="border px-2 py-1">{details.originalValue.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full mb-4 border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">枝番号</th>
            <th className="border px-2 py-1">構造内容</th>
            <th className="border px-2 py-1">異動数量</th>
            <th className="border px-2 py-1">単位</th>
            <th className="border px-2 py-1">異動金額</th>
          </tr>
        </thead>
        <tbody>
          {components.map((component, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{component.techNumber}</td>
              <td className="border px-2 py-1">{component.description}</td>
              <td className="border px-2 py-1">{component.quantity}</td>
              <td className="border px-2 py-1">{component.unit}</td>
              <td className="border px-2 py-1">{component.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          確定
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-black rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetMovement;
```