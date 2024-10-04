```tsx
import React from 'react';

// 型定義
interface FormProps {
  label: string;
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onCancelClick: () => void;
}

// コンポーネント定義
const CustomForm: React.FC<FormProps> = ({
  label,
  inputValue,
  onInputChange,
  onOkClick,
  onClearClick,
  onCancelClick
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* Label and input field */}
      <div className="mb-4 flex items-center">
        <label className="mr-2 text-gray-700 font-semibold">{label}</label>
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          className="border-2 p-1 rounded text-gray-800"
        />
      </div>
      
      {/* Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={onOkClick}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 active:bg-gray-400"
        >
          OK
        </button>
        <button
          onClick={onClearClick}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 active:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onCancelClick}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 active:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CustomForm;
```