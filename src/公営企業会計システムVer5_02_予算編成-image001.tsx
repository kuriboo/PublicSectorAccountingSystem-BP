// Button.tsx

import React from 'react'

// ボタンコンポーネントのプロパティの型定義
type ButtonProps = {
  text: string; // ボタンに表示するテキスト
  onClick: () => void; // クリック時に呼び出される関数
  disabled?: boolean; // ボタンが無効化されているかどうか
}

// Tailwind CSSを使用したスタイリングを含むボタンのコンポーネント
const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 
        bg-blue-500
        text-white
        font-semibold
        rounded-lg
        shadow-md
        hover:bg-blue-700 
        focus:outline-none 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {text}
    </button>
  )
}


const ExampleUsage = () => {
  // ボタンがクリックされたときの処理
  const handleClick = () => {
    alert('Button clicked!');
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Buttonコンポーネントの使用例 */}
      <Button text="Click Me" onClick={handleClick} />
    </div>
  )
}

export default ExampleUsage;
