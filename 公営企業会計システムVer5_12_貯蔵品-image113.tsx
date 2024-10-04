```tsx
import React from 'react';

// コンポーネントのプロパティの型定義
type GradientLineProps = {
  gradientStart?: string; // グラデーションの開始色（デフォルト: 水色）
  gradientEnd?: string;   // グラデーションの終了色（デフォルト: 黒）
  height?: string;        // 線の高さ（デフォルト: '4px'）
  additionalClasses?: string; // 追加のTailwind CSSクラス
};

// GradientLineコンポーネントの定義
const GradientLine: React.FC<GradientLineProps> = ({
  gradientStart = 'bg-blue-200', // デフォルトの開始色
  gradientEnd = 'bg-black', // デフォルトの終了色
  height = '4px', // デフォルトの高さ
  additionalClasses = '', // 追加のクラス
}) => (
  <div
    className={`w-full ${gradientStart} to-${gradientEnd} ${additionalClasses}`}
    style={{
      height,
      backgroundImage: `linear-gradient(to bottom, blue, ${gradientEnd})`,
    }}
  ></div>
);

export default GradientLine;
```