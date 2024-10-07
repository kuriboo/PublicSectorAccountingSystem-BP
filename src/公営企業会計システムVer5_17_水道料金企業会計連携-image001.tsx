import React from 'react';

// プロパティの型定義
interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  onClick: () => void;
}

// カードコンポーネント
const Card: React.FC<CardProps> = ({ title, content, imageUrl, onClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={onClick}>
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
```