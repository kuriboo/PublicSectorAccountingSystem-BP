import React from 'react';

type EntryProps = {
  year: string; // 年度
  category: string; // 受付区分
  items: string[]; // 物件の一覧
  onChangeYear: (year: string) => void;
  onChangeCategory: (category: string) => void;
  onSelectItems: (selected: string[]) => void;
};

const EntryForm: React.FC<EntryProps> = ({
  year,
  category,
  items,
  onChangeYear,
  onChangeCategory,
  onSelectItems,
}) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleSelectItem = (item: string) => {
    const newSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter(i => i !== item)
      : [...selectedItems, item];
    setSelectedItems(newSelectedItems);
    onSelectItems(newSelectedItems);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-lg font-bold">入札経過記載書</h1>

      <div className="my-4">
        <label className="mr-2">年度:</label>
        <select value={year} onChange={(e) => onChangeYear(e.target.value)} className="border p-1">
          <option value="平成29">平成29</option>
          {/* その他の年度を追加可能 */}
        </select>
      </div>

      <div className="my-4">
        <label className="mr-2">受付区分:</label>
        <select value={category} onChange={(e) => onChangeCategory(e.target.value)} className="border p-1">
          <option value="工事">工事</option>
          {/* その他の受付区分を追加可能 */}
        </select>
      </div>

      <div className="my-4">
        <label className="mr-2">物件:</label>
        <div className="border p-2 max-h-40 overflow-y-auto">
          {items.map(item => (
            <div key={item} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleSelectItem(item)}
                className="mr-2"
              />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded">クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default EntryForm;
```