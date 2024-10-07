import React from 'react';

type LogoProps = {
  className?: string; // Tailwind CSS用の任意のクラス名
  width?: number; // 画像の幅
  height?: number; // 画像の高さ
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 100, height = 50 }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* ロゴ画像 */}
      <img
        src="/path/to/logo.png" // ロゴ画像のパスを指定
        alt="会社ロゴ"
        width={width}
        height={height}
        className="mr-4"
      />
      {/* テキスト */}
      <div>
        <p className="text-lg font-bold">株式会社ぎょうせい</p>
        <p className="text-sm">システム事業部</p>
      </div>
    </div>
  );
}

export default Logo;
