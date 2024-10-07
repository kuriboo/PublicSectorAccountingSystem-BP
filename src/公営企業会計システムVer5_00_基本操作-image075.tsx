import React from 'react';

// TypeScript type definitions for the component props
interface LogoProps {
  imgSrc: string;
  altText: string;
  width?: number;
  height?: number;
  className?: string;
}

// Next.js + TypeScript functional component with Tailwind CSS
const Logo: React.FC<LogoProps> = ({ imgSrc, altText, width = 150, height = 50, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={imgSrc} alt={altText} width={width} height={height} className="object-contain" />
      <div className="flex flex-col ml-3">
        <span className="text-lg font-bold">株式会社ぎょうせい</span>
        <span className="text-sm">システム事業部</span>
      </div>
    </div>
  );
};

export default Logo;
