```tsx
import React from 'react';

// TypeScriptの型定義
interface InputBoxProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputBox: React.FC<InputBoxProps> = ({ label, placeholder, onChange, value }) => {
  return (
    <div className="flex items-center space-x-2">
      {/* ラベル部分 */}
      <span className="bg-gray-300 px-4 py-2 rounded-md">{label}</span>
      {/* 入力フィールド */}
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="border-2 border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputBox;
```