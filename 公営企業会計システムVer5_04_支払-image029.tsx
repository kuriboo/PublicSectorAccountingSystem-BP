```tsx
import React from 'react';

type InputType = 'text' | 'number' | 'date';

interface InputProps {
  label: string;
  type: InputType;
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
}

const InputField: React.FC<InputProps> = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-xs font-semibold leading-tight">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
        placeholder={placeholder}
        className="border rounded p-2 text-xs"
      />
    </div>
  );
};

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-xs font-semibold leading-tight">{label}</label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border rounded p-2 text-xs h-24"
      />
    </div>
  );
};

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color = 'bg-blue-500' }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} text-white text-xs font-semibold py-2 px-4 rounded shadow`}
    >
      {label}
    </button>
  );
};

interface FormProps {
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const Form: React.FC<FormProps> = ({ onSubmit, onClear, onFinish }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-sm shadow-md">
      <h1 className="text-lg font-bold mb-4">予定支出負担行為入力(工事)</h1>
      <InputField label="予定処理日" type="date" value="" onChange={() => {}} />
      <InputField label="工事名場所" type="text" value="" onChange={() => {}} />
      <TextArea label="摘要" value="" onChange={() => {}} />
      <div className="flex gap-2 justify-end mt-4">
        <Button label="OK" onClick={onSubmit} />
        <Button label="クリア" onClick={onClear} color="bg-gray-500" />
        <Button label="終了" onClick={onFinish} color="bg-red-500" />
      </div>
    </div>
  );
};

export default Form;
```