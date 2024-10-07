import React from 'react';

// TypeScriptの型定義
interface LogoProps {
  altText: string;
  imageUrl: string;
  className?: string; // Tailwind CSSのクラスをカスタマイズするためのプロパティ
}

const CompanyLogo: React.FC<LogoProps> = ({ altText, imageUrl, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 画像と代替テキストをプロパティとして受け取る */}
      <img src={imageUrl} alt={altText} className="h-16 w-16" />
      <div className="ml-4">
        <p className="text-xl font-bold">株式会社ぎょうせい</p>
        <p className="text-sm">システム事業部</p>
      </div>
    </div>
  );
};

export default CompanyLogo;
