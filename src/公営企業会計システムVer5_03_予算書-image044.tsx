import React from 'react';

// Propsの型定義
interface LogoProps {
  imageSrc: string;
  altText: string;
  width?: number;
  height?: number;
}

// 再利用可能なロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ imageSrc, altText, width = 200, height = 60 }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <img 
        src={imageSrc} 
        alt={altText} 
        width={width} 
        height={height} 
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
