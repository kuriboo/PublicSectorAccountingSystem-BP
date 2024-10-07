import React from 'react';

// TypeScriptの型定義
interface AlertDialogProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

// Tailwind CSSでスタイリング
const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'はい',
  cancelText = 'いいえ',
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg max-w-sm p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end space-x-2">
          {/* キャンセルボタン */}
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            {cancelText}
          </button>
          {/* 確認ボタン */}
          <button
            onClick={onConfirm}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
```