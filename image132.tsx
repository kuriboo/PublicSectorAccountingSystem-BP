```tsx
// AssetDetails.tsx
import React from 'react';

type AssetDetailsProps = {
  assetNumber: string;
  assetName: string;
  movementDate: string;
  nameCode: string;
  specCode: string;
  managementName: string;
  managementSpecName: string;
  movementQuantity: number;
  unit: string;
  movementAmount: number;
  onConfirm: () => void;
  onCancel: () => void;
};

const AssetDetails: React.FC<AssetDetailsProps> = ({
  assetNumber,
  assetName,
  movementDate,
  nameCode,
  specCode,
  managementName,
  managementSpecName,
  movementQuantity,
  unit,
  movementAmount,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="mb-4">
        <h2 className="text-lg font-bold">{`資産番号: ${assetNumber}`}</h2>
        <p>{`資産名称: ${assetName}`}</p>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">異動年月日</th>
            <th>名称コード</th>
            <th>規格コード</th>
            <th>管理名称</th>
            <th>管理規格名称</th>
            <th>異動数量</th>
            <th>単位</th>
            <th>異動金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">{movementDate}</td>
            <td>{nameCode}</td>
            <td>{specCode}</td>
            <td>{managementName}</td>
            <td>{managementSpecName}</td>
            <td>{movementQuantity.toFixed(2)}</td>
            <td>{unit}</td>
            <td>{movementAmount.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none"
        >
          行確定
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600 focus:outline-none"
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetDetails;
```