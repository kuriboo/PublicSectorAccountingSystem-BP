import React from 'react';

// プロパティの型定義
interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

// Logoコンポーネント定義
const Logo: React.FC<LogoProps> = ({ src, alt, width = 100, height = 50, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain ${className}`} // Tailwind CSSを使用してスタイリング
    />
  );
};

export default Logo;
```