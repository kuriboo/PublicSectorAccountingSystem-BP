import React from 'react';

// TypeScript type definition for component props
type LogoProps = {
  imageSrc: string;
  altText: string;
  companyName: string;
  className?: string;
};

// Functional component definition
const Logo: React.FC<LogoProps> = ({ imageSrc, altText, companyName, className }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Company logo image */}
      <img src={imageSrc} alt={altText} className="h-10 w-auto" />
      
      {/* Company name text */}
      <span className="text-xl font-bold">{companyName}</span>
    </div>
  );
};

export default Logo;

// Usage example
// <Logo imageSrc="/path/to/logo.png" altText="Company Logo" companyName="株式会社ぎょうせい" />
