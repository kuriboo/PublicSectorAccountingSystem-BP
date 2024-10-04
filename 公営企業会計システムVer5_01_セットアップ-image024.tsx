```tsx
// Import necessary libraries
import { FC } from 'react';

// Define the types for the component props
interface FormProps {
  title: string;
  registerButtonText: string;
  data: {
    content: string;
    summary1: string;
    summary2: string;
    counterparty: string;
  };
  onRegister: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Create the component
const RecordForm: FC<FormProps> = ({
  title,
  registerButtonText,
  data,
  onRegister,
  onClear,
  onClose,
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* Form fields */}
      <div className="space-y-2">
        <div>
          <label className="block text-sm font-medium">内容</label>
          <input
            type="text"
            value={data.content}
            readOnly
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">摘要(1)</label>
          <input
            type="text"
            value={data.summary1}
            readOnly
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">摘要(2)</label>
          <input
            type="text"
            value={data.summary2}
            readOnly
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">相手先</label>
          <input
            type="text"
            value={data.counterparty}
            readOnly
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 space-x-2">
        <button
          onClick={onRegister}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {registerButtonText}
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default RecordForm;
```