// Import necessary modules from Next.js and React
import React from 'react';

// Define the type for the component props
type PreparationComponentProps = {
  title: string; // Title of the component
  message: string; // Message to display
  onConfirm: () => void; // Function to call on OK button click
  onCancel: () => void; // Function to call on Cancel button click
};

// Define the PreparationComponent as a React functional component
const PreparationComponent: React.FC<PreparationComponentProps> = ({
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-200 p-4">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="p-4">
        <p>{message}</p>
        <div className="mt-4 flex space-x-2">
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            OK
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default PreparationComponent;
```