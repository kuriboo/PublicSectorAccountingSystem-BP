import React from 'react';

// 型定義
interface GradientLineProps {
  color?: string; // グラデーションの主な色
  height?: string; // ラインの高さ
}

// コンポーネント定義
const GradientLine: React.FC<GradientLineProps> = ({
  color = 'bg-blue-500', // デフォルト色
  height = '2px' // デフォルト高さ
}) => {
  return (
    <div 
      className={`${color} h-${height} w-full`} 
      style={{
        background: `linear-gradient(to right, ${color}, transparent, ${color})`
      }}
    />
  );
};

export default GradientLine;