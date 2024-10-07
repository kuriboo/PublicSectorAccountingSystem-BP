import React from 'react';

type InputGroupProps = {
  labels: string[]; // Labels for each input field
  values: string[]; // Values for each input field
  onChange: (index: number, value: string) => void; // Handler for input change
};

const InputGroup: React.FC<InputGroupProps> = ({ labels, values, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      {labels.map((label, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Label */}
          <span className="text-xs font-bold text-blue-900">{label}</span>
          {/* Input Field */}
          <input
            type="text"
            value={values[index]}
            onChange={(e) => onChange(index, e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-center w-16"
          />
        </div>
      ))}
    </div>
  );
};

export default InputGroup;

// Usage example (not part of the component, just an example)
// <InputGroup
//   labels={["款", "項", "目", "節", "細節", "明細"]}
//   values={["002", "01", "01", "13", "0001", "0001"]}
//   onChange={(index, value) => console.log(`Index: ${index}, Value: ${value}`)}
// />