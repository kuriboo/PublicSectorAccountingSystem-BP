import React from 'react';

type CheckboxOption = {
  label: string;
  value: string;
};

type InputConfig = {
  label: string;
  placeholder?: string;
  type?: string;
};

type FormProps = {
  dateRange: [string, string];
  numberRange: [string, string];
  inputConfigs: InputConfig[];
  checkboxOptions: CheckboxOption[];
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const FormComponent: React.FC<FormProps> = ({
  dateRange,
  numberRange,
  inputConfigs,
  checkboxOptions,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex justify-between items-center">
        {dateRange.map((date, index) => (
          <input
            key={index}
            type="date"
            defaultValue={date}
            className="border rounded p-2"
          />
        ))}
      </div>
      <div className="flex justify-between items-center">
        {numberRange.map((number, index) => (
          <input
            key={index}
            type="number"
            defaultValue={number}
            className="border rounded p-2"
          />
        ))}
      </div>
      {inputConfigs.map((config, index) => (
        <div key={index}>
          <label className="block text-sm font-medium text-gray-700">
            {config.label}
          </label>
          <input
            type={config.type ?? 'text'}
            placeholder={config.placeholder}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
      ))}
      <div className="space-y-2">
        {checkboxOptions.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              value={option.value}
              className="form-checkbox"
            />
            <span className="ml-2">{option.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```