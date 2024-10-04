申し訳ありませんが、画像を確認できないため、具体的な画像に基づいたコードを提供することはできません。しかし、一般的なNext.js + TypeScriptのコンポーネントのサンプルコードを提供することができます。以下は、Tailwind CSSを使用した再利用可能なコンポーネントのサンプルです。

```tsx
// components/CustomButton.tsx

import React from 'react';

// コンポーネントのプロパティの型定義
interface CustomButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  color = 'bg-blue-500',
  disabled = false
}) => {
  return (
    <button
      className={`px-4 py-2 text-white ${color} rounded-md hover:bg-blue-600 disabled:opacity-50`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default CustomButton;
```

このサンプルでは、`CustomButton`というボタンコンポーネントを定義しています。色、クリックイベント、無効状態をプロパティでカスタマイズすることができます。このコンポーネントはTailwind CSSを使ってスタイリングされています。