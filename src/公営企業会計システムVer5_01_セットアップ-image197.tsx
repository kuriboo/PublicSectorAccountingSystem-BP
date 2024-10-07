import React from 'react';

// Propsの型定義
type LogoProps = {
  src: string; // ロゴ画像のURL
  alt: string; // 画像の代替テキスト
  width?: number; // 幅のカスタマイズ
  height?: number; // 高さのカスタマイズ
  className?: string; // Tailwind CSSのカスタムクラス
};

// Logoコンポーネントの定義
const Logo: React.FC<LogoProps> = ({ src, alt, width = 100, height = 100, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mr-4"
      />
      <div>
        <h1 className="text-lg font-bold">株式会社ぎょうせい</h1>
        <h2 className="text-sm">システム事業部</h2>
      </div>
    </div>
  );
};

export default Logo;

// Usage Example
// <Logo src="/path/to/logo.png" alt="Company Logo"/>
```