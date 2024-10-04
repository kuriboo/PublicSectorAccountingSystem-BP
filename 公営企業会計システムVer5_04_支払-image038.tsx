```tsx
import React from 'react';

// TypeScriptの型定義
interface CheckboxItem {
  label: string;
  checked: boolean;
}

interface DialogProps {
  title: string;
  items: CheckboxItem[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Next.js + TypeScriptコンポーネント
const Dialog: React.FC<DialogProps> = ({ title, items, onOk, onClear, onCancel }) => {
  return (
    <div className="w-80 bg-white border border-gray-300 rounded p-4">
      <h1 className="text-lg font-bold mb-4">{title}</h1>
      <div className="border p-2 mb-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => {}}
              className="mr-2"
            />
            <label>{item.label}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-around">
        <button onClick={onOk} className="bg-gray-200 px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-200 px-4 py-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-gray-200 px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default Dialog;
```