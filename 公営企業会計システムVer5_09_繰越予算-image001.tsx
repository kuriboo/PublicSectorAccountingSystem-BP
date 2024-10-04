```tsx
// Import necessary modules from React and Next.js
import React from 'react';

// Define type for component props
interface LogoProps {
  altText: string;
  width?: number; // Optional, allows customization of logo width
  height?: number; // Optional, allows customization of logo height
}

// Define a reusable functional component
const Logo: React.FC<LogoProps> = ({ altText, width = 150, height = 50 }) => {
  return (
    // Tailwind CSS classes for styling
    <div className="flex items-center">
      {/* Logo image */}
      <img
        src="/path-to-logo.png" // Replace with actual path to the image
        alt={altText}
        width={width}
        height={height}
        className="object-contain"
      />
      {/* Text beside logo */}
      <div className="ml-4">
        <h1 className="text-lg font-bold">株式会社 ぎょうせい</h1>
        <p className="text-sm text-gray-700">システム事業部</p>
      </div>
    </div>
  );
}

export default Logo;
```