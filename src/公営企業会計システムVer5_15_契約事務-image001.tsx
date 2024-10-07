import React from 'react';

interface LogoProps {
  text?: string; // ロゴのテキストをカスタマイズ可能
  imgSrc?: string; // 画像のソースをカスタマイズ可能
  alt?: string; // 画像のaltテキスト
  className?: string; // Tailwind CSSのクラスを利用可能
}

const Logo: React.FC<LogoProps> = ({
  text = '株式会社ぎょうせい', 
  imgSrc = '/path/to/default/logo.png', 
  alt = 'Logo', 
  className = ''
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 会社のロゴ画像 */}
      <img src={imgSrc} alt={alt} className="w-10 h-10 mr-2" />
      {/* ロゴのテキスト */}
      <span className="text-xl font-semibold">{text}</span>
    </div>
  );
};

export default Logo;