```tsx
import React from 'react';

type InputModalProps = {
  title: string;
  itemName: string;
  nextMonthAmount: number;
  followingMonthAmount: number;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const InputModal: React.FC<InputModalProps> = ({
  title,
  itemName,
  nextMonthAmount,
  followingMonthAmount,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-4">
      {/* Title */}
      <h2 className="text-lg font-bold mb-4">{title}</h2>

      {/* Item Name */}
      <div className="mb-2">
        <span className="font-bold">項目名称:</span> {itemName}
      </div>

      {/* Next Month Amount */}
      <div className="mb-2">
        <label className="font-bold mr-2">翌月金額:</label>
        <input 
          type="text" 
          value={nextMonthAmount} 
          readOnly
          className="border rounded px-2 py-1"
        />
      </div>

      {/* Following Month Amount */}
      <div className="mb-4">
        <label className="font-bold mr-2">翌々月金額:</label>
        <input
          type="text"
          value={followingMonthAmount}
          readOnly
          className="border rounded px-2 py-1"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button 
          onClick={onConfirm} 
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-700"
        >
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-700"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InputModal;
```