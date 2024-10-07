// components/CompanyLogo.tsx
import React from 'react';

// TypeScriptの型定義
interface CompanyLogoProps {
  src: string; // ロゴの画像ソース
  alt?: string; // 画像の代替テキスト
  width?: number; // 画像の幅
  height?: number; // 画像の高さ
}

// ロゴコンポーネント
const CompanyLogo: React.FC<CompanyLogoProps> = ({
  src,
  alt = 'Company Logo',
  width = 150,
  height = 50,
}) => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
};


const Example = () => {
  return (
    <div>
      <CompanyLogo src="/path/to/logo.png" alt="株式会社ぎょうせい システム事業部" />
    </div>
  );
};

export default Example;
