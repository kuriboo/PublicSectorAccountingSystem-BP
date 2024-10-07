import React from 'react';

// Type definitions for component props
interface GradientBarProps {
  colors?: string[]; // Array of color strings for gradient
  height?: number; // Height of the gradient bar
  className?: string; // Additional CSS classes for styling
}

const GradientBar: React.FC<GradientBarProps> = ({
  colors = ['#8ed6e8', '#4578fb', '#1a1a1a'], // Default colors
  height = 10, // Default height
  className = '', // Default className
}) => {
  // Creating the gradient string from colors prop
  const gradient = colors.join(', ');

  return (
    <div
      className={`w-full ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradient})`,
        height: `${height}px`,
      }}
    />
  );
};

// Exporting the component for reuse
export default GradientBar;