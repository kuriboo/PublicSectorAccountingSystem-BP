import React from 'react';

// コンポーネント用のプロパティの型定義
interface ModalProps {
  title: string;
  label: string;
  inputValue: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, label, inputValue, onOk, onClear, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-md p-4 shadow-lg">
        {/* モーダルタイトル */}
        <h2 className="text-lg font-semibold mb-4">{title}</h2>

        {/* ラベルとインプットフィールド */}
        <div className="flex items-center mb-4">
          <button className="bg-blue-200 text-sm rounded-md py-1 px-2 mr-2">{label}</button>
          <input
            type="text"
            value={inputValue}
            readOnly
            className="border border-gray-300 rounded-md p-1 flex-grow"
          />
        </div>

        {/* ボタン群 */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onOk}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-md py-1 px-3"
          >
            OK
          </button>
          <button
            onClick={onClear}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-md py-1 px-3"
          >
            クリア
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-md py-1 px-3"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;