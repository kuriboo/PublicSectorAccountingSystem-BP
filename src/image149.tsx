import React from 'react';

// TypeScriptの型定義
type Item = {
  code: string;
  content1: string;
  content2?: string;
};

type ItemTableProps = {
  items: Item[];
  onSearch: (query: string) => void;
};

const ItemTable: React.FC<ItemTableProps> = ({ items, onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="max-w-lg mx-auto">
      {/* 検索入力 */}
      <div className="flex my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="摘要検索文字"
          className="flex-grow p-2 border rounded-l-md"
        />
        <button
          onClick={() => onSearch(searchQuery)}
          className="bg-gray-300 px-4 py-2 rounded-r-md"
        >
          表示
        </button>
      </div>

      {/* テーブル表示 */}
      <table className="min-w-full border-collapse border">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border px-4 py-2">摘要コード</th>
            <th className="border px-4 py-2">内容（1）</th>
            <th className="border px-4 py-2">内容（2）</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.code} className="odd:bg-white even:bg-gray-100">
              <td className="border px-4 py-2">{item.code}</td>
              <td className="border px-4 py-2">{item.content1}</td>
              <td className="border px-4 py-2">{item.content2 || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ボタン */}
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default ItemTable;
