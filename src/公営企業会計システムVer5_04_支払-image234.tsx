import React from 'react';

// プロパティの型定義
type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
};

// Cardコンポーネントの定義
const Card: React.FC<CardProps> = ({ title, description, imageSrc, altText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* 画像部分 */}
      <img className="w-full" src={imageSrc} alt={altText} />
      <div className="px-6 py-4">
        {/* タイトル部分 */}
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* 説明文部分 */}
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
