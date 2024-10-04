```tsx
// Import necessary libraries
import React from 'react';

// Define the types for the component props
type CustomComponentProps = {
  title: string;
  codeLabel: string;
  codeValue: string;
  radioOptions: string[];
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Define the functional component
const CustomForm: React.FC<CustomComponentProps> = ({
  title,
  codeLabel,
  codeValue,
  radioOptions,
  onSubmit,
  onClear,
  onExit,
}) => {
  // Render the component
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-lg">
      <h1 className="text-xl font-bold text-center mb-4">{title}</h1>
      <div className="flex justify-center mb-2">
        <label className="mr-2">{codeLabel}</label>
        <input type="text" defaultValue={codeValue} className="border rounded-md p-1" readOnly />
      </div>
      <div className="flex justify-center mb-4">
        {radioOptions.map((option, index) => (
          <label key={index} className="mr-4">
            <input type="radio" name="options" className="mr-1" />
            {option}
          </label>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md">
          終了
        </button>
      </div>
    </div>
  );
};

export default CustomForm;
```