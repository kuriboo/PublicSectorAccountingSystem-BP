```tsx
import React from 'react';

// プロパティの型定義
interface ButtonProps {
  label: string; // ボタンのラベル
  onClick: () => void; // クリック時のイベントハンドラ
  className?: string; // 追加のスタイリング用クラス名
}

// 再利用可能なボタンコンポーネント
const CustomButton: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      // Tailwind CSSを使用したスタイリング。必要ならclassNameを追加。
      className={`bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
```