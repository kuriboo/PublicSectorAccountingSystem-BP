import React from 'react';

// Propsの型定義
type LogoProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

// 再利用可能なLogoコンポーネント
const Logo: React.FC<LogoProps> = ({ src, alt, width = 200, height = 60, className }) => {
  return (
    <div className={className}>
      {/* 画像要素 */}
      <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="object-contain" 
      />
    </div>
  );
};

// 使用例
// <Logo src="/path/to/logo.png" alt="会社のロゴ" className="mx-auto my-4" />

export default Logo;
```