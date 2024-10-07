import React from 'react';

type CheckboxOption = {
  label: string;
  checked: boolean;
};

type CheckboxListProps = {
  options: CheckboxOption[];
  onChange: (index: number) => void;
};

const CheckboxList: React.FC<CheckboxListProps> = ({ options, onChange }) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={option.checked}
            onChange={() => onChange(index)}
            className="mr-2"
          />
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  );
};

type DialogProps = {
  options: CheckboxOption[];
  onCheckboxChange: (index: number) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const Dialog: React.FC<DialogProps> = ({ options, onCheckboxChange, onOk, onClear, onCancel }) => {
  return (
    <div className="p-4 bg-white border rounded-md shadow-lg max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">印刷対象帳票名</h2>
      <CheckboxList options={options} onChange={onCheckboxChange} />

      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onOk} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Dialog;
