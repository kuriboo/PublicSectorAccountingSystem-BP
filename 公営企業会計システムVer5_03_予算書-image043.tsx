```tsx
import React from 'react';

interface LogoProps {
  size?: number;
  altText?: string;
}

// Next.js + TypeScriptのロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ size = 100, altText = "Company Logo" }) => {
  return (
    <div className="flex items-center">
      {/* ロゴ画像 */}
      <img
        src="/logo.png"  // 公開フォルダに保存された画像を指す
        alt={altText}
        width={size}
        height={size}
        className="mr-4"
      />
      {/* テキスト部分 */}
      <div>
        <span className="font-bold text-xl">
          株式会社ぎょうせい
        </span>
        <br />
        <span className="text-lg">
          システム事業部
        </span>
      </div>
    </div>
  );
};

export default Logo;
```