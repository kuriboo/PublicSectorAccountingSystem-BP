// AssetFormComponent.tsx

import React from 'react';

// Props の型定義
interface AssetFormProps {
  assetNumber: string;
  assetName: string;
  constructionNumber: string;
  unit: number;
  currentQuantity: number;
  currentAmount: number;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onClear: () => void;
  onExit: () => void;
}

const AssetFormComponent: React.FC<AssetFormProps> = ({
  assetNumber,
  assetName,
  constructionNumber,
  unit,
  currentQuantity,
  currentAmount,
  onRegister,
  onEdit,
  onDelete,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md max-w-md mx-auto">
      <h1 className="text-lg font-bold text-center mb-4">構造資産累計マスタ</h1>

      {/* 資産情報 */}
      <div className="flex justify-between items-center mb-2">
        <label className="font-semibold">資産番号</label>
        <input
          type="text"
          value={assetNumber}
          readOnly
          className="border px-2 py-1"
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <label className="font-semibold">資産名称</label>
        <span>{assetName}</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <label className="font-semibold">構造枝番号</label>
        <input
          type="text"
          value={constructionNumber}
          readOnly
          className="border px-2 py-1"
        />
      </div>

      {/* 単位 */}
      <div className="flex justify-between items-center mb-2">
        <label className="font-semibold">単位</label>
        <input
          type="number"
          value={unit}
          readOnly
          className="border px-2 py-1"
        />
      </div>

      {/* 現在数量 */}
      <div className="flex justify-between items-center mb-2">
        <label className="font-semibold">現在数量</label>
        <input
          type="number"
          value={currentQuantity}
          readOnly
          className="border px-2 py-1"
        />
      </div>

      {/* 現在金額 */}
      <div className="flex justify-between items-center mb-2">
        <label className="font-semibold">現在金額</label>
        <input
          type="number"
          value={currentAmount}
          readOnly
          className="border px-2 py-1"
        />
      </div>

      {/* 操作ボタン */}
      <div className="flex justify-between mt-4">
        <button onClick={onRegister} className="btn">登録</button>
        <button onClick={onEdit} className="btn">訂正</button>
        <button onClick={onDelete} className="btn">削除</button>
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={onClear} className="btn">クリア</button>
        <button onClick={onExit} className="btn">終了</button>
      </div>

      {/* Tailwind CSS のスタイル */}
      <style jsx>{`
        .btn {
          background-color: #e2e8f0;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          text-align: center;
        }

        .btn:hover {
          background-color: #cbd5e0;
        }
      `}</style>
    </div>
  );
};

export default AssetFormComponent;
```