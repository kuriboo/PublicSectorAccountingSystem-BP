```tsx
import React from 'react';

interface LogoComponentProps {
  width?: number;
  height?: number;
  altText?: string;
}

// 再利用可能なロゴコンポーネント
const LogoComponent: React.FC<LogoComponentProps> = ({ 
  width = 200, 
  height = 50, 
  altText = 'Company Logo' 
}) => {
  return (
    <img
      src="/path/to/logo.jpg" // 画像のパスを正確に設定してください
      width={width}
      height={height}
      alt={altText}
      className="object-contain" // 画像を適切に縮小するためのTailwind CSS
    />
  );
};

export default LogoComponent;
```