import React from 'react';

interface LogoProps {
  // ロゴのURLを指定するプロパティ
  logoUrl: string;
  // ロゴの代替テキストを指定するプロパティ
  altText: string;
  // 追加のクラス名を指定するプロパティ（例: Tailwind CSSクラス）
  className?: string;
}

const GyouseiLogo: React.FC<LogoProps> = ({ logoUrl, altText, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* ロゴ画像 */}
      <img src={logoUrl} alt={altText} className="h-16 w-auto mr-4" />
      {/* テキスト部分 */}
      <div>
        <div className="text-xl font-bold">株式会社ぎょうせい</div>
        <div className="text-sm">システム事業部</div>
      </div>
    </div>
  );
};

export default GyouseiLogo;
```