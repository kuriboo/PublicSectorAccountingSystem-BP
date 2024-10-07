import React from 'react';

// プロパティの型定義
interface AssetCompositionProps {
  fixedAsset: number;
  currentAsset: number;
  deferredAsset: number;
  onElementMasterClick: () => void;
  onElementDetailClick: () => void;
}

// コンポーネント
const AssetComposition: React.FC<AssetCompositionProps> = ({
  fixedAsset,
  currentAsset,
  deferredAsset,
  onElementMasterClick,
  onElementDetailClick,
}) => {
  // 固定資産構成比率の計算
  const totalAssets = fixedAsset + currentAsset + deferredAsset;
  const compositionRatio = ((fixedAsset / totalAssets) * 100).toFixed(2);

  return (
    <div className="flex flex-col items-center bg-gray-500 p-4">
      {/* 上部ボタン */}
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-orange-200 p-2"
          onClick={onElementMasterClick}
        >
          要素マスタ
        </button>
        <button
          className="bg-orange-200 p-2"
          onClick={onElementDetailClick}
        >
          要素マスタ明細入力
        </button>
      </div>

      {/* 中央の計算エリア */}
      <div className="flex items-center bg-white p-2">
        <span className="mr-2">固定資産構成比率 (%)</span>
        <div className="flex flex-grow bg-orange-200 justify-center mx-2">
          <span>固定資産</span>
        </div>
        <span className="ml-2">× 100</span>
        <div className="ml-4">{compositionRatio} =</div>
      </div>

      {/* 下部の詳細エリア */}
      <div className="flex justify-around bg-gray-300 mt-4 p-2">
        <span className="bg-orange-200 p-1">固定資産</span>
        <span className="mx-2">+</span>
        <span className="bg-orange-200 p-1">流動資産</span>
        <span className="mx-2">+</span>
        <span className="bg-orange-200 p-1">繰延動</span>
      </div>
    </div>
  );
};

export default AssetComposition;
```