import React from "react";

// TypeScriptのインターフェースを使ってプロパティの型を定義
interface DurabilitySearchProps {
  category: string;
  subCategory1: string;
  subCategory2: string;
  durability: number;
  searchKeyword: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Next.jsのコンポーネントを定義
const DurabilitySearch: React.FC<DurabilitySearchProps> = ({
  category,
  subCategory1,
  subCategory2,
  durability,
  searchKeyword,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-white p-4 m-4 rounded shadow">
      {/* フォームの入力領域 */}
      <div className="space-y-2">
        <div>
          <label className="block text-sm font-medium">種類</label>
          <input
            type="text"
            value={category}
            className="mt-1 block w-full border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">分類1</label>
          <input
            type="text"
            value={subCategory1}
            className="mt-1 block w-full border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">分類2</label>
          <input
            type="text"
            value={subCategory2}
            className="mt-1 block w-full border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">耐用年数</label>
          <input
            type="number"
            value={durability}
            className="mt-1 block w-full border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">検索文字列</label>
          <input
            type="text"
            value={searchKeyword}
            className="mt-1 block w-full border-gray-300 rounded"
          />
        </div>
      </div>

      {/* ラジオボタン */}
      <div className="mt-4">
        <label className="block text-sm font-medium">分類</label>
        <div className="mt-2 space-x-4">
          <label>
            <input type="radio" name="classification" defaultChecked /> 分類1
          </label>
          <label>
            <input type="radio" name="classification" /> 分類2
          </label>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex space-x-4 mt-4">
        <button onClick={onSubmit} className="btn bg-blue-500 text-white px-4 py-2 rounded">
          表示
        </button>
        <button onClick={onClear} className="btn bg-gray-300 text-black px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="btn bg-red-500 text-white px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DurabilitySearch;
