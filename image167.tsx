```tsx
import React from 'react';

// 型定義
interface TitleMasterListProps {
  startCode?: string;
  endCode?: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const TitleMasterList: React.FC<TitleMasterListProps> = ({
  startCode = 'MAD00000',
  endCode = 'SUB99999',
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-50 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold bg-purple-200 text-cyan-800 p-2 rounded-lg">
        画面タイトルマスタリスト作成
      </h1>
      <div className="flex justify-between items-center text-sm text-right py-2">
        <div>行政市水道事業会計</div>
        <div>
          総務課 予算・会計担当 ぎょうせい太郎
          <br />
          平成29年08月05日
        </div>
      </div>

      <div className="border-t border-b mt-4 py-4">
        <div className="flex items-center gap-4">
          <label className="font-bold text-blue-900">範囲指定</label>
          <div>
            <label className="block">画面タイトルコード</label>
            <div className="flex items-center">
              <input
                type="text"
                defaultValue={startCode}
                className="border border-gray-300 rounded p-1 focus:outline-none focus:ring focus:border-blue-300"
              />
              <span className="mx-2">~</span>
              <input
                type="text"
                defaultValue={endCode}
                className="border border-gray-300 rounded p-1 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <button
          onClick={onSubmit}
          className="py-1 px-4 bg-gray-300 rounded hover:bg-gray-400"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="py-1 px-4 bg-gray-300 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="py-1 px-4 bg-gray-300 rounded hover:bg-gray-400"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default TitleMasterList;
```