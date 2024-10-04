import React from 'react';

// TypeScriptの型定義
interface LogoProps {
  altText: string; // 代替テキスト
  width?: number;  // 幅（オプション）
  height?: number; // 高さ（オプション）
  className?: string; // 追加のスタイル（オプション）
}

// ロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ altText, width = 200, height = 50, className = '' }) => {
  return (
    <img
      src="/logo.png" // 画像ファイルのパスはプロジェクトに応じて変更してください
      alt={altText}
      width={width}
      height={height}
      className={`object-contain ${className}`} // Tailwind CSSでスタイル設定
    />
  );
};

export default Logo;