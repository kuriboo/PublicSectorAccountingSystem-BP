```tsx
import React from 'react';

// プロパティの型定義
interface GridLayoutProps {
  leftContent: React.ReactNode;
  centerContent: React.ReactNode;
  rightContent: React.ReactNode;
}

// GridLayoutコンポーネントの定義
const GridLayout: React.FC<GridLayoutProps> = ({ leftContent, centerContent, rightContent }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {/* 左コンテンツ */}
      <div className="bg-green-100 p-4">
        {leftContent}
      </div>
      {/* 中央コンテンツ */}
      <div className="bg-green-200 p-4">
        {centerContent}
      </div>
      {/* 右コンテンツ */}
      <div className="bg-green-300 p-4">
        {rightContent}
      </div>
    </div>
  );
};

export default GridLayout;
```