```tsx
import React from 'react';

// Propsの型定義
type LogoProps = {
  src: string; // 画像のソース
  alt: string; // 画像の代替テキスト
  width?: number; // 画像の幅（オプション）
  height?: number; // 画像の高さ（オプション）
  className?: string; // 追加のCSSクラス（オプション）
};

// 再利用可能なLogoコンポーネント
const Logo: React.FC<LogoProps> = ({ src, alt, width, height, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain ${className}`} // Tailwind CSS を使用したスタイリング
    />
  );
};

export default Logo;

// このコンポーネントは、以下のように使用できます：
// <Logo src="/path/to/logo.png" alt="Company Logo" width={200} height={50} className="my-custom-class" />
```