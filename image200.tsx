```tsx
import React from 'react';

// TypeScriptの型定義
type LogoProps = {
  logoSrc: string; // ロゴ画像のソース
  altText: string; // 画像のalt属性
  companyName: string; // 会社名
  departmentName: string; // 部署名
  className?: string; // 追加のクラス名（任意）
};

// ロゴコンポーネント
const Logo: React.FC<LogoProps> = ({
  logoSrc,
  altText,
  companyName,
  departmentName,
  className = '', // デフォルトのクラス名
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* ロゴ画像 */}
      <img src={logoSrc} alt={altText} className="w-12 h-12 mr-4" />

      {/* 会社名と部署名 */}
      <div>
        <div className="text-lg font-bold">{companyName}</div>
        <div className="text-sm text-gray-600">{departmentName}</div>
      </div>
    </div>
  );
};

export default Logo;

// 使用例
// <Logo 
//   logoSrc="/path/to/logo.png"
//   altText="Company Logo" 
//   companyName="株式会社ぎょうせい"
//   departmentName="システム事業部"
// />
```