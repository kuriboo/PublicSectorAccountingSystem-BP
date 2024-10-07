import React from 'react';

type CheckboxItem = {
  label: string;
  checked: boolean;
};

interface PrintDialogProps {
  items: CheckboxItem[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
  onToggleItem: (index: number) => void;
}

const PrintDialog: React.FC<PrintDialogProps> = ({
  items,
  onConfirm,
  onClear,
  onCancel,
  onToggleItem,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow-md">
      <h3 className="font-bold text-blue-800 mb-2">印刷対象帳票名</h3>
      <div className="border p-2 mb-4">
        {items.map((item, index) => (
          <label key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onToggleItem(index)}
              className="mr-2"
            />
            {item.label}
          </label>
        ))}
      </div>
      <div className="flex justify-around">
        <button onClick={onConfirm} className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintDialog;
