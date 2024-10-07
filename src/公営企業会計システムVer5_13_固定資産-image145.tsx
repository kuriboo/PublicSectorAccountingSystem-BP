import React from 'react';

// ボタンのプロパティの型を定義
type ButtonProps = {
  label: string; // ボタンのテキスト
  onClick: () => void; // クリック時のハンドラ
  color?: string; // ボタンの色（オプション）
  size?: 'small' | 'medium' | 'large'; // ボタンのサイズ（オプション）
};

// サイズに応じたクラスを返すヘルパー関数
const getSizeClasses = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return 'px-2 py-1 text-sm';
    case 'large':
      return 'px-6 py-3 text-lg';
    case 'medium':
    default:
      return 'px-4 py-2 text-base';
  }
};

// Buttonコンポーネント定義
const Button: React.FC<ButtonProps> = ({ label, onClick, color = 'blue', size = 'medium' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-500 text-white rounded ${getSizeClasses(size)} hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-300`}
    >
      {label}
    </button>
  );
};

export default Button;
```