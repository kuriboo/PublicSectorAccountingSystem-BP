```tsx
import React from 'react';

// コンポーネントプロパティの型定義
interface AppGroupCodeProps {
  startCode: string; // APグループコードの開始値
  endCode: string;   // APグループコードの終了値
  onOk: () => void;  // OKボタン押下時の処理関数
  onClear: () => void; // クリアボタン押下時の処理関数
  onExit: () => void; // 終了ボタン押下時の処理関数
}

// APグループコード入力コンポーネント
const AppGroupCodeComponent: React.FC<AppGroupCodeProps> = ({ startCode, endCode, onOk, onClear, onExit }) => {
  return (
    <div className="p-5">
      <div className="bg-gray-200 p-2 rounded">
        <h1 className="text-lg font-bold">アプリケーション マスタリスト作成</h1>
      </div>

      <div className="border p-4 mt-4">
        <h2 className="font-semibold">範囲指定</h2>
        <div className="flex items-center space-x-2 mt-2">
          <label className="font-medium">APグループコード</label>
          <input
            type="text"
            value={startCode}
            className="border rounded p-1 w-24 text-center"
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            value={endCode}
            className="border rounded p-1 w-24 text-center"
            readOnly
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onOk} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default AppGroupCodeComponent;
```