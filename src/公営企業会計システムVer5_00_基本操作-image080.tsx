import React from 'react';

// LogoProps 型定義
interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

// ロゴコンポーネントの定義
const Logo: React.FC<LogoProps> = ({ src, alt, width = 150, height = 50, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;

// 使用例
// <Logo src="logo.png" alt="企業ロゴ" width={200} height={60} className="my-custom-class" />