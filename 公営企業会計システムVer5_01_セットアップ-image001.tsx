```tsx
import React from 'react';

// プロパティの型定義
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={onClick}>
      {/* 画像セクション */}
      <img className="w-full" src={imageUrl} alt={title} />
      {/* テキストセクション */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
```