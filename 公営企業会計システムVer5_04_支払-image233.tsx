```tsx
import React from 'react';

// 型定義
interface LogoProps {
  text?: string; // 表示するテキスト
  imageSrc: string; // 画像のソースパス
  altText: string; // 画像の代替テキスト
  className?: string; // 追加のCSSクラス
}

// 再利用可能なLogoコンポーネント
const Logo: React.FC<LogoProps> = ({ text = "株式会社ぎょうせい", imageSrc, altText, className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* 会社ロゴ */}
      <img src={imageSrc} alt={altText} className="h-8 w-auto" />
      {/* テキスト */}
      <span className="font-bold text-lg">{text}</span>
    </div>
  );
};

export default Logo;
```

```tsx
// 使用例
<Logo
  imageSrc="/path/to/logo.png"
  altText="Company Logo"
  text="カスタムテキスト"
  className="custom-class"
/>
```