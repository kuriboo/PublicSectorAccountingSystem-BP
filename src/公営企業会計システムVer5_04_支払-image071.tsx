import React from 'react';

type CheckboxOption = {
  label: string;
  checked: boolean;
};

type PrintDialogProps = {
  title: string;
  options: CheckboxOption[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const PrintDialog: React.FC<PrintDialogProps> = ({
  title,
  options,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-300 shadow-md p-4">
      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      <div className="border-t border-b my-4 py-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={option.checked}
              className="mr-2"
              readOnly
            />
            <span>{option.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
          className="bg-gray-200 text-black px-4 py-1 rounded hover:bg-gray-300"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 text-black px-4 py-1 rounded hover:bg-gray-300"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-200 text-black px-4 py-1 rounded hover:bg-gray-300"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintDialog;
```