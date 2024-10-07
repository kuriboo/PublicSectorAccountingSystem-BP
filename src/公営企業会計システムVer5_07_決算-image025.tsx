import React from 'react';

type FiscalYearSelectorProps = {
  year: number;
  onYearChange: (year: number) => void;
  operation: '登録' | '訂正' | '削除';
  onOperationChange: (operation: '登録' | '訂正' | '削除') => void;
  onSubmit: () => void;
  items: { code: string; name: string }[];
  onItemChange: (index: number, code: string, name: string) => void;
};

// Tailwind CSS styles added
const FiscalYearSelector: React.FC<FiscalYearSelectorProps> = ({
  year,
  onYearChange,
  operation,
  onOperationChange,
  onSubmit,
  items,
  onItemChange
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold mb-4">収益費用明細書項目名称修正</h2>

      <div className="mb-4">
        <label className="mr-2">年度:</label>
        <select
          className="border p-2"
          value={year}
          onChange={(e) => onYearChange(Number(e.target.value))}
        >
          {/* Sample Years */}
          <option value={29}>平成29</option>
          <option value={30}>平成30</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-2">操作:</label>
        <label className="mr-2">
          <input
            type="radio"
            value="登録"
            checked={operation === '登録'}
            onChange={() => onOperationChange('登録')}
          />
          登録
        </label>
        <label className="mr-2">
          <input
            type="radio"
            value="訂正"
            checked={operation === '訂正'}
            onChange={() => onOperationChange('訂正')}
          />
          訂正
        </label>
        <label className="mr-2">
          <input
            type="radio"
            value="削除"
            checked={operation === '削除'}
            onChange={() => onOperationChange('削除')}
          />
          削除
        </label>
      </div>

      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <input
            type="text"
            value={item.code}
            className="border p-2 mr-2"
            onChange={(e) => onItemChange(index, e.target.value, item.name)}
            placeholder="仕訳コード"
          />
          <input
            type="text"
            value={item.name}
            className="border p-2"
            onChange={(e) => onItemChange(index, item.code, e.target.value)}
            placeholder="名称"
          />
        </div>
      ))}

      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white p-2 rounded"
      >
        表示
      </button>
    </div>
  );
};

export default FiscalYearSelector;
```