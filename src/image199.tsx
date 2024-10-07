// components/Logo.tsx

import React from 'react';

// TypeScript interface for component props
interface LogoProps {
  width?: string;
  height?: string;
  altText?: string;
}

const Logo: React.FC<LogoProps> = ({ width = '200px', height = '60px', altText = '企業ロゴ' }) => {
  return (
    <div className="flex items-center justify-center">
      {/* Logo image */}
      <img
        src="/path-to-your-logo-image.png"
        alt={altText}
        style={{ width, height }}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;

```tsx
// pages/index.tsx

import React from 'react';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Logo component with customizable properties */}
      <Logo width="300px" height="80px" altText="ぎょうせいシステム事業部のロゴ" />
    </div>
  );
};

export default Home;

```css
/* styles/globals.css */

/* Tailwind CSS styles (make sure to setup Tailwind CSS in your project) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Additional custom styles can be added here */
