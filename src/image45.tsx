import React from 'react';

// ボタンの種類を定義
type ButtonType = 'ok' | 'clear' | 'finish';

// ボタンコンポーネントのプロパティ型を定義
interface ButtonProps {
  type: ButtonType;
  onClick: () => void;
}

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ type, onClick }) => {
  // ボタンのラベルを設定
  const label = () => {
    switch (type) {
      case 'ok':
        return 'OK';
      case 'clear':
        return 'クリア';
      case 'finish':
        return '終了';
      default:
        return '';
    }
  };

  // ボタンのスタイル設定
  const baseStyle = 'text-white bg-gray-500 rounded-full px-4 py-2 m-2 shadow-md hover:bg-gray-400';

  return (
    <button className={baseStyle} onClick={onClick}>
      {label()}
    </button>
  );
};

export default Button;