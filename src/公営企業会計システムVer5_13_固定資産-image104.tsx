// AssetDetailCard.tsx
import React from 'react';

type AssetMovement = {
  date: string;
  division: string;
  summary: string;
  assetAmount: number;
  detailAmount: number;
  accountAmount: number;
};

type AssetDetailProps = {
  assetNumber: string;
  assetName: string;
  managementInfo: boolean;
  movements: AssetMovement[];
  onEditClick: () => void;
  onConfirmClick: () => void;
  onCancelClick: () => void;
};

const AssetDetailCard: React.FC<AssetDetailProps> = ({
  assetNumber,
  assetName,
  managementInfo,
  movements,
  onEditClick,
  onConfirmClick,
  onCancelClick,
}) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div>
            資産番号: <span className="font-bold">{assetNumber}</span>
          </div>
          <div>
            資産名称: <span className="font-bold">{assetName}</span>
          </div>
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" checked={managementInfo} readOnly />
            <span className="ml-2">管理情報を引継ぐ</span>
          </label>
        </div>
      </div>

      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th>異動年月日</th>
            <th>異動区分</th>
            <th>異動摘要</th>
            <th>異動金額(資産)</th>
            <th>異動金額(明細)</th>
            <th>異動後帳簿原価</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((movement, index) => (
            <tr key={index} className="border-b">
              <td>{movement.date}</td>
              <td>{movement.division}</td>
              <td>{movement.summary}</td>
              <td>{movement.assetAmount.toLocaleString()}</td>
              <td>{movement.detailAmount.toLocaleString()}</td>
              <td>{movement.accountAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onEditClick}
        >
          編集
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={onConfirmClick}
        >
          行確定
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onCancelClick}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetDetailCard;
```