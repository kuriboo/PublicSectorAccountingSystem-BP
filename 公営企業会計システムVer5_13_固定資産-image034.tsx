import React from 'react';

type AssetDetailsProps = {
  assetNumber: string;
  assetName: string;
  modificationAmount: number;
  managementItems: ManagementItem[];
  onConfirm: () => void;
  onCancel: () => void;
};

type ManagementItem = {
  name: string;
  spec: string;
  currentAmount: number;
  modificationAmount: number;
  unit: string;
  currentAmountValue: number;
  specificationCode: number;
};

const AssetDetails: React.FC<AssetDetailsProps> = ({
  assetNumber,
  assetName,
  modificationAmount,
  managementItems,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="font-bold">資産番号:</span> {assetNumber}
        </div>
        <div>
          <span className="font-bold">資産名称:</span> {assetName}
        </div>
        <div>
          <span className="font-bold">改良金額:</span> {modificationAmount.toLocaleString()}
        </div>
      </div>

      <table className="w-full border mb-4">
        <thead>
          <tr>
            <th>管理名称</th>
            <th>管理規格名称</th>
            <th>現在数量</th>
            <th>改良数量</th>
            <th>単位</th>
            <th>現在金額</th>
          </tr>
        </thead>
        <tbody>
          {managementItems.map((item, index) => (
            <tr key={index} className="border-t">
              <td>{item.name}</td>
              <td>{item.spec}</td>
              <td>{item.currentAmount}</td>
              <td>{item.modificationAmount}</td>
              <td>{item.unit}</td>
              <td>{item.currentAmountValue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          行確定
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetDetails;