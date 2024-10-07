import React from 'react';

// TypeScriptの型定義
interface LogoProps {
  logoSrc: string; // ロゴ画像のURLを指定
  altText: string; // 代替テキスト
  className?: string; // 追加のクラス名
}

// ロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ logoSrc, altText, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* ロゴ画像 */}
      <img src={logoSrc} alt={altText} className="h-10 w-auto" />
      {/* テキスト部分 */}
      <div className="ml-2">
        <p className="text-lg font-bold">株式会社ぎょうせい</p>
        <p className="text-sm">システム事業部</p>
      </div>
    </div>
  );
};

export default Logo;
