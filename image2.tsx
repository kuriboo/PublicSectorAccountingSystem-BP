```tsx
import React from 'react';

// TypeScript interface for component props
interface LogoProps {
  width?: string;
  height?: string;
  altText?: string;
}

const Logo: React.FC<LogoProps> = ({ width = '200px', height = '50px', altText = '企業ロゴ' }) => {
  return (
    <div className={`flex items-center justify-center`}>
      <img
        src="/path/to/logo/image.jpg" // 画像パスを変更してください
        alt={altText}
        width={width}
        height={height}
        className={`object-contain`} // Tailwind CSSでスタイリング
      />
    </div>
  );
};

export default Logo;
```