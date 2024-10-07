import React from 'react';

type InputProps = {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="flex items-center my-2">
    <label className="w-1/3 text-right mr-2">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-2/3 p-1 border rounded"
    />
  </div>
);

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
  >
    {label}
  </button>
);

type FormProps = {
  projectYear: string;
  annualAllocation: number;
  onValueChange: (field: string, value: string | number) => void;
};

const Form: React.FC<FormProps> = ({ projectYear, annualAllocation, onValueChange }) => {
  return (
    <div className="p-4 border rounded bg-gray-100">
      <InputField
        label="年割り年度"
        value={projectYear}
        onChange={(e) => onValueChange('projectYear', e.target.value)}
      />
      <InputField
        label="年割り"
        value={annualAllocation}
        onChange={(e) => onValueChange('annualAllocation', Number(e.target.value))}
      />
      <div className="flex justify-end space-x-2 mt-4">
        <Button label="OK" onClick={() => console.log('OK clicked')} />
        <Button label="クリア" onClick={() => console.log('クリア clicked')} variant="secondary" />
        <Button label="終了" onClick={() => console.log('終了 clicked')} variant="secondary" />
      </div>
    </div>
  );
};

export default Form;