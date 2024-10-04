```tsx
import React from 'react';

// TypeScriptの型定義
interface LogoProps {
  imageUrl: string; // 画像のURL
  altText: string;  // 画像の代替テキスト
  companyName: string; // 会社名
  departmentName: string; // 部署名
}

// Logoコンポーネントの定義
const Logo: React.FC<LogoProps> = ({ imageUrl, altText, companyName, departmentName }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* 会社ロゴ画像 */}
      <img src={imageUrl} alt={altText} className="w-12 h-12" />
      <div>
        {/* 会社名・部署名 */}
        <div className="text-xl font-bold">{companyName}</div>
        <div className="text-md text-gray-600">{departmentName}</div>
      </div>
    </div>
  );
};

export default Logo;
```