// Import necessary modules from React and Next.js
import React from 'react';

// Define TypeScript interface for component props
interface CustomDialogProps {
  title: string;
  checkboxLabel: string;
  onOk: () => void; // Callback function for OK button
  onClear: () => void; // Callback function for Clear button
  onCancel: () => void; // Callback function for Cancel button
}

// Define the component and export it
const CustomDialog: React.FC<CustomDialogProps> = ({
  title,
  checkboxLabel,
  onOk,
  onClear,
  onCancel,
}) => {
  // Render the component
  return (
    <div className="w-80 bg-white border border-gray-300 shadow-lg p-4">
      {/* Dialog title */}
      <h2 className="text-lg font-bold border-b mb-4">{title}</h2>
      {/* Checkbox for the selectable item */}
      <div className="mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>{checkboxLabel}</span>
        </label>
      </div>
      {/* Action buttons */}
      <div className="flex justify-end space-x-2">
        <button
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CustomDialog;