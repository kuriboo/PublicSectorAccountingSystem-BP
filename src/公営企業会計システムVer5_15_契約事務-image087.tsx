import React from 'react';

// Props type definition
type CaseInfoProps = {
  year: number;
  division: string;
  selectedItems: string[];
  onSelectionChange: (items: string[]) => void;
};

// Component definition
const CaseInfo: React.FC<CaseInfoProps> = ({
  year,
  division,
  selectedItems,
  onSelectionChange,
}) => {
  const items = [
    '42910003：',
    '42910004：',
    '42910005：大規模広域開発(JV案件)',
    '42910006：月分手当等',
    '42910007：工事の受付登録',
    '42910008：工事の受付登録JV',
  ];

  const handleItemChange = (item: string) => {
    if (selectedItems.includes(item)) {
      onSelectionChange(selectedItems.filter((i) => i !== item));
    } else {
      onSelectionChange([...selectedItems, item]);
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onSelectionChange(items);
    } else {
      onSelectionChange([]);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">案件情報抽出処理</h1>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          年度:
          <span className="ml-2">{year}</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          受付区分:
          <span className="ml-2">{division}</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">抽出区分:</label>
        <div className="flex items-center">
          <input type="radio" name="extract" id="new" checked readOnly />
          <label htmlFor="new" className="ml-2 mr-4">新規</label>
          <input type="radio" name="extract" id="re-extract" />
          <label htmlFor="re-extract" className="ml-2">再抽出</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">物件:</label>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="select-all"
            checked={selectedItems.length === items.length}
            onChange={handleSelectAll}
          />
          <label htmlFor="select-all" className="ml-2">全選択</label>
        </div>
        <div className="border rounded-md p-2 max-h-40 overflow-y-auto">
          {items.map((item) => (
            <div key={item} className="flex items-center mb-1">
              <input
                type="checkbox"
                id={item}
                checked={selectedItems.includes(item)}
                onChange={() => handleItemChange(item)}
              />
              <label htmlFor={item} className="ml-2">{item}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button className="bg-blue-500 text-white py-1 px-4 rounded">OK</button>
        <button className="bg-gray-500 text-white py-1 px-4 rounded">クリア</button>
        <button className="bg-red-500 text-white py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default CaseInfo;
```