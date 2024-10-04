```tsx
import React from 'react';

// Propsの型定義
interface DialogProps {
  title: string;
  options: string[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, options, onConfirm, onClear, onCancel }) => {
  return (
    <div className="p-4 border rounded-md shadow-md w-80 bg-white">
      {/* タイトル */}
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      
      {/* チェックボックスのリスト */}
      <div className="border p-2 mb-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-1">
            <input type="checkbox" id={`option-${index}`} className="mr-2" />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button 
          onClick={onConfirm} 
          className="px-4 py-1 rounded bg-blue-500 text-white"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="px-4 py-1 rounded bg-gray-300 text-black"
        >
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="px-4 py-1 rounded bg-gray-300 text-black"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Dialog;
```