import React from 'react';

type AssetInputFormProps = {
  assetNumber: string;
  assetName: string;
  acquisitionAmount: number;
  structureContent: string;
  quantity: number;
  unit: string;
  amountObtained: number;
  onConfirm: () => void;
  onCancel: () => void;
};

const AssetInputForm: React.FC<AssetInputFormProps> = ({
  assetNumber,
  assetName,
  acquisitionAmount,
  structureContent,
  quantity,
  unit,
  amountObtained,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* Asset Information */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="font-bold">資産番号: </span>
          {assetNumber}
        </div>
        <div>
          <span className="font-bold">資産名称: </span>
          {assetName}
        </div>
        <div>
          <span className="font-bold">取得価額: </span>
          {acquisitionAmount}
        </div>
      </div>

      {/* Table for Structure Content */}
      <div className="mb-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">行No.</th>
              <th className="border p-2">構造内容</th>
              <th className="border p-2">数量</th>
              <th className="border p-2">単位</th>
              <th className="border p-2">取得金額</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="border p-2">1</td>
              <td className="border p-2">{structureContent}</td>
              <td className="border p-2">{quantity}</td>
              <td className="border p-2">{unit}</td>
              <td className="border p-2">{amountObtained}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Detailed Structure Editing */}
      <div className="flex flex-col mb-4">
        <label className="font-bold">構造内容</label>
        <input
          type="text"
          value={structureContent}
          readOnly
          className="border px-2 py-1 mb-2"
        />

        <label className="font-bold">取得数量</label>
        <input
          type="number"
          value={quantity}
          readOnly
          className="border px-2 py-1 mb-2"
        />

        <label className="font-bold">単位</label>
        <input
          type="text"
          value={unit}
          readOnly
          className="border px-2 py-1 mb-2"
        />

        <label className="font-bold">取得金額</label>
        <input
          type="text"
          value={amountObtained.toLocaleString()}
          readOnly
          className="border px-2 py-1"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          行確定
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetInputForm;