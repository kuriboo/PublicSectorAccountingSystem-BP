```tsx
import React from 'react';

interface LogoProps {
  // Image source URL
  src: string;
  // Alternative text for the image
  alt: string;
  // Custom width of the image
  width?: string;
  // Custom height of the image
  height?: string;
  // Additional CSS classes for styling
  className?: string;
}

// Logo component
const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  width = '100px', // Default width
  height = 'auto',  // Default height
  className = '',   // Additional classes
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
```