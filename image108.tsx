```tsx
import { FC } from 'react';

// プロパティの型定義
interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

// 再利用可能なロゴコンポーネント
const Logo: FC<LogoProps> = ({ src, alt, width = 100, height = 50, className }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height}
      className={`inline-block ${className}`} // Tailwind CSSを使用したクラス
    />
  );
}

export default Logo;
```