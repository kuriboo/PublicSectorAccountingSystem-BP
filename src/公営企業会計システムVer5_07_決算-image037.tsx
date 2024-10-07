// LogoComponent.tsx
import React from 'react';

// TypeScriptの型定義
interface LogoComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const LogoComponent: React.FC<LogoComponentProps> = ({
  src,
  alt,
  width = 100,
  height = 100,
  className = '',
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="p-5">
      <LogoComponent
        src="/path/to/logo.png" // ロゴの実際のパスに変更してください
        alt="Company Logo"
        width={200}
        height={60}
        className="my-4"
      />
    </div>
  );
};

export default HomePage;
