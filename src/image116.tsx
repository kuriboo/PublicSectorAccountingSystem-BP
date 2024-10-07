import React from 'react';

// TypeScript interface for component props
interface AssetManagementProps {
  title?: string;
  date?: string;
  headerDetails?: {
    department?: string;
    officer?: string;
  };
  assetData?: Array<{
    assetNumber: number;
    name: string;
    acquisitionDate: string;
    facilityName: string;
    division: string;
  }>;
  onDisplay?: () => void;
  onOk?: () => void;
  onClear?: () => void;
  onExit?: () => void;
}

const AssetManagement: React.FC<AssetManagementProps> = ({
  title = "アセットマネジメント様式保守",
  date = "平成29年08月14日",
  headerDetails = { department: "総務課 予算・会計担当", officer: "ぎょうせいたろう" },
  assetData = [],
  onDisplay,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-2">
        <div className="text-xl font-bold">{title}</div>
        <div className="text-sm">{headerDetails.department} {headerDetails.officer}</div>
      </div>
      <div className="mb-4 text-right">{date}</div>
      
      <button className="bg-gray-200 py-1 px-4 rounded text-sm mb-4" onClick={onDisplay}>表示</button>
      
      <table className="w-full shadow-sm border-collapse table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">資産番号</th>
            <th className="border px-4 py-2 text-left">名称</th>
            <th className="border px-4 py-2 text-left">取得年月日</th>
            <th className="border px-4 py-2 text-left">施設名</th>
            <th className="border px-4 py-2 text-left">区分</th>
          </tr>
        </thead>
        <tbody>
          {assetData.map((asset, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="border px-4 py-2">{asset.assetNumber}</td>
              <td className="border px-4 py-2">{asset.name}</td>
              <td className="border px-4 py-2">{asset.acquisitionDate}</td>
              <td className="border px-4 py-2">{asset.facilityName}</td>
              <td className="border px-4 py-2">{asset.division}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onOk}>OK</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default AssetManagement;
```