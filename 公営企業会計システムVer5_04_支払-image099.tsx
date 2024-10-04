```tsx
import React from 'react';

// プロパティの型定義
interface CheckboxListProps {
  items: { label: string; checked: boolean }[];
  onChange: (index: number) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ items, onChange, onOk, onClear, onCancel }) => {
  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold text-blue-800 mb-2">印刷対象帳票名</h3>
      <div className="border p-2 mb-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <input 
              type="checkbox" 
              checked={item.checked} 
              onChange={() => onChange(index)} 
              className="mr-2"
            />
            <label className="text-blue-800">{item.label}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-evenly">
        <button onClick={onOk} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CheckboxList;
```