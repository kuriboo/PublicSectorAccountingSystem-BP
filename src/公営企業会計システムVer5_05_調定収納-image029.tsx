import React from 'react';

// プロパティの型定義
interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

// ロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ src, alt, width = 100, height = 50, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;

// 使用例:
// <Logo src="/path/to/logo.png" alt="会社ロゴ" width={200} height={80} className="mx-auto" />
```