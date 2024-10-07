import React from 'react';

// Props type definition
interface CheckboxListProps {
  items: { label: string; checked: boolean }[];
  onChange: (index: number, checked: boolean) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// CheckboxList component definition
const CheckboxList: React.FC<CheckboxListProps> = ({ items, onChange, onOk, onClear, onCancel }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="mb-4 font-bold text-lg">印刷対象帳票名</div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={(e) => onChange(index, e.target.checked)}
              className="h-4 w-4"
            />
            <label className="text-sm">{item.label}</label>
          </li>
        ))}
      </ul>
      <div className="flex space-x-2 mt-4">
        <button onClick={onOk} className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600">
          クリア
        </button>
        <button onClick={onCancel} className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CheckboxList;
```

Make sure to integrate Tailwind CSS in your project for the styling to work as expected.