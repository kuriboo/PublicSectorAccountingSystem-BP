```tsx
import React from 'react';

// 定義する型
interface LogoProps {
  altText: string;
  width?: string;
  height?: string;
  className?: string;
}

// 再利用可能なロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ altText, width = '200px', height = '50px', className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/path/to/logo.png" // ロゴ画像のパス
        alt={altText}
        width={width}
        height={height}
        className="object-contain"
      />
      <span className="ml-2 text-black">株式会社ぎょうせい</span>
    </div>
  );
};

export default Logo;
```

```tsx
// 使用例
import Logo from './Logo';

const App: React.FC = () => {
  return (
    <div className="p-4">
      <Logo altText="企業ロゴ" className="custom-class" />
    </div>
  );
};

export default App;
```