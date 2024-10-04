```tsx
import React from 'react';

// 型定義
interface LogoProps {
  size?: number; // アイコンのサイズ
  textColor?: string; // テキストの色
  iconColor?: string; // アイコンの色
}

// コンポーネント定義
const GyouseiLogo: React.FC<LogoProps> = ({
  size = 100,
  textColor = 'text-black',
  iconColor = 'text-black',
}) => {
  return (
    <div className="flex items-center space-x-4">
      {/* アイコン部分 */}
      <div
        className={`flex justify-center items-center bg-${iconColor} rounded-full`}
        style={{ width: size, height: size }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="white"
          className="h-3/4 w-3/4"
        >
          {/* SVG パスを書き換えてください */}
          <circle cx="50" cy="50" r="40" />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="30">
            g
          </text>
        </svg>
      </div>
      {/* テキスト部分 */}
      <div className={`flex flex-col ${textColor}`}>
        <span className="text-xl font-bold">株式会社ぎょうせい</span>
        <span className="text-sm">データ・システム事業部</span>
      </div>
    </div>
  );
};

export default GyouseiLogo;

// 使用例:
// <GyouseiLogo size={120} textColor="text-blue-500" iconColor="bg-green-500" />
```