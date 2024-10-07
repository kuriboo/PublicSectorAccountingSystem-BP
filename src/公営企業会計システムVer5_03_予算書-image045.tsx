import React from 'react';

type LogoProps = {
  width?: string;
  height?: string;
  altText?: string;
};

const Logo: React.FC<LogoProps> = ({
  width = '150px',
  height = '50px',
  altText = 'Logo'
}) => {
  return (
    // Tailwind CSS classes are applied for styling
    <img
      src="/path/to/logo.png" // Update the path based on your project structure
      alt={altText}
      className="object-contain"
      style={{ width, height }}
    />
  );
};

export default Logo;