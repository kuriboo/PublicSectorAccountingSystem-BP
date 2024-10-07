import React from 'react';

// LogoProps型定義
type LogoProps = {
  src: string; // 画像ソースのURL
  alt: string; // 画像のaltテキスト
  width?: number; // 画像の幅（オプション）
  height?: number; // 画像の高さ（オプション）
  className?: string; // カスタムクラス名（オプション）
};

const Logo: React.FC<LogoProps> = ({ src, alt, width = 200, height = 50, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`inline-block ${className}`}
    />
  );
};

export default Logo;

```tsx
// 使用例
import Logo from './Logo';

const App: React.FC = () => {
  return (
    <div className="p-4">
      <Logo
        src="/path/to/logo.png"
        alt="Company Logo"
        width={250}
        height={60}
        className="rounded-md shadow-lg"
      />
    </div>
  );
};

export default App;
