```tsx
import React from 'react';

// 型定義
interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

// Logoコンポーネント
const Logo: React.FC<LogoProps> = ({ src, alt, width = 200, height = 50, className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`inline-block ${className}`} // Tailwind CSSを使用してスタイリングのカスタマイズが可能
    />
  );
};

export default Logo;
```