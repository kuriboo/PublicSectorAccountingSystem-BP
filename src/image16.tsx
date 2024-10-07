// Import necessary libraries
import React from 'react';
import classNames from 'classnames';

// Define the props for the component
type TextComponentProps = {
  text: string;
  className?: string;
};

// Functional component
const TextComponent: React.FC<TextComponentProps> = ({ text, className }) => {
  return (
    <div className={classNames("text-blue-500 font-bold", className)}>
      {/* Display the text prop */}
      {text}
    </div>
  );
};

export default TextComponent;