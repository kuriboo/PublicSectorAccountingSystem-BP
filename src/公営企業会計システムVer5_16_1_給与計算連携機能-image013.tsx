import React from 'react';

// TypeScriptの型定義
interface LogoProps {
  width?: string;  // ロゴの幅
  height?: string; // ロゴの高さ
  altText?: string; // 画像の代替テキスト
}

const Logo: React.FC<LogoProps> = ({ width = '100', height = '100', altText = 'Company Logo' }) => {
  return (
    <div className="flex items-center">
      {/* 画像コンポーネント */}
      <img
        src="/path/to/logo.png" // ロゴのパスを指定
        width={width}
        height={height}
        alt={altText}
        className="mr-4" // Tailwind CSSでマージンを追加
      />
      {/* テキストラベル */}
      <div>
        <p className="text-lg font-bold">株式会社ぎょうせい</p>
        <p className="text-sm">システム事業部</p>
      </div>
    </div>
  );
};

export default Logo;
```