import React from 'react';

// TypeScriptの型定義
interface ButtonProps {
  label: string; // ボタンのラベル
  onClick: () => void; // クリックイベントハンドラ
  disabled?: boolean; // ボタンが無効化されているかどうか
}

// Buttonコンポーネントの定義
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded ${disabled ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} 
                  text-white font-semibold transition-colors duration-300 ease-in-out`}
    >
      {label}
    </button>
  );
};

export default Button;