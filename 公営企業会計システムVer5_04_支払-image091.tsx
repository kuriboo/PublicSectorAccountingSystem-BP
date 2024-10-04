import React from 'react';

type InputProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
);

type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {text}
  </button>
);

type FormProps = {
  initialValue: string;
  onSubmit: (value: string) => void;
};

export const MoneyAdvanceForm: React.FC<FormProps> = ({ initialValue, onSubmit }) => {
  const [value, setValue] = React.useState(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(value);
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">資金前渡何入力</h1>
      <TextInput label="摘要" value={value} onChange={handleInputChange} />
      <div className="flex justify-end space-x-4">
        <Button text="OK" onClick={handleSubmit} type="submit" />
        <Button text="クリア" onClick={() => setValue('')} />
        <Button text="終了" onClick={() => console.log('終了 clicked')} />
      </div>
    </div>
  );
};