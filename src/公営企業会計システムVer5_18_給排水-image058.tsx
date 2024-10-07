import React from 'react';

// ボタンの種類を指定するためのプロパティ型定義
type ButtonType = 'default' | 'primary' | 'danger';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: ButtonType;
}

// ボタンコンポーネント定義
const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'default' }) => {
  const baseStyle = 'px-4 py-2 rounded-md font-bold m-1';
  let typeStyle = '';

  switch (type) {
    case 'primary':
      typeStyle = 'bg-gray-300 text-black';
      break;
    case 'danger':
      typeStyle = 'bg-red-300 text-white';
      break;
    default:
      typeStyle = 'bg-white border';
  }

  return (
    <button className={`${baseStyle} ${typeStyle}`} onClick={onClick}>
      {label}
    </button>
  );
};

interface RadioButtonGroupProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

// ラジオボタングループコンポーネント定義
const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, selected, onChange }) => {
  return (
    <div className="flex items-center space-x-4">
      {options.map(option => (
        <label key={option} className="flex items-center">
          <input
            type="radio"
            value={option}
            checked={option === selected}
            onChange={() => onChange(option)}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

// コンポーネントの使用例
const Example = () => {
  const handleButtonClick = (action: string) => {
    console.log(`Button clicked: ${action}`);
  };

  const [selectedOption, setSelectedOption] = React.useState<string>('精率毎');

  return (
    <div className="flex space-x-4 p-4">
      <Button label="明細編集" onClick={() => handleButtonClick('edit')} type="default" />
      <Button label="行削除" onClick={() => handleButtonClick('delete')} type="danger" />
      <RadioButtonGroup
        options={['精率毎', '明細毎']}
        selected={selectedOption}
        onChange={setSelectedOption}
      />
    </div>
  );
};

export default Example;
```