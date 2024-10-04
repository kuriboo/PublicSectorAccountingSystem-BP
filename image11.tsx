```tsx
import React from 'react';

// 型定義
interface TitleProps {
  text: string;
  className?: string;
}

// コンポーネント定義
const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <h1 className={`text-lg font-bold ${className}`}>
      {text}
    </h1>
  );
};

export default Title;
```