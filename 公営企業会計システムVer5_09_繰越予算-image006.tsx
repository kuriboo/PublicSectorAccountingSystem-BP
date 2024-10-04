import React from 'react';

// プロパティの型定義
type LogoProps = {
  width?: number; // 幅のオプション設定
  height?: number; // 高さのオプション設定
  className?: string; // 追加のクラス名
};

// ロゴコンポーネントの定義
const Logo: React.FC<LogoProps> = ({ width = 150, height = 50, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`} style={{ width, height }}>
      <img 
        src="/path/to/logo.png" 
        alt="株式会社ぎょうせい - システム事業部" 
        className="object-contain" 
        style={{ width: '100%', height: '100%' }} 
      />
    </div>
  );
};

export default Logo;