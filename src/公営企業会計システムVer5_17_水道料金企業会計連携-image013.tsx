import React from 'react';

// Propsの型定義
type LogoProps = {
  altText: string;
  imgSrc: string;
  width?: number;
  height?: number;
};

// ロゴコンポーネントの定義
const Logo: React.FC<LogoProps> = ({ altText, imgSrc, width = 200, height = 50 }) => {
  return (
    <div className="flex justify-center items-center">
      {/* 画像の表示 */}
      <img
        src={imgSrc}
        alt={altText}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;