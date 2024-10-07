// Import required packages and types from React and Next.js
import React from 'react';
import Image from 'next/image';

// Define the props for the Logo component
type LogoProps = {
  // URL of the image
  src: string;
  // Alternative text for the image
  alt: string;
  // Width of the image
  width?: number;
  // Height of the image
  height?: number;
  // Optional additional class names for styling
  className?: string;
};

// Create a functional component with TypeScript using the defined props
const Logo: React.FC<LogoProps> = ({ src, alt, width = 200, height = 50, className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Use Next.js Image component for optimized loading */}
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="inline-block object-contain"
      />
    </div>
  );
}

export default Logo;
```