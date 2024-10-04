```tsx
// 工事中.tsx
import React from 'react';

// Props 型定義
type KazariProps = {
  text: string; // カスタマイズ可能なテキスト
  className?: string; // Tailwind CSS用のクラス名
};

// コンポーネントの定義
const Kazari: React.FC<KazariProps> = ({ text, className = '' }) => {
  return (
    <div className={`bg-blue-200 text-blue-800 p-4 rounded ${className}`}>
      {text}
    </div>
  );
};

export default Kazari;

// Sample usage
// <Kazari text="仕訳科目" className="my-custom-class" />
```