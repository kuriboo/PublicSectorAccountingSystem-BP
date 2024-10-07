import React from 'react';

// プロパティの型定義
type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

// Buttonコンポーネントの定義
const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-200 border border-gray-400 rounded-full px-4 py-2 shadow-md hover:shadow-lg active:shadow-inner ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
