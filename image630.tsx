```tsx
import React from 'react';

// Props interface for the Logo component
interface LogoProps {
  width?: number; // optional width of the logo
  height?: number; // optional height of the logo
  altText?: string; // optional alt text for the image
}

// Functional component definition
const Logo: React.FC<LogoProps> = ({
  width = 200, // default width
  height = 100, // default height
  altText = 'Company Logo',
}) => {
  return (
    <div className="flex items-center justify-center p-4">
      <img
        src="/path-to-logo.png" // ensure this path is correct relative to the public directory
        width={width}
        height={height}
        alt={altText}
        className="object-contain" // Tailwind CSS class for responsive image sizing
      />
    </div>
  );
};

export default Logo;
```