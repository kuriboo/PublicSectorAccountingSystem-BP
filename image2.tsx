```tsx
import React from 'react';

// プロパティの型定義
interface LogoProps {
  imgSrc: string;
  altText: string;
  width?: string;
  height?: string;
  textColor?: string;
}

// ロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ imgSrc, altText, width = '100%', height = 'auto', textColor = 'black' }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* 画像を表示 */}
      <img src={imgSrc} alt={altText} style={{ width, height }} className="object-contain" />
      {/* テキスト部分 */}
      <div className={`text-sm ${textColor} leading-tight`}>
        <p>株式会社ぎょうせい</p>
        <p>データ・システム事業部</p>
      </div>
    </div>
  );
};

export default Logo;

// 使用例
// <Logo imgSrc="/path/to/image.jpg" altText="Logo Image" width="150px" height="auto" textColor="text-gray-800" />
```