import React from 'react';

// Propsの型定義
type LogoProps = {
  imageUrl: string; // 画像URL
  altText?: string; // 画像の代替テキスト
  width?: number;  // 画像の幅
  height?: number; // 画像の高さ
};

// ロゴコンポーネントの定義
const Logo: React.FC<LogoProps> = ({ 
  imageUrl, 
  altText = 'Company Logo', 
  width = 150, 
  height = 50 
}) => {
  return (
    <div className="flex items-center space-x-4">
      {/* 画像表示 */}
      <img 
        src={imageUrl} 
        alt={altText} 
        width={width}
        height={height}
        className="object-contain"
      />
      {/* テキスト表示 */}
      <div className="text-2xl font-bold">
        株式会社ぎょうせい
      </div>
    </div>
  );
};

export default Logo;
