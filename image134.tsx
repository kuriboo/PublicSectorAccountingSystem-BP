```tsx
import React from 'react';

// 定義するプロパティの型
export type AssetInfoProps = {
  assetNumber: string;
  assetName: string;
  actions: {
    edit: () => void;
    delete: () => void;
    details: () => void;
  };
  entries: {
    date: string;
    summary: string;
    area: number;
    price: number;
  }[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// コンポーネントの定義
const AssetInfo: React.FC<AssetInfoProps> = ({
  assetNumber,
  assetName,
  actions,
  entries,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4">
      {/* 資産番号および資産名称の表示 */}
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-lg">資産番号 {assetNumber}</h2>
          <h3 className="text-md">{assetName}</h3>
        </div>
        <div className="space-x-2">
          <button 
            className="bg-blue-500 text-white px-2 py-1 rounded"
            onClick={actions.edit}>
            編集
          </button>
          <button 
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={actions.delete}>
            行削除
          </button>
          <button 
            className="bg-gray-500 text-white px-2 py-1 rounded"
            onClick={actions.details}>
            明細編集
          </button>
        </div>
      </div>

      {/* エントリのテーブル */}
      <table className="w-full mb-4 border-collapse border">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="border px-2 py-1">異動年月日</th>
            <th className="border px-2 py-1">統括摘要</th>
            <th className="border px-2 py-1">総面積</th>
            <th className="border px-2 py-1">総価額</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="text-center">
              <td className="border px-2 py-1">{entry.date}</td>
              <td className="border px-2 py-1">{entry.summary}</td>
              <td className="border px-2 py-1">{entry.area}</td>
              <td className="border px-2 py-1">{entry.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button 
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={onConfirm}>
          行確定
        </button>
        <button 
          className="bg-yellow-500 text-white px-3 py-1 rounded"
          onClick={onClear}>
          クリア
        </button>
        <button 
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={onCancel}>
          キャンセル
        </button>
      </div>
    </div>
  );
}

export default AssetInfo;
```