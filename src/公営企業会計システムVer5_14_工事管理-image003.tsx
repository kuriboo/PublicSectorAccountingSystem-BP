

import React from 'react';

// プロパティの型定義
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${className} ${disabled ? 'bg-gray-400' : 'hover:bg-blue-600'}`}
    >
      {label}
    </button>
  );
};

export default Button;
