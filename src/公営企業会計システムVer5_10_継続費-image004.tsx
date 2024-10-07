//失敗ファイル
// components/CustomButton.tsx

import React from 'react';

// コンポーネントのプロパティの型定義
interface CustomButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  color = 'bg-blue-500',
  disabled = false
}) => {
  return (
    <button
      className={`px-4 py-2 text-white ${color} rounded-md hover:bg-blue-600 disabled:opacity-50`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default CustomButton;
