
import React from 'react';

// 型定義
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* 画像部分 */}
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        {/* タイトル部分 */}
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* 説明部分 */}
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* ボタン */}
        <button
          onClick={onButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const handleButtonClick = () => {
  alert('Button clicked!');
};

const Example = () => (
  <Card
    title="Card Title"
    description="This is a description of the card."
    imageUrl="https://via.placeholder.com/150"
    buttonText="Click Me"
    onButtonClick={handleButtonClick}
  />
);

export default Example;
