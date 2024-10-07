import React from 'react';

// Propsの型定義
type InputFormProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// コンポーネント定義
const InputForm: React.FC<InputFormProps> = ({ value, onChange, onOk, onClear, onCancel }) => {
  return (
    <div className="p-4 bg-white border rounded shadow-md w-80 text-center">
      {/* タイトル */}
      <h2 className="mb-4 text-lg font-bold text-blue-900">集計先番号</h2>
      
      {/* 入力フィールド */}
      <input
        className="px-2 py-1 mb-4 border rounded text-center"
        type="text"
        value={value}
        onChange={onChange}
      />
      
      {/* ボタン群 */}
      <div className="flex justify-around">
        <button
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InputForm;
```