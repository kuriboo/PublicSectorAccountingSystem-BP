```tsx
import React from 'react';

type ButtonProps = {
  label: string; // ボタンのラベル
  onClick: () => void; // クリック時のイベントハンドラー
  className?: string; // 任意のクラス名
};

// ボタンコンポーネントの作成
const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-gray-400 ${className}`}
  >
    {label}
  </button>
);

type ButtonGroupProps = {
  buttons: Array<{ label: string; onClick: () => void }> // ボタンの配列
};

// ボタングループコンポーネントの作成
const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => (
  <div className="flex space-x-2">
    {buttons.map((button, index) => (
      <Button
        key={index}
        label={button.label}
        onClick={button.onClick}
        className="min-w-[70px]"
      />
    ))}
  </div>
);

export default ButtonGroup;

// 使用例
/*
<ButtonGroup
  buttons={[
    { label: 'OK', onClick: () => alert('OK clicked') },
    { label: 'クリア', onClick: () => alert('クリア clicked') },
    { label: '終了', onClick: () => alert('終了 clicked') },
  ]}
/>
*/
```