```tsx
import React from 'react';

// Propsの型定義
interface LogoProps {
  imageSrc: string;
  altText: string;
  className?: string;
}

// ロゴコンポーネントの定義
const Logo: React.FC<LogoProps> = ({ imageSrc, altText, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 画像部分 */}
      <img src={imageSrc} alt={altText} className="h-16 w-auto" />
      {/* テキスト部分 */}
      <div className="flex flex-col ml-4">
        <span className="text-xl font-bold">株式会社ぎょうせい</span>
        <span className="text-sm">システム事業部</span>
      </div>
    </div>
  );
};

export default Logo;
```