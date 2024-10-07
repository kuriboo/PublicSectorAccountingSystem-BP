import React from 'react';

// Props type definition
interface CardProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: () => void;
}

// Card component
const Card: React.FC<CardProps> = ({ title, content, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      {/* Title of the card */}
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      
      {/* Content of the card */}
      <p className="text-gray-700 text-base">{content}</p>
      
      {/* Button in the card */}
      <button
        onClick={onButtonClick}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
```