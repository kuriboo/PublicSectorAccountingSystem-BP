```tsx
import React from 'react';

// TypeScript interface for component props
interface LogoProps {
  text?: string;
  imageUrl?: string;
  className?: string;
}

// React component
const Logo: React.FC<LogoProps> = ({ text = 'Default Text', imageUrl = '/default-logo.png', className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Image */}
      <img src={imageUrl} alt="Logo" className="h-8 w-8 mr-2" />

      {/* Text */}
      <span className="text-xl font-bold">{text}</span>
    </div>
  );
};

export default Logo;
```