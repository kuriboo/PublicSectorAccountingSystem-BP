import React from 'react';

// TypeScriptの型定義
type LogoProps = {
  imageUrl: string; // ロゴ画像のURL
  altText: string; // 代替テキスト
  className?: string; // 追加CSSクラス
};

const Logo: React.FC<LogoProps> = ({ imageUrl, altText, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* ロゴ画像 */}
      <img src={imageUrl} alt={altText} className="h-10 w-10" />
      
      {/* テキスト部分 */}
      <div className="ml-2">
        <p className="text-lg font-bold">株式会社ぎょうせい</p>
        <p className="text-sm">システム事業部</p>
      </div>
    </div>
  );
};

export default Logo;