```tsx
// AssetManagementTable.tsx
import React from 'react';

// TypeScriptの型定義
type Asset = {
  assetNumber: number;
  name: string;
  acquisitionDate: string;
  facilityName: string;
  division: string;
};

type AssetManagementTableProps = {
  assets: Asset[];
  onDisplay: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AssetManagementTable: React.FC<AssetManagementTableProps> = ({
  assets,
  onDisplay,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">アセットマネジメント 様式保守</h1>
      
      <div className="flex justify-between mb-4">
        <div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={onDisplay}
          >
            表示
          </button>
        </div>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 px-4 py-2">資産番号</th>
            <th className="border border-gray-300 px-4 py-2">名称</th>
            <th className="border border-gray-300 px-4 py-2">取得年月日</th>
            <th className="border border-gray-300 px-4 py-2">施設名</th>
            <th className="border border-gray-300 px-4 py-2">区分</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={index} className="bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{asset.assetNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{asset.name}</td>
              <td className="border border-gray-300 px-4 py-2">{asset.acquisitionDate}</td>
              <td className="border border-gray-300 px-4 py-2">{asset.facilityName}</td>
              <td className="border border-gray-300 px-4 py-2">{asset.division}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={onOk}>
          OK
        </button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={onClose}>
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetManagementTable;
```