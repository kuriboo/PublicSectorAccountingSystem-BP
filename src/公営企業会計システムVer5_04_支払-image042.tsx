import React from 'react';

type CheckboxListProps = {
  options: { label: string; checked: boolean }[];
  onChange: (index: number) => void;
};

const CheckboxList: React.FC<CheckboxListProps> = ({ options, onChange }) => {
  return (
    <div className="border p-4 rounded-md">
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={option.checked}
            onChange={() => onChange(index)}
            className="mr-2"
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

type DialogProps = {
  title: string;
  options: { label: string; checked: boolean }[];
  onCheckboxChange: (index: number) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const Dialog: React.FC<DialogProps> = ({
  title,
  options,
  onCheckboxChange,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="w-96 mx-auto mt-20 p-4 bg-white border rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <CheckboxList options={options} onChange={onCheckboxChange} />
      <div className="flex justify-end mt-4">
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Dialog;