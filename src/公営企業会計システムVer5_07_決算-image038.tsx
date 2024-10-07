import React from 'react';

type LogoProps = {
  altText: string;
  className?: string;
  imageUrl: string;
};

const Logo: React.FC<LogoProps> = ({ altText, className = '', imageUrl }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* ロゴ画像 */}
      <img src={imageUrl} alt={altText} className="h-10 w-10" />
      {/* 会社情報 */}
      <div className="text-lg font-bold">
        <div>株式会社ぎょうせい</div>
        <div className="text-sm">システム事業部</div>
      </div>
    </div>
  );
}

export default Logo;
