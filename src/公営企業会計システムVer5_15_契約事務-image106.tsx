// components/Logo.tsx
import React from 'react';

interface LogoProps {
  text?: string;
  textColor?: string;
  fontSize?: string;
}

const Logo: React.FC<LogoProps> = ({ text = 'ぎょうせい', textColor = 'black', fontSize = 'text-lg' }) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Icon part of the logo */}
      <div className="bg-black rounded-full h-8 w-8 flex items-center justify-center">
        <span className="text-white text-sm">商</span>
      </div>
      
      {/* Text part of the logo */}
      <span className={`font-bold ${fontSize}`} style={{ color: textColor }}>
        {text}
      </span>
    </div>
  );
};

export default Logo;

```tsx
// Usage Example in a Next.js page
// pages/index.tsx
import React from 'react';
import Logo from '../components/Logo';

const HomePage: React.FC = () => {
  return (
    <div className="p-4">
      {/* Example usage of the Logo component with customization */}
      <Logo text="株式会社ぎょうせい" textColor="black" fontSize="text-xl" />
    </div>
  );
};

export default HomePage;
