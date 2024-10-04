```tsx
// components/LogoComponent.tsx

import React from 'react';

// TypeScriptの型定義
interface LogoComponentProps {
  imageUrl: string;
  altText: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

// ロゴコンポーネント
const LogoComponent: React.FC<LogoComponentProps> = ({
  imageUrl,
  altText,
  title = '株式会社ぎょうせい',
  subtitle = 'システム事業部',
  className = '',
}) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* 画像 */}
      <img src={imageUrl} alt={altText} className="h-16 w-auto" />
      
      {/* タイトルとサブタイトル */}
      <div>
        <h1 className="text-lg font-bold">{title}</h1>
        <h2 className="text-sm">{subtitle}</h2>
      </div>
    </div>
  );
};

export default LogoComponent;
```

```tsx
// 使用例: pages/index.tsx など

import LogoComponent from '../components/LogoComponent';

const HomePage = () => {
  return (
    <div className="p-4">
      <LogoComponent 
        imageUrl="/path/to/logo.png" 
        altText="Company Logo" 
        className="my-custom-class"
      />
    </div>
  );
};

export default HomePage;
```

```css
/* Tailwind CSSでカスタムクラスを追加する場合 */
.my-custom-class {
  /* カスタムスタイルをここに追加可能 */
}
```