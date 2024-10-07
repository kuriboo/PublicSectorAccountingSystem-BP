import React from 'react';

// Props type definition
interface CheckboxListProps {
  items: { label: string; checked: boolean }[];
  onItemChange: (index: number, checked: boolean) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// CheckboxList component
const CheckboxList: React.FC<CheckboxListProps> = ({
  items,
  onItemChange,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-sm">
      <h2 className="text-lg font-semibold mb-4">印刷対象帳票名</h2>
      <div className="border p-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={(e) => onItemChange(index, e.target.checked)}
              className="mr-2 cursor-pointer"
            />
            <label className="cursor-pointer">{item.label}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={onOk} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CheckboxList;
