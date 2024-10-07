// Import necessary modules and types
import React from 'react';

// Define the type for the props
type LogoProps = {
  src: string; // Image source URL
  alt: string; // Alt text for accessibility
  width?: number; // Optional width for the image
  height?: number; // Optional height for the image
  className?: string; // Optional additional CSS classes
};

// Create a functional component using the defined props
const Logo: React.FC<LogoProps> = ({ src, alt, width, height, className }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Render the logo image with optional dimensions */}
      <img src={src} alt={alt} width={width} height={height} className="object-contain" />
      {/* Render the company name using Tailwind CSS for styling */}
      <p className="text-xl font-bold">株式会社ぎょうせい</p>
    </div>
  );
};

// Export the component for reuse
export default Logo;
