```tsx
import React from 'react';

// TypeScript型定義
interface FixedAssetCompositionProps {
  fixedAssets: number;
  currentAssets: number;
  deferredAssets: number;
  result: number;
}

const FixedAssetComposition: React.FC<FixedAssetCompositionProps> = ({
  fixedAssets,
  currentAssets,
  deferredAssets,
  result,
}) => {
  return (
    <div className="bg-gray-700 p-4 flex items-center justify-between">
      {/* 固定資産構成比率 (%) */}
      <div className="bg-orange-400 text-black px-4 py-2">
        固定資産構成比率 (%)
      </div>

      {/* 分数の式 */}
      <div className="flex items-center">
        <div className="border border-black px-4 py-2 text-black">
          固定資産
        </div>
        <div className="text-black mx-2">÷</div>
        <div className="flex items-center">
          <div className="border border-black px-4 py-2 text-black">
            固定資産 + 流動資産 + 繰延勘定
          </div>
        </div>
      </div>

      {/* ×100 */}
      <div className="text-black flex items-center">
        ×<div className="bg-orange-400 text-black px-2 ml-1">100</div>
      </div>

      {/* = 結果 */}
      <div className="flex items-center">
        <div className="text-black mr-1">=</div>
        <div className="border border-black px-4 py-2 text-black">
          {result.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default FixedAssetComposition;
```