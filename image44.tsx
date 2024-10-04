```tsx
// Button.tsx
import React from 'react';

// プロパティの型定義
interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // 追加のカスタムスタイリング用
}

// ボタンコンポーネントの定義
const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-200 border border-black rounded-full px-4 py-2 hover:bg-gray-300 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
```