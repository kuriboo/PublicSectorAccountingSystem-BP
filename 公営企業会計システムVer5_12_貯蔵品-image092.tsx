```tsx
import React from 'react';

// 型定義
interface DataDeletionProps {
  year: string;
  onYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onConfirm: () => void;
  onClear: () => void;
  onFinish: () => void;
}

// コンポーネント定義
const DataDeletion: React.FC<DataDeletionProps> = ({
  year,
  onYearChange,
  onConfirm,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 border bg-white shadow-md w-[600px] mx-auto">
      <h1 className="text-xl font-bold mb-4">貯蔵品不要データ削除</h1>
      
      {/* 削除範囲指定 */}
      <div className="border p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">削除範囲指定</h2>
        <div className="flex items-center mb-2">
          <label className="mr-2">処理年度</label>
          <select
            value={year}
            onChange={onYearChange}
            className="border p-1"
          >
            <option value="令和02">令和02</option>
            <option value="令和03">令和03</option>
            <option value="令和04">令和04</option>
          </select>
          <span className="ml-2">年度以前を削除</span>
        </div>
      </div>

      {/* 注記 */}
      <p className="mb-4 text-gray-600">
        注）データの削除が必要な場合は、必ずシステム管理者が責任を持って行ってください。
      </p>

      {/* ボタン群 */}
      <div className="flex justify-end space-x-4">
        <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded">クリア</button>
        <button onClick={onFinish} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default DataDeletion;
```