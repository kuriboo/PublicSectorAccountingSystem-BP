import React from 'react';

// 型定義
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  onButtonClick?: () => void;
}

// Cardコンポーネント
const Card: React.FC<CardProps> = ({ title, description, imageUrl, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      {/* 画像表示 */}
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        {/* タイトル */}
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* 説明文 */}
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {/* ボタン */}
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={onButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Card;
