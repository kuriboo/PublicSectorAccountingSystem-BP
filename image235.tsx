```tsx
import React from 'react';

// コンポーネントのプロパティの型定義
type DividerProps = {
  color?: string; // カラーをカスタマイズ可能
  width?: string; // 幅をカスタマイズ可能
  thickness?: string; // 高さをカスタマイズ可能
};

// Divider コンポーネント
const Divider: React.FC<DividerProps> = ({
  color = 'bg-blue-200', // デフォルトカラー
  width = 'w-full', // デフォルト幅
  thickness = 'h-0.5', // デフォルトの高さ
}) => {
  return (
    <div className={`${width} ${thickness} ${color}`}></div>
  );
};

export default Divider;
```