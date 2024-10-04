```tsx
import React from 'react';

// Props type definition
type LogoProps = {
  imageUrl: string;
  altText?: string;
  width?: number;
  height?: number;
  className?: string;
};

// Reusable Logo component
const Logo: React.FC<LogoProps> = ({
  imageUrl,
  altText = 'Logo',
  width = 100,
  height = 100,
  className = '',
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo image with customizable alt text, width, and height */}
      <img
        src={imageUrl}
        alt={altText}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
```