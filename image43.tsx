```tsx
import React from 'react';

type InputFieldProps = {
  label: string; // ラベルのテキスト
  value: string; // 入力フィールドの初期値
  onChange: (value: string) => void; // 値の変更時に呼び出される関数
};

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      {/* ラベルのテキスト */}
      <label className="text-lg font-medium text-gray-700">{label}</label>
      {/* 入力フィールド */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;
```