```tsx
import React from 'react';

type ModalProps = {
  title: string;
  itemLabel: string;
  isChecked: boolean;
  onCheckChange: (checked: boolean) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ 
  title, 
  itemLabel, 
  isChecked, 
  onCheckChange, 
  onOk, 
  onClear, 
  onCancel 
}) => {
  return (
    <div className="w-96 p-4 border rounded shadow-lg">
      {/* Title */}
      <div className="font-semibold text-center mb-2">{title}</div>

      {/* Checkbox Section */}
      <div className="bg-gray-200 p-4 rounded mb-4">
        <div className="text-blue-700 mb-2">印刷対象帳票名</div>
        <label className="flex items-center">
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={(e) => onCheckChange(e.target.checked)} 
            className="mr-2"
          />
          {itemLabel}
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-around">
        <button 
          onClick={onOk} 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Modal;
```