import React from 'react';

// Define the props for the component
interface AssetDetailProps {
  assetNumber: string;
  assetName: string;
  items: {
    date: string;
    categoryNumber: string;
    structureDetails: string;
    quantity: number;
    unit: string;
    amount: number;
  }[];
}

const AssetDetail: React.FC<AssetDetailProps> = ({ assetNumber, assetName, items }) => {
  return (
    <div className="bg-white shadow-md rounded p-6">
      {/* Asset Information */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">資産情報</h2>
        <div className="flex justify-between">
          <span>資産番号: {assetNumber}</span>
          <span>資産名称: {assetName}</span>
        </div>
      </div>
      {/* Items Table */}
      <table className="table-auto w-full text-left mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">異動年月日</th>
            <th className="px-4 py-2 border">枝番号</th>
            <th className="px-4 py-2 border">構造内容</th>
            <th className="px-4 py-2 border">異動数量</th>
            <th className="px-4 py-2 border">単位</th>
            <th className="px-4 py-2 border">異動金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{item.date}</td>
              <td className="px-4 py-2 border">{item.categoryNumber}</td>
              <td className="px-4 py-2 border">{item.structureDetails}</td>
              <td className="px-4 py-2 border">{item.quantity}</td>
              <td className="px-4 py-2 border">{item.unit}</td>
              <td className="px-4 py-2 border">{item.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Buttons */}
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          行確定
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetDetail;
