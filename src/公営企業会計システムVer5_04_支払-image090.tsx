import React from 'react';

// 型定義
interface DialogProps {
  title: string;
  options: string[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, options, onConfirm, onClear, onCancel }) => {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-md shadow-md">
      {/* タイトル */}
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      
      {/* オプションリスト */}
      <div className="border p-2 mb-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input type="checkbox" id={`option-${index}`} className="mr-2" />
            <label htmlFor={`option-${index}`} className="text-sm">
              {option}
            </label>
          </div>
        ))}
      </div>
      
      {/* ボタン */}
      <div className="flex justify-between">
        <button 
          className="bg-gray-300 text-gray-700 py-1 px-3 rounded hover:bg-gray-400"
          onClick={onConfirm}
        >
          OK
        </button>
        <button 
          className="bg-gray-300 text-gray-700 py-1 px-3 rounded hover:bg-gray-400"
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="bg-gray-300 text-gray-700 py-1 px-3 rounded hover:bg-gray-400"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Dialog;
