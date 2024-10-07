import React from 'react';

// Props type definition
type FormProps = {
  options: { label: string; checked: boolean }[];
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
  onToggleOption: (index: number) => void;
};

// Main component
const PrintForm: React.FC<FormProps> = ({
  options,
  onSubmit,
  onClear,
  onCancel,
  onToggleOption,
}) => {
  return (
    <div className="p-4 bg-white border rounded shadow-md max-w-md">
      <h2 className="text-lg font-bold mb-4">印刷対象帳票名</h2>
      <ul className="mb-4">
        {options.map((option, index) => (
          <li key={index} className="mb-2">
            <label>
              <input
                type="checkbox"
                checked={option.checked}
                onChange={() => onToggleOption(index)}
                className="mr-2"
              />
              {option.label}
            </label>
          </li>
        ))}
      </ul>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onSubmit}
          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded shadow"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded shadow"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded shadow"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintForm;
