import React from 'react';

// プロパティの型定義
type LogoProps = {
  text: string;
  imageSrc: string;
  altText: string;
  className?: string;
};

// ロゴコンポーネントの定義
const Logo: React.FC<LogoProps> = ({ text, imageSrc, altText, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 画像 */}
      <img src={imageSrc} alt={altText} className="h-12 w-auto mr-4" />
      {/* テキスト */}
      <span className="text-xl font-bold">{text}</span>
    </div>
  );
};

export default Logo;

// 使用例
// <Logo 
//   text="株式会社ぎょうせい"
//   imageSrc="/path/to/logo.png"
//   altText="企業ロゴ"
//   className="custom-class"
// />
```