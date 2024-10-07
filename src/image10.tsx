// Import necessary libraries
import React from 'react';

// Define the prop types for the component
interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  onButtonClick?: () => void;
}

// Card component with customizable props
const Card: React.FC<CardProps> = ({ title, content, imageUrl, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <img className="w-full" src={imageUrl} alt={title} />
      
      {/* Content Section */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      
      {/* Button Section */}
      <div className="px-6 pt-4 pb-2">
        <button 
          onClick={onButtonClick} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Action
        </button>
      </div>
    </div>
  );
};

export default Card;