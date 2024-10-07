import React, { useState } from 'react';

// 型定義
interface Item {
  code: string;
  name: string;
  shortName: string;
}

interface ItemTableProps {
  items: Item[];
  onDisplay: (items: Item[]) => void;
  onClear: () => void;
}

const ItemTable: React.FC<ItemTableProps> = ({ items, onDisplay, onClear }) => {
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // 検索ボタンのクリックイベントハンドラ
  const handleDisplay = () => {
    const result = items.filter(item =>
      item.name.includes(searchTerm)
    );
    setFilteredItems(result);
    onDisplay(result);
  };

  // クリアボタンのクリックイベントハンドラ
  const handleClear = () => {
    setSearchTerm('');
    setFilteredItems(items);
    onClear();
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <label className="mr-2">名称</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-1 mr-2"
        />
        <button
          onClick={handleDisplay}
          className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
        >
          表示
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-300 text-black px-2 py-1 rounded"
        >
          クリア
        </button>
      </div>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-blue-100">
            <th className="border px-4 py-2">単価名称コード</th>
            <th className="border px-4 py-2">名称</th>
            <th className="border px-4 py-2">略名</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.code}>
              <td className="border px-4 py-2">{item.code}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.shortName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
```