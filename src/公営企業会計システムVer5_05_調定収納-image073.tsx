import React from 'react';

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const InputField: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center my-2">
      <label className="w-1/4">{label}</label>
      <input
        type="text"
        className="flex-1 border-gray-300 border rounded px-2 py-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded shadow m-1"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

type FormProps = {
  date: string;
  description: string;
  amount: string;
  onDateChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onAmountChange: (value: string) => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onCloseClick: () => void;
};

const FormComponent: React.FC<FormProps> = ({
  date,
  description,
  amount,
  onDateChange,
  onDescriptionChange,
  onAmountChange,
  onOkClick,
  onClearClick,
  onCloseClick,
}) => {
  return (
    <div className="p-4 border rounded bg-white max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">前受金調整入力</h2>
      <InputField label="調定日" value={date} onChange={onDateChange} />
      <InputField
        label="摘要"
        value={description}
        onChange={onDescriptionChange}
      />
      <InputField label="合計調定金額" value={amount} onChange={onAmountChange} />
      <div className="flex justify-end mt-4">
        <Button label="OK" onClick={onOkClick} />
        <Button label="クリア" onClick={onClearClick} />
        <Button label="終了" onClick={onCloseClick} />
      </div>
    </div>
  );
};

export default FormComponent;
```