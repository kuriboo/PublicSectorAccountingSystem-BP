// HorizontalDivider.tsx

import React from 'react';

// プロパティの型定義
type HorizontalDividerProps = {
  color?: string;
  borderWidth?: string;
  className?: string;
};

const HorizontalDivider: React.FC<HorizontalDividerProps> = ({
  color = 'bg-blue-300',
  borderWidth = 'h-1',
  className = '',
}) => {
  return (
    <div 
      className={`${color} ${borderWidth} w-full ${className}`}
      // スタイルを必要に応じて上書きするためのクラス名を追加可能
    />
  );
};

export default HorizontalDivider;
```