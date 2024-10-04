```tsx
import React from 'react';

// プロパティの型定義
type LogoProps = {
  imageUrl: string;
  altText: string;
  width?: number;
  height?: number;
  className?: string;
};

// 再利用可能なロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ imageUrl, altText, width = 100, height = 50, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={imageUrl} 
        alt={altText} 
        width={width} 
        height={height} 
        className="object-contain"
      />
    </div>
  );
};

export default Logo;

// 使用例
/*
<Logo 
  imageUrl="/path/to/logo.png" 
  altText="企業ロゴ" 
  width={150} 
  height={75} 
  className="custom-class" 
/>
*/
```