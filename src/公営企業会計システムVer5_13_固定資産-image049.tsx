// AssetMovementInput.tsx
import React from "react";

type AssetMovementInputProps = {
  assetNumber: string;
  movementAmount: number;
  details: {
    name: string;
    size: string;
    currentAmount: number;
    movementQuantity: number;
    unit: string;
    currentPrice: number;
    movementPrice: number;
  };
  onConfirm: () => void;
  onCancel: () => void;
};

const AssetMovementInput: React.FC<AssetMovementInputProps> = ({
  assetNumber,
  movementAmount,
  details,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">異動予測管理入力</h2>
      <div className="mb-4">
        <div>
          <strong>資産番号:</strong> {assetNumber}
        </div>
        <div>
          <strong>異動額:</strong> {movementAmount.toLocaleString()}
        </div>
      </div>
      <table className="min-w-full table-auto border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">管種名称</th>
            <th className="border px-4 py-2">管種規格名称</th>
            <th className="border px-4 py-2">現在数量</th>
            <th className="border px-4 py-2">異動数量</th>
            <th className="border px-4 py-2">単位</th>
            <th className="border px-4 py-2">現在金額</th>
            <th className="border px-4 py-2">異動金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{details.name}</td>
            <td className="border px-4 py-2">{details.size}</td>
            <td className="border px-4 py-2">{details.currentAmount}</td>
            <td className="border px-4 py-2">{details.movementQuantity}</td>
            <td className="border px-4 py-2">{details.unit}</td>
            <td className="border px-4 py-2">{details.currentPrice.toLocaleString()}</td>
            <td className="border px-4 py-2">{details.movementPrice.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end space-x-2">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={onConfirm}>
          行確定
        </button>
        <button 
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400" 
          onClick={onCancel}>
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetMovementInput;
