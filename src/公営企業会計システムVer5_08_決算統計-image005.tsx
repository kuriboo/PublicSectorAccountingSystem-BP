// Import React and necessary types
import React from 'react';

// Define the prop types for the Logo component
type LogoProps = {
  src: string; // Source URL for the image
  alt?: string; // Alternative text for the image
  width?: number; // Width of the image
  height?: number; // Height of the image
  className?: string; // Additional custom classes
};

// Define a functional component with props
const Logo: React.FC<LogoProps> = ({
  src,
  alt = 'Logo', // Default alt text
  width = 150, // Default width
  height = 50, // Default height
  className = ''
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;

// Usage:
// <Logo src="/path/to/logo.png" alt="Company Logo" width={200} height={60} className="custom-class" />