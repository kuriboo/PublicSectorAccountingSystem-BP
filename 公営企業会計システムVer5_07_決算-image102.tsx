```tsx
import React from 'react';

// TypeScriptの型定義
type AdjustmentRatioCalculationProps = {
  title?: string;
  periodStart?: string;
  periodEnd?: string;
  onOk?: () => void;
  onExit?: () => void;
};

// 再利用可能なコンポーネント
const AdjustmentRatioCalculation: React.FC<AdjustmentRatioCalculationProps> = ({
  title = "調整割合算定",
  periodStart = "平成31年04月01日",
  periodEnd = "令和02年03月31日",
  onOk,
  onExit,
}) => {
  return (
    <div className="max-w-lg mx-auto border rounded-lg shadow-lg p-4 mt-10 bg-white">
      {/* タイトル */}
      <h1 className="text-2xl font-bold mb-4 text-purple-700">{title}</h1>
      
      {/* 範囲指定フォーム */}
      <div className="border px-4 py-2 mb-4">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">範囲指定</h2>
        <div className="flex items-center">
          <span className="font-bold mr-2">課税期間</span>
          <span>{periodStart}</span>
          <span className="mx-2">〜</span>
          <span>{periodEnd}</span>
        </div>
      </div>
      
      {/* ボタン群 */}
      <div className="flex justify-end space-x-4">
        <button
          className="bg-gray-200 px-4 py-2 rounded shadow"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded shadow"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AdjustmentRatioCalculation;
```