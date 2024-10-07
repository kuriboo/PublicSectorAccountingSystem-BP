// AssetYearUpdateCancel.tsx

import React from 'react';

// Props type definition
interface AssetYearUpdateCancelProps {
  currentYear: number;
  previousYear: number;
  onConfirm: () => void;
  onCancel: () => void;
}

const AssetYearUpdateCancel: React.FC<AssetYearUpdateCancelProps> = ({
  currentYear,
  previousYear,
  onConfirm,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-xl max-w-lg mx-auto">
      <h1 className="text-xl font-bold text-purple-700 mb-4">固定資産年次更新取消</h1>
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span>当期会計年度</span>
          <span>平成{currentYear}年度</span>
        </div>
        <div className="flex justify-between">
          <span>前期会計年度</span>
          <span>平成{previousYear}年度</span>
        </div>
      </div>
      <div className="bg-gray-100 p-3 border rounded">
        <h2 className="font-bold mb-2">処理概要</h2>
        <p className="mb-2">
          平成{currentYear}年度の処理会計年度を取り消し、平成{previousYear}年度へ戻す処理を行います。
        </p>
        <p className="text-xs text-red-500">
          年次更新取消処理が完了するまでは、異動処理及びマスタメンテナンスによる固定資産データの更新を行わないでください。
        </p>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button 
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          onClick={onCancel}>
          エラー確認
        </button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onConfirm}>
          OK
        </button>
        <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onCancel}>
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetYearUpdateCancel;
```