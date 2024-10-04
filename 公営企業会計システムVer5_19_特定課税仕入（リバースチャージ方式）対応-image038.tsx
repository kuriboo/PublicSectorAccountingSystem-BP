import React from 'react';

// ButtonPropsの型定義
type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: string;
  size?: 'small' | 'medium' | 'large';
};

// Buttonコンポーネントの定義
const Button: React.FC<ButtonProps> = ({ text, onClick, color = 'blue', size = 'medium' }) => {
  // ボタンのサイズに応じたスタイルの定義
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  return (
    <button
      // Tailwind CSSを使ったスタイリング
      className={`${sizeClasses[size]} bg-${color}-500 hover:bg-${color}-700 text-white font-bold rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;