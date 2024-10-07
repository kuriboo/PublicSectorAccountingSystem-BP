import React from 'react';

// 型定義
interface LogoProps {
  title?: string;
  subtitle?: string;
  logoSrc: string;
  altText: string;
}

// コンポーネント定義
const CompanyLogo: React.FC<LogoProps> = ({ title = '株式会社ぎょうせい', subtitle = 'システム事業部', logoSrc, altText }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* ロゴ画像 */}
      <img src={logoSrc} alt={altText} className="h-16 w-16" />
      {/* 会社情報 */}
      <div>
        <h1 className="text-lg font-bold">{title}</h1>
        <h2 className="text-sm text-gray-500">{subtitle}</h2>
      </div>
    </div>
  );
};

export default CompanyLogo;
```