import React from 'react';

// TypeScript interface for component props
interface LogoProps {
  imageUrl: string;
  altText: string;
  width?: number;
  height?: number;
  className?: string;
}

// Functional component using Tailwind CSS for styling
const Logo: React.FC<LogoProps> = ({
  imageUrl,
  altText,
  width = 100,
  height = 30,
  className = '',
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Display the image with customizable width and height */}
      <img src={imageUrl} alt={altText} width={width} height={height} />
    </div>
  );
};

export default Logo;
