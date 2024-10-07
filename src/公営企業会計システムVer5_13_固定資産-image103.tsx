import React from 'react';

type AssetDetailsProps = {
  assetNumber: string;
  assetName: string;
  managementAsset: string;
  movements: {
    date: string;
    description: string;
    amount: number;
    comment: string;
    color?: string; // Optional for styling specific rows
  }[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const AssetDetails: React.FC<AssetDetailsProps> = ({
  assetNumber,
  assetName,
  managementAsset,
  movements,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <div className="flex space-x-4">
          <div>
            <label className="block font-bold">資産番号</label>
            <span>{assetNumber}</span>
          </div>
          <div>
            <label className="block font-bold">資産名称</label>
            <span>{assetName}</span>
          </div>
          <div>
            <label className="block font-bold">管理資産</label>
            <span>{managementAsset}</span>
          </div>
        </div>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">異動年月日</th>
            <th className="border p-2">異動区分</th>
            <th className="border p-2">異動金額</th>
            <th className="border p-2">コメント</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((movement, index) => (
            <tr key={index} className={`border ${movement.color ? movement.color : ''}`}>
              <td className="p-2">{movement.date}</td>
              <td className="p-2">{movement.description}</td>
              <td className="p-2">{movement.amount.toLocaleString()}</td>
              <td className="p-2">{movement.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-4 flex justify-end space-x-2">
        <button 
          onClick={onConfirm} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          確定
        </button>
        <button 
          onClick={onClear} 
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetDetails;