import React from 'react';

// Props type definition
type LogoProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ src, alt, width = 100, height = 50, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Logo;
```

```tsx
// Usage example:
// <Logo 
//   src="/path/to/logo.png" 
//   alt="Company Logo"
//   width={200}
//   height={100}
//   className="mx-auto my-4"
// />
```