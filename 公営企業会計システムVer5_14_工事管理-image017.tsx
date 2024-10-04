```tsx
import React from 'react';

// TypeScript型定義
type AssetItemProps = {
  assetCode: string;
  managementName: string;
  standardName: string;
  assetName: string;
  subAssetName: string;
  detailedAssetName: string;
  onEditClick: () => void;
  onDeleteClick: () => void;
};

// コンポーネントの定義
const AssetItem: React.FC<AssetItemProps> = ({
  assetCode,
  managementName,
  standardName,
  assetName,
  subAssetName,
  detailedAssetName,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <div className="border rounded p-4 shadow-md">
      <div className="text-lg font-bold mb-2">資産情報</div>
      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">単価コード</th>
            <th className="p-2">管理名称</th>
            <th className="p-2">規格名称</th>
            <th className="p-2">固定資産名称</th>
            <th className="p-2">固定資産細節名称</th>
            <th className="p-2">固定資産明細名称</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">{assetCode}</td>
            <td className="p-2">{managementName}</td>
            <td className="p-2">{standardName}</td>
            <td className="p-2">{assetName}</td>
            <td className="p-2">{subAssetName}</td>
            <td className="p-2">{detailedAssetName}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={onEditClick}
        >
          詳細編集
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onDeleteClick}
        >
          行削除
        </button>
      </div>
    </div>
  );
};

export default AssetItem;
```