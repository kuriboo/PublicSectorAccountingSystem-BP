```tsx
import React from 'react';

// 型定義
type LogoProps = {
  imageUrl: string; // ロゴの画像URL
  altText: string;  // 代替テキスト
  companyName: string; // 会社名
  departmentName: string; // 部門名
};

// ロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ imageUrl, altText, companyName, departmentName }) => {
  return (
    <div className="flex items-center space-x-4 p-4">
      {/* ロゴ画像 */}
      <img src={imageUrl} alt={altText} className="w-16 h-auto" />
      <div>
        {/* 会社名 */}
        <h1 className="text-xl font-bold">{companyName}</h1>
        {/* 部門名 */}
        <p className="text-sm text-gray-600">{departmentName}</p>
      </div>
    </div>
  );
};

export default Logo;
```