```tsx
import React from 'react';

// Type definition for component props
interface LogoProps {
  className?: string; // Custom classes to style the component
  altText?: string; // Alternative text for accessibility
}

// Functional component
const Logo: React.FC<LogoProps> = ({ className = '', altText = 'Logo' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Image element */}
      <img
        src="/path/to/logo.png"
        alt={altText}
        className="h-12 w-auto" // Example Tailwind CSS styles
      />
      {/* Text element */}
      <div className="ml-4">
        <p className="text-lg font-bold">株式会社ぎょうせい</p>
        <p className="text-sm">システム事業部</p>
      </div>
    </div>
  );
};

export default Logo;
```