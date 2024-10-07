import React from 'react';

// Prop types for the Logo component
interface LogoProps {
  // Image source URL
  src: string;
  // Alternative text for the image
  alt: string;
  // Custom width for the image, default to 'auto' for responsive design
  width?: string;
  // Custom height for the image, default to 'auto' for responsive design
  height?: string;
  // Additional CSS classes for customization
  className?: string;
}

// Logo component definition
const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  width = 'auto',
  height = 'auto',
  className = '',
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
