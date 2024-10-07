import React from 'react';

// 型定義
interface GradientBarProps {
  colors: string[]; // グラデーションの色
  height?: string;  // バーの高さ
}

// コンポーネント定義
const GradientBar: React.FC<GradientBarProps> = ({ colors, height = '10px' }) => {
  // グラデーションのスタイルを生成
  const gradientStyle = {
    background: `linear-gradient(to right, ${colors.join(', ')})`,
    height: height,
  };

  return (
    // Tailwind to cover full width and other basic styles
    <div style={gradientStyle} className="w-full" />
  );
};

export default GradientBar;

// 使用例
// <GradientBar colors={['#80c1ff', '#000', '#000', '#80c1ff']} height="10px" />
```