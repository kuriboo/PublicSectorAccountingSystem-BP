import React from 'react';

// 型定義
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

// Cardコンポーネント
const Card: React.FC<CardProps> = ({ title, description, imageUrl, altText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* 画像セクション */}
      <img className="w-full" src={imageUrl} alt={altText} />
      <div className="px-6 py-4">
        {/* タイトル */}
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* 説明文 */}
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
