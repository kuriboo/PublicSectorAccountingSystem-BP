import React from 'react';

// TypeScriptの型定義
interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  width = 164,
  height = 46,
  className = '',
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 画像の表示 */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
```