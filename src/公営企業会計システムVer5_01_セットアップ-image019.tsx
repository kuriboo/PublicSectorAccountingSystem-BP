// Import necessary modules
import React from 'react';

// Define TypeScript types for the component props
interface FormField {
  label: string;
  value: string | number;
  onChange: (newValue: string | number) => void;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
}

interface FormProps {
  fields: FormField[];
  buttons: ButtonProps[];
}

// Define a reusable form component using TypeScript and Tailwind CSS
const CustomForm: React.FC<FormProps> = ({ fields, buttons }) => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <form className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="flex items-center space-x-2">
            <label className="text-gray-700 font-semibold">{field.label}</label>
            <input
              type="text"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              className="border border-gray-300 rounded p-1 flex-1"
            />
          </div>
        ))}
        <div className="flex space-x-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              type="button"
              onClick={button.onClick}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {button.label}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

// Export the component for use in other files
export default CustomForm;

// Usage example (would be in a different file):
/*
<CustomForm
  fields={[
    { label: '仕訳家', value: '052', onChange: console.log },
    { label: '仕訳項', value: '20', onChange: console.log },
    // Add other fields as needed
  ]}
  buttons={[
    { label: 'OK', onClick: () => console.log('OK clicked') },
    { label: 'キャンセル', onClick: () => console.log('キャンセル clicked') },
  ]}
/>
*/
