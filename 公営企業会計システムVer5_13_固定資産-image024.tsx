```tsx
// components/AssetDetails.tsx

import React from 'react';

// 型定義
interface AssetDetailProps {
  assetNumber: string;
  assetName: string;
  values: {
    currentValue: number;
    previousValue: number;
    changeAmount: number;
    accumulatedDepreciation: number;
    bookValue: number;
  }[];
  editMode?: boolean;
}

const AssetDetails: React.FC<AssetDetailProps> = ({
  assetNumber,
  assetName,
  values,
  editMode = false,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">資産編集入力</h2>
      <div className="border-b border-gray-300 pb-2 mb-4">
        <div>資産番号: {assetNumber}</div>
        <div>資産名称: {assetName}</div>
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="p-2">現在価額</th>
            <th className="p-2">借却累計額</th>
            <th className="p-2">異動額</th>
            <th className="p-2">帳簿原価</th>
            <th className="p-2">借却累計額</th>
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
            >
              <td className="p-2 text-center border">{value.currentValue.toLocaleString()}</td>
              <td className="p-2 text-center border">{value.previousValue.toLocaleString()}</td>
              <td className="p-2 text-center border">{value.changeAmount.toLocaleString()}</td>
              <td className="p-2 text-center border">{value.accumulatedDepreciation.toLocaleString()}</td>
              <td className="p-2 text-center border">{value.bookValue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {editMode && (
        <div className="flex justify-end space-x-2 mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">行確定</button>
          <button className="px-4 py-2 bg-gray-300 rounded">行キャンセル</button>
        </div>
      )}
    </div>
  );
};

export default AssetDetails;
```