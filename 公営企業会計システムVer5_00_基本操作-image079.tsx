```tsx
import React from 'react';

// プロパティの型定義
type LogoProps = {
  imageUrl: string;
  altText?: string;
  width?: number;
  height?: number;
};

// ロゴコンポーネント定義
const Logo: React.FC<LogoProps> = ({ imageUrl, altText = 'Logo', width = 100, height = 100 }) => {
  return (
    <div className="flex items-center">
      {/* 画像タグ */}
      <img
        src={imageUrl}
        alt={altText}
        width={width}
        height={height}
        className="object-contain"
      />
      {/* テキスト部分 */}
      <div className="ml-4">
        <p className="font-bold text-xl">株式会社ぎょうせい</p>
        <p className="text-sm text-gray-500">システム事業部</p>
      </div>
    </div>
  );
};

export default Logo;

// 使用例:
// <Logo imageUrl="/path/to/logo.png" altText="会社ロゴ" width={150} height={50} />
```