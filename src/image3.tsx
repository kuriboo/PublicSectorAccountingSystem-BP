import React from 'react';

// Propsの型定義
type LogoProps = {
  src: string; // ロゴの画像URL
  alt: string; // 代替テキスト
  width?: number; // 幅（任意）
  height?: number; // 高さ（任意）
  className?: string; // 追加のCSSクラス（任意）
};

// 再利用可能なロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ src, alt, width = 100, height = 50, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 画像要素 */}
      <img src={src} alt={alt} width={width} height={height} className="object-contain" />
    </div>
  );
};

export default Logo;

// 使用例:
// <Logo src="/path/to/logo.png" alt="ロゴの代替テキスト" width={150} height={50} className="custom-class" />