import React from 'react';

// プロパティの型定義
type CustomButtonProps = {
  text: string;
  onClick: () => void;
  color?: string;
  disabled?: boolean;
};

// コンポーネント定義
const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, color = "blue", disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${disabled ? "bg-gray-400" : `bg-${color}-500`} text-white`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;
```