import React from 'react';

// Prop types definition
interface AssetManagementProps {
  assetNumber: string;
  assetName: string;
  details: string;
  quantity: number;
  unit: string;
  currentAmount: number;
  deductionAmount: number;
  onConfirm: () => void;
  onCancel: () => void;
  onClear: () => void;
}

const AssetManagement: React.FC<AssetManagementProps> = ({
  assetNumber,
  assetName,
  details,
  quantity,
  unit,
  currentAmount,
  deductionAmount,
  onConfirm,
  onCancel,
  onClear,
}) => {
  return (
    <div className="p-4 bg-white border rounded shadow-lg">
      <div className="mb-4">
        <div className="font-bold text-lg">除却資産管理入力</div>
      </div>
      <div className="flex justify-between mb-2">
        <div>資産番号: {assetNumber}</div>
        <div>資産名称: {assetName}</div>
        <div>除却額: {deductionAmount.toLocaleString()}</div>
      </div>
      <table className="mb-4 w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">管理名称</th>
            <th className="border p-2">管理規格名称</th>
            <th className="border p-2">現在数量</th>
            <th className="border p-2">除却数量</th>
            <th className="border p-2">単位</th>
            <th className="border p-2">現在金額</th>
            <th className="border p-2">除却金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{details}</td>
            <td className="border p-2">{details}</td>
            <td className="border p-2">{quantity}</td>
            <td className="border p-2">{quantity}</td>
            <td className="border p-2">{unit}</td>
            <td className="border p-2">{currentAmount.toLocaleString()}</td>
            <td className="border p-2">{deductionAmount.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end space-x-2">
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
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onClear}
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default AssetManagement;
```