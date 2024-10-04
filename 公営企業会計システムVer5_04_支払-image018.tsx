import React from 'react';

// TypeScript型定義
interface CheckboxOption {
  label: string;
  checked: boolean;
}

interface Props {
  options: CheckboxOption[];
  onOptionChange: (index: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const CheckboxForm: React.FC<Props> = ({ options, onOptionChange, onSubmit, onClear, onCancel }) => {
  return (
    <div className="p-4 border-2 rounded shadow-lg bg-white">
      <h2 className="text-xl font-semibold mb-4">印刷対象帳票名</h2>
      <div className="border p-4 mb-4">
        {options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="inline-flex items-center">
              <input 
                type="checkbox" 
                className="form-checkbox" 
                checked={option.checked} 
                onChange={() => onOptionChange(index)} 
              />
              <span className="ml-2">{option.label}</span>
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-end space-x-2">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onSubmit}
        >
          OK
        </button>
        <button 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CheckboxForm;