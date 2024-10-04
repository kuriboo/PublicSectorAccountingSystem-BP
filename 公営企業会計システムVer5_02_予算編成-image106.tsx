```tsx
import React from 'react';

// TypeScriptの型定義
type LogoProps = {
  imageUrl: string; // 画像のURL
  altText: string;  // 画像の代替テキスト
  width?: number;   // オプションの画像の幅
  height?: number;  // オプションの画像の高さ
  className?: string; // オプションの追加クラス
};

// Logoコンポーネントの定義
const Logo: React.FC<LogoProps> = ({ imageUrl, altText, width = 150, height = 50, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={imageUrl} 
        alt={altText} 
        width={width} 
        height={height} 
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
```

```tsx
// 使用例
import Logo from './components/Logo';

const Example = () => {
  return (
    <div className="p-4">
      <Logo 
        imageUrl="/static/logo.png" 
        altText="会社のロゴ" 
        width={100} 
        height={50} 
        className="custom-class"
      />
    </div>
  );
};

export default Example;
```