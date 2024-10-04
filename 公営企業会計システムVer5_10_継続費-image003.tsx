```tsx
import React from 'react';

// 型定義
type LogoProps = {
  imageSrc: string; // ロゴ画像のソース
  altText?: string; // 代替テキスト
  className?: string; // 追加のスタイル用クラス名
};

// ロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ imageSrc, altText = 'Logo', className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* ロゴ画像 */}
      <img src={imageSrc} alt={altText} className="h-12 w-auto" />
      {/* テキスト - 企業名 */}
      <div className="ml-2 font-bold text-lg">株式会社ぎょうせい</div>
      {/* テキスト - 部署名 */}
      <div className="ml-1 text-sm text-gray-700">システム事業部</div>
    </div>
  );
};

export default Logo;
```