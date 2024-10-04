```tsx
// LogoComponent.tsx
import Image from 'next/image';
import React from 'react';

// Props type definition for the LogoComponent
type LogoComponentProps = {
  src: string; // URL of the logo image
  alt: string; // Alt text for the image
  width?: number; // Optional width of the logo
  height?: number; // Optional height of the logo
  className?: string; // Optional additional classes for custom styling
};

// Reusable LogoComponent
const LogoComponent: React.FC<LogoComponentProps> = ({
  src,
  alt,
  width = 100, // Default width
  height = 50, // Default height
  className,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default LogoComponent;
```

```tsx
// Usage in a Next.js page
import LogoComponent from '../components/LogoComponent';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-xl mb-4">Company Home Page</h1>
      <LogoComponent
        src="/path/to/logo.png"
        alt="企業ロゴ"
        width={200}
        height={50}
        className="my-custom-class" // Optional custom class
      />
    </div>
  );
};

export default HomePage;
```