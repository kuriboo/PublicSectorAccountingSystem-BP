import React from 'react';

// コンポーネントのプロパティの型定義
interface LogoProps {
  text?: string;
  className?: string;
}

// ロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ text = "株式会社ぎょうせい", className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* アイコン */}
      <div className="bg-black text-white rounded-full p-2 mr-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" />
          <text x="12" y="17" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">G</text>
        </svg>
      </div>
      {/* テキスト */}
      <span className="text-xl font-bold">{text}</span>
    </div>
  );
};

export default Logo;
```