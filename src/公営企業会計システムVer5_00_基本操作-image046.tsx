// Button.tsx

import React from 'react';

// TypeScriptの型定義
interface ButtonProps {
  text: string;
  onClick: () => void;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

// 再利用可能なButtonコンポーネント
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  bgColor = 'bg-blue-100',
  textColor = 'text-blue-700',
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} shadow-md py-2 px-4 focus:outline-none ${className}`}
    >
      {text}
    </button>
  );
};

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Button
        text="CSV出力"
        onClick={handleClick}
        bgColor="bg-blue-100"
        textColor="text-blue-700"
      />
    </div>
  );
};

export default App;
