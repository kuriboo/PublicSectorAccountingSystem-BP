import React from 'react';

// コンポーネントのプロパティの型定義
type ButtonProps = {
  label: string;
  onClick: () => void;
  color?: 'gray' | 'pink'; // ボタンの色
};

type RadioButtonProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

type ButtonGroupProps = {
  buttons: ButtonProps[];
  radioButtons: RadioButtonProps[];
};

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick, color = 'gray' }) => {
  const baseStyle = 'py-2 px-4 rounded shadow-md font-bold';
  const colorStyle = color === 'pink' ? 'bg-pink-200 text-black' : 'bg-gray-200 text-black';

  return (
    <button className={`${baseStyle} ${colorStyle}`} onClick={onClick}>
      {label}
    </button>
  );
};

// ラジオボタンコンポーネント
const RadioButton: React.FC<RadioButtonProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input type="radio" checked={checked} onChange={onChange} className="form-radio" />
      <span>{label}</span>
    </label>
  );
};

// ボタングループコンポーネント
const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, radioButtons }) => {
  return (
    <div className="flex space-x-4">
      {buttons.map((btn, index) => (
        <Button key={index} {...btn} />
      ))}
      <div className="flex space-x-4">
        {radioButtons.map((rb, index) => (
          <RadioButton key={index} {...rb} />
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;
```