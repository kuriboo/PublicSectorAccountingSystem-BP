import React from 'react';

// Propsタイプの定義
interface LogoProps {
  imgSrc: string;
  altText?: string;
  width?: string;
  height?: string;
}

// ロゴコンポーネントの定義
const Logo: React.FC<LogoProps> = ({
  imgSrc,
  altText = 'Logo',
  width = '150px',
  height = 'auto',
}) => {
  return (
    <div className="flex items-center">
      <img
        src={imgSrc}
        alt={altText}
        width={width}
        height={height}
        className="mr-4"
      />
      <div className="text-center">
        <h1 className="text-lg font-bold">株式会社ぎょうせい</h1>
        <p className="text-sm">システム事業部</p>
      </div>
    </div>
  );
};

export default Logo;
