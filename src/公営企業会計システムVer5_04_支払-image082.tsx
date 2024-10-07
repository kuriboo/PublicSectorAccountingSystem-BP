import React from 'react';

// 型定義
interface DialogProps {
  title: string;
  checkboxLabel: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, checkboxLabel, onConfirm, onClear, onCancel }) => {
  return (
    <div className="max-w-sm mx-auto my-4 p-4 border rounded shadow-lg bg-white">
      {/* タイトル */}
      <h1 className="text-lg font-bold mb-2">{title}</h1>

      {/* コンテンツ領域 */}
      <div className="border p-4 mb-4">
        <label className="flex items-center text-blue-600">
          <input type="checkbox" className="mr-2" />
          {checkboxLabel}
        </label>
      </div>

      {/* ボタン群 */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
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

export default Dialog;