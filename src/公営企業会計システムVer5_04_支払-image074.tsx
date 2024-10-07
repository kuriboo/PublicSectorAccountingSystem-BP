import React from 'react';

// Props type definition
type CheckboxOption = {
  label: string;
  checked: boolean;
};

type DialogProps = {
  title: string;
  options: CheckboxOption[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const Dialog: React.FC<DialogProps> = ({ title, options, onConfirm, onClear, onCancel }) => {
  return (
    <div className="max-w-sm mx-auto p-4 border rounded shadow-lg bg-white">
      {/* Dialog Title */}
      <h1 className="text-lg font-bold mb-4">{title}</h1>

      {/* Checkbox Options */}
      <div className="mb-4 border p-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={option.checked}
              className="form-checkbox h-5 w-5 mr-3"
            />
            <span>{option.label}</span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Dialog;
