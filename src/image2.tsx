import React from 'react';

// Type definition for the component props
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

// Card component using Tailwind CSS for styling
const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* Image section */}
      <img className="w-full" src={imageUrl} alt={title} />
      
      {/* Text content section */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      
      {/* Link section */}
      <div className="px-6 pt-4 pb-2">
        <a href={link} className="text-blue-500 hover:text-blue-700">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Card;