```tsx
import React, { FC, ChangeEvent } from 'react';

// TypeScriptの型定義
interface TextInputProps {
  label: string; // ラベル名
  value: string; // 入力値
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; // 入力変更時のイベントハンドラ
  placeholder?: string; // プレースホルダー（オプション）
}

// 再利用可能なTextInputコンポーネント
const TextInput: FC<TextInputProps> = ({ label, value, onChange, placeholder = '' }) => {
  return (
    <div className="flex items-center">
      {/* ラベル部分 */}
      <label className="mr-2 text-gray-800">{label}</label>
      {/* テキスト入力フォーム */}
      <input
        type="text"
        className="border border-gray-300 rounded px-2 py-1"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
```