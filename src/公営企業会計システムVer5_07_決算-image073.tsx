// Logo.tsx
import React from 'react';

// TypeScriptのProps型定義
interface LogoProps {
  src: string; // ロゴ画像のソース
  alt: string; // 画像の代替テキスト
  width?: number; // 幅 (オプション)
  height?: number; // 高さ (オプション)
  className?: string; // 追加のクラス名 (オプション)
}

const Logo: React.FC<LogoProps> = ({ src, alt, width = 100, height = 40, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`inline-block ${className}`} // Tailwind CSSでスタイルを追加
    />
  );
};

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-100 flex justify-between items-center">
      <Logo 
        src="/logo.png" // 適切なロゴ画像のパスを指定
        alt="株式会社ぎょうせいのロゴ"
        width={150} 
        height={50}
        className="mr-4"
      />
      <nav>
        {/* ナビゲーションメニュー */}
      </nav>
    </header>
  );
};

export default Header;
