```tsx
import React from 'react';

// Props type definition
type CheckboxItem = {
  label: string;
  checked: boolean;
};

type Props = {
  items: CheckboxItem[];
  onChange: (index: number) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const CustomComponent: React.FC<Props> = ({ items, onChange, onOk, onClear, onCancel }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-lg w-96">
      {/* Title */}
      <h2 className="text-lg font-bold mb-4">印刷対象帳票名</h2>

      {/* Checkbox list */}
      <div className="mb-4">
        {items.map((item, index) => (
          <label key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onChange(index)}
              className="mr-2"
            />
            {item.label}
          </label>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-gray-300 text-black px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CustomComponent;
```