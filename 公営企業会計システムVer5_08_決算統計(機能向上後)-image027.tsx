```tsx
// components/Logo.tsx

import React from 'react';

// Prop types for Logo component
type LogoProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ src, alt = 'Logo', width = 100, height = 50, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`inline-block ${className}`} // Apply Tailwind CSS class
    />
  );
};

export default Logo;
```

```tsx
// pages/index.tsx

import React from 'react';
import Logo from '../components/Logo';

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Logo 
        src="/path/to/your/image.jpg" 
        alt="ぎょうせいのロゴ" 
        width={200} 
        height={50}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default HomePage;
```