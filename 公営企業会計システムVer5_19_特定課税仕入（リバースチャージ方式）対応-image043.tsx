```tsx
import React from 'react';

// TypeScriptの型定義
type ThreeColumnLayoutProps = {
  leftContent: React.ReactNode;
  centerContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string; // 追加のクラスを指定できるように
};

const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> = ({
  leftContent,
  centerContent,
  rightContent,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      {/* 左カラム */}
      <div className="bg-green-200 p-4">
        {leftContent}
      </div>

      {/* 中央カラム */}
      <div className="bg-green-300 p-4">
        {centerContent}
      </div>

      {/* 右カラム */}
      <div className="bg-green-400 p-4">
        {rightContent}
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
```