```tsx
import React from 'react';

type SelectorProps = {
  year: string;
  divisions: string[];
  currentDivision: string;
  items: string[];
  onSelectDivision: (division: string) => void;
  onSelectItem: (item: string) => void;
  onSelectAll: (checked: boolean) => void;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

const Selector: React.FC<SelectorProps> = ({
  year,
  divisions,
  currentDivision,
  items,
  onSelectDivision,
  onSelectItem,
  onSelectAll,
  onConfirm,
  onClear,
  onClose
}) => {
  return (
    <div className="p-6 bg-white rounded shadow-md max-w-md mx-auto">
      {/* Year and Division Selection */}
      <div className="flex items-center mb-4">
        <span className="mr-2">年度</span>
        <span className="mr-4">{year}</span>
        <span className="mr-2">受付区分</span>
        <select
          className="border rounded px-2 py-1"
          value={currentDivision}
          onChange={(e) => onSelectDivision(e.target.value)}
        >
          {divisions.map((division) => (
            <option key={division} value={division}>
              {division}
            </option>
          ))}
        </select>
      </div>

      {/* Item Selection */}
      <div className="mb-4">
        <span className="block mb-2">物件</span>
        <select
          className="w-full border rounded px-2 py-1"
          size={5}
          onChange={(e) => onSelectItem(e.target.value)}
        >
          {items.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className="mt-2">
          <label className="flex items-center">
            <input type="checkbox" onChange={(e) => onSelectAll(e.target.checked)} />
            <span className="ml-2">全選択</span>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default Selector;
```