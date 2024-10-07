import React from 'react';

// 型定義
interface LogoProps {
  imageUrl: string;
  altText: string;
  width?: string;
  height?: string;
  className?: string;
}

// Logoコンポーネント
const Logo: React.FC<LogoProps> = ({ imageUrl, altText, width = 'auto', height = 'auto', className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 画像を表示 */}
      <img
        src={imageUrl}
        alt={altText}
        style={{ width, height }}
        className="object-contain"
      />
      {/* テキストを表示 */}
      <p className="ml-2 text-lg font-bold">
        株式会社ぎょうせい
      </p>
    </div>
  );
};

export default Logo;
```