import React from 'react';

// TypeScriptの型定義
interface LogoProps {
  imageUrl: string;            // ロゴの画像URL
  altText: string;             // 画像の代替テキスト
  className?: string;          // カスタムスタイルのためのクラス名
}

// Next.jsの再利用可能なコンポーネント
const Logo: React.FC<LogoProps> = ({ imageUrl, altText, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 画像の表示 */}
      <img src={imageUrl} alt={altText} className="h-10 w-auto" />
    </div>
  );
};

export default Logo;

// 使用例:
// <Logo imageUrl="/path/to/image.png" altText="企業ロゴ" className="custom-class" />