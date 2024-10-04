```tsx
import React from 'react';

// Prop types for the JTitle component
type JTitleProps = {
  text: string;
  className?: string;
};

// JTitle component definition
const JTitle: React.FC<JTitleProps> = ({ text, className }) => {
  return (
    <h1 className={`text-lg font-bold text-blue-600 ${className}`}>
      {text}
    </h1>
  );
};

export default JTitle;
```