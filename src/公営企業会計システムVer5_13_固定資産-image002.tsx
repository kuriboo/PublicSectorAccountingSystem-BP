import React from 'react';
import 'tailwindcss/tailwind.css';

type AssetDetail = {
  nameCode: string;
  specCode: string;
  managementName: string;
  managementSpec: string;
  qty: number;
  unit: string;
  amount: number;
};

type AssetInputProps = {
  assetNumber: string;
  assetName: string;
  acquisitionAmount: number;
  details: AssetDetail[];
  onConfirm: () => void;
  onCancel: () => void;
};

const AssetInput: React.FC<AssetInputProps> = ({
  assetNumber,
  assetName,
  acquisitionAmount,
  details,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md">
      <div className="mb-4">
        <span className="font-bold">資産番号:</span> {assetNumber}
        <span className="ml-4 font-bold">資産名称:</span> {assetName}
        <span className="ml-4 font-bold">取得価額:</span> {acquisitionAmount.toLocaleString()}
      </div>
      
      <table className="table-auto w-full mb-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-2 py-1 border">名称コード</th>
            <th className="px-2 py-1 border">規格コード</th>
            <th className="px-2 py-1 border">管理名称</th>
            <th className="px-2 py-1 border">管理規格名称</th>
            <th className="px-2 py-1 border">取得数量</th>
            <th className="px-2 py-1 border">単位</th>
            <th className="px-2 py-1 border">取得金額</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td className="px-2 py-1 border">{detail.nameCode}</td>
              <td className="px-2 py-1 border">{detail.specCode}</td>
              <td className="px-2 py-1 border">{detail.managementName}</td>
              <td className="px-2 py-1 border">{detail.managementSpec}</td>
              <td className="px-2 py-1 border">{detail.qty}</td>
              <td className="px-2 py-1 border">{detail.unit}</td>
              <td className="px-2 py-1 border">{detail.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-end space-x-3">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onConfirm}>
          行確定
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={onCancel}>
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetInput;
```