```tsx
import React from 'react';

// TypeScriptの型定義
interface LogoProps {
  imageUrl: string;
  altText: string;
  width?: number;
  height?: number;
  className?: string;
}

// ロゴコンポーネント
const Logo: React.FC<LogoProps> = ({
  imageUrl,
  altText,
  width = 100, // デフォルト幅
  height = 50, // デフォルト高さ
  className = '', // カスタムクラス名
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={imageUrl} alt={altText} width={width} height={height} />
    </div>
  );
};

export default Logo;
```