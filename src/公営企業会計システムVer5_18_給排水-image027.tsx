import React from 'react';

// プロパティの型定義
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'danger';
}

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'default' }) => {
  // ボタンのスタイルをTailwind CSSを使用して設定
  const baseStyles = 'px-4 py-2 rounded shadow';
  const variantStyles = variant === 'danger' ? 'bg-red-500 text-white' : 'bg-gray-400 text-black';
  
  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {label}
    </button>
  );
};

// ラジオボタンの型定義
interface RadioButtonProps {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

// ラジオボタンコンポーネント
const RadioButton: React.FC<RadioButtonProps> = ({ name, label, value, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="form-radio"
      />
      <span>{label}</span>
    </label>
  );
};

// メインのコンポーネント
interface ActionBarProps {
  onEdit: () => void;
  onDelete: () => void;
  selectedOption: string;
  onOptionChange: (value: string) => void;
}

const ActionBar: React.FC<ActionBarProps> = ({ onEdit, onDelete, selectedOption, onOptionChange }) => {
  return (
    <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded">
      <Button label="明細編集" onClick={onEdit} />
      <Button label="行削除" onClick={onDelete} variant="danger" />

      <div className="flex items-center space-x-4">
        <RadioButton
          name="processingOption"
          label="枠毎"
          value="frame"
          checked={selectedOption === 'frame'}
          onChange={onOptionChange}
        />
        <RadioButton
          name="processingOption"
          label="明細毎"
          value="detail"
          checked={selectedOption === 'detail'}
          onChange={onOptionChange}
        />
      </div>
    </div>
  );
};

export default ActionBar;
```