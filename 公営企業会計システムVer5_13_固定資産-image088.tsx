```tsx
import React from 'react';

type AssetInfoProps = {
  assetNumber: string;
  assetName: string;
  details: {
    itemCode: string;
    specCode: string;
    pipeName: string;
    pipeSpecName: string;
    quantity: number;
    unit: string;
    amount: string;
  }[];
};

const AssetInfo: React.FC<AssetInfoProps> = ({ assetNumber, assetName, details }) => {
  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between mb-2 text-lg">
        <div>資産番号: {assetNumber}</div>
        <div>資産名称: {assetName}</div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="border px-2 py-1">名称コード</th>
            <th className="border px-2 py-1">規格コード</th>
            <th className="border px-2 py-1">管理名称</th>
            <th className="border px-2 py-1">管理規格名称</th>
            <th className="border px-2 py-1">数量</th>
            <th className="border px-2 py-1">単位</th>
            <th className="border px-2 py-1">金額</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} className="text-center">
              <td className="border px-2 py-1">{detail.itemCode}</td>
              <td className="border px-2 py-1">{detail.specCode}</td>
              <td className="border px-2 py-1">{detail.pipeName}</td>
              <td className="border px-2 py-1">{detail.pipeSpecName}</td>
              <td className="border px-2 py-1">{detail.quantity}</td>
              <td className="border px-2 py-1">{detail.unit}</td>
              <td className="border px-2 py-1">{detail.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetInfo;
```