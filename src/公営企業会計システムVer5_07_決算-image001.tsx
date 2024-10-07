import React from 'react';

// Propsの型定義
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      {/* 画像 */}
      <img className="w-full" src={imageUrl} alt={title} />

      {/* コンテンツ */}
      <div className="px-6 py-4">
        {/* タイトル */}
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* 説明 */}
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {/* ボタン */}
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
```