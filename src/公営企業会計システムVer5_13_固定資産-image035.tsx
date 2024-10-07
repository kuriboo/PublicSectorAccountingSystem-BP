import React from 'react';

// TypeScriptの型定義
type AssetInputProps = {
  assetNumber: string;
  assetName: string;
  currentAmount: number;
  onEdit: () => void;
  onDelete: () => void;
  onConfirm: () => void;
  onCancel: () => void;
};

// コンポーネント定義
const AssetInput: React.FC<AssetInputProps> = ({
  assetNumber,
  assetName,
  currentAmount,
  onEdit,
  onDelete,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded">
      {/* ヘッダー */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="font-bold">資産番号: </span>
          {assetNumber}
        </div>
        <div>
          <span className="font-bold">資産名称: </span>
          {assetName}
        </div>
        <button
          className="ml-2 px-4 py-1 bg-blue-500 text-white rounded"
          onClick={onEdit}
        >
          編集
        </button>
        <button
          className="ml-2 px-4 py-1 bg-red-500 text-white rounded"
          onClick={onDelete}
        >
          行削除
        </button>
      </div>

      {/* テーブル */}
      <table className="w-full mb-2 border-collapse">
        <thead>
          <tr>
            <th className="border p-2">行番号</th>
            <th className="border p-2">構造内容</th>
            <th className="border p-2">現在数量</th>
            <th className="border p-2">改良数量</th>
            <th className="border p-2">単位</th>
            <th className="border p-2">現在金額</th>
            <th className="border p-2">改良金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-center">1</td>
            <td className="border p-2">構造内容</td>
            <td className="border p-2 text-right">1.00</td>
            <td className="border p-2 text-right">0.00</td>
            <td className="border p-2 text-center">1</td>
            <td className="border p-2 text-right">{currentAmount.toLocaleString()}</td>
            <td className="border p-2 text-right">0</td>
          </tr>
        </tbody>
      </table>

      {/* ボタン */}
      <div className="flex justify-end gap-2">
        <button
          className="px-4 py-1 bg-green-500 text-white rounded"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="px-4 py-1 bg-gray-500 text-white rounded"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetInput;
```