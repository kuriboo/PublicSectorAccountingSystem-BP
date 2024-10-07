import React from 'react';

// TypeScript interface for component props
interface LogoProps {
  size?: 'small' | 'medium' | 'large'; // Size of the logo
  altText?: string; // Alt text for the image
}

// React component using Next.js and TypeScript
const GyouseiLogo: React.FC<LogoProps> = ({ size = 'medium', altText = 'Company Logo' }) => {
  // Tailwind CSS class based on size prop
  const sizeClass = size === 'small' ? 'w-16' : size === 'large' ? 'w-32' : 'w-24';

  return (
    <div className={`flex items-center ${sizeClass}`}>
      <img
        src="/logo.png" // Path to the logo image
        alt={altText}
        className="h-auto"
      />
    </div>
  );
};

export default GyouseiLogo;
```