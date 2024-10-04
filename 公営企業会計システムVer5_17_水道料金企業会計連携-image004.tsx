```tsx
// components/Logo.tsx

import React from 'react';

// TypeScriptの型定義
type LogoProps = {
  imageSrc: string; // ロゴの画像ソース
  altText?: string; // 画像の代替テキスト
  className?: string; // カスタムクラス名
};

// Tailwind CSSを使用した再利用可能なロゴコンポーネントの作成
const Logo: React.FC<LogoProps> = ({ imageSrc, altText = 'Logo', className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={imageSrc} alt={altText} className="h-10 w-auto" />
      <div className="ml-3 text-center">
        <h1 className="text-xl font-bold">株式会社ぎょうせい</h1>
        <p className="text-sm">システム事業部</p>
      </div>
    </div>
  );
};

export default Logo;
```