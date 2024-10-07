// components/Logo.tsx
import React from 'react';

// プロパティの型定義
interface LogoProps {
  className?: string; // カスタムスタイルを適用するためのクラス名
  alt?: string; // 画像の代替テキスト
}

const Logo: React.FC<LogoProps> = ({ className = '', alt = 'Company Logo' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* ロゴ画像 */}
      <img
        src="/path/to/logo.png"
        alt={alt}
        className="h-16 w-auto mr-4" // 画像のサイズ設定
      />
      {/* テキスト部分 */}
      <div>
        <p className="text-xl font-bold">株式会社ぎょうせい</p>
        <p className="text-md">システム事業部</p>
      </div>
    </div>
  );
};

export default Logo;