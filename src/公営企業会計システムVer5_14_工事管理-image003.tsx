申し訳ありませんが、画像を確認できません。代わりに、Next.js + TypeScriptのコンポーネント例を提供することはできます。以下は、汎用的なカスタマイズ可能なコンポーネントの例です。

```tsx
import React from 'react';

// プロパティの型定義
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${className} ${disabled ? 'bg-gray-400' : 'hover:bg-blue-600'}`}
    >
      {label}
    </button>
  );
};

export default Button;
```

このコンポーネントは、ボタンのラベル、クリック時の動作、無効化状態、および追加のクラス名をプロパティとして受け取ることができます。Tailwind CSSを使用して基本的なスタイリングを行っています。