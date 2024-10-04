import React from 'react';

// TypeScriptの型定義
interface DividerProps {
  height?: string; // 高さをカスタマイズするためのプロパティ
  gradientStart?: string; // グラデーションの開始色
  gradientEnd?: string; // グラデーションの終了色
}

// Dividerコンポーネント
const Divider: React.FC<DividerProps> = ({
  height = "4px", // デフォルトの高さは4px
  gradientStart = "#B0E0E6", // デフォルトの開始色は淡い青色
  gradientEnd = "#000000" // デフォルトの終了色は黒
}) => {
  return (
    <div
      className="w-full"
      style={{
        height: height,
        background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`
      }}
    ></div>
  );
};

export default Divider;