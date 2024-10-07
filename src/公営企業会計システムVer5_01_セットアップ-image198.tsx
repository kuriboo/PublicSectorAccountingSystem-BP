import React from 'react';

// TypeScriptの型定義
interface LogoProps {
  src: string; // 画像のソース
  alt: string; // 画像の説明文
  width?: number; // 画像の幅（オプション）
  height?: number; // 画像の高さ（オプション）
  className?: string; // カスタムスタイルのためのクラス名（オプション）
}

// Tailwind CSSを使用してスタイリング
const Logo: React.FC<LogoProps> = ({ src, alt, width = 50, height = 50, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={src} alt={alt} width={width} height={height} className="mr-2" />
      <div className="text-xs font-bold">
        <div>株式会社ぎょうせい</div>
        <div className="font-normal">システム事業部</div>
      </div>
    </div>
  );
};

export default Logo;

// 使用例:
// <Logo src="/path/to/logo.png" alt="株式会社ぎょうせいロゴ" width={100} height={50} />
