import React from 'react';

// Propsの型定義
interface LogoProps {
  imageUrl: string; // ロゴの画像URL
  altText?: string; // オルトテキスト（省略可能）
  width?: number; // 幅（省略可能）
  height?: number; // 高さ（省略可能）
}

// Logoコンポーネントの定義
const Logo: React.FC<LogoProps> = ({ imageUrl, altText = 'Logo', width = 100, height = 100 }) => {
  return (
    <div className="flex items-center">
      {/* 画像の表示 */}
      <img src={imageUrl} alt={altText} style={{ width, height }} className="mr-4" />

      {/* テキストの表示 */}
      <div className="text-center">
        <p className="text-lg font-bold">株式会社 ぎょうせい</p>
        <p className="text-sm">システム事業部</p>
      </div>
    </div>
  );
};

export default Logo;
```