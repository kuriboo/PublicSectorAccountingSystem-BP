import React from 'react';

// TypeScript types for component props
interface CheckboxItem {
  label: string;
  checked: boolean;
}

interface CustomDialogProps {
  title: string;
  checkboxItems: CheckboxItem[];
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ 
  title, 
  checkboxItems, 
  onSubmit, 
  onClear, 
  onCancel 
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white w-80">
      {/* Dialog title */}
      <div className="text-lg font-bold mb-4">{title}</div>
      
      {/* Checkbox list */}
      <div className="mb-4">
        {checkboxItems.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={item.checked}
              className="mr-2"
              readOnly
            />
            <label>{item.label}</label>
          </div>
        ))}
      </div>
      
      {/* Action buttons */}
      <div className="flex justify-between space-x-2">
        <button 
          className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
          onClick={onSubmit}
        >
          OK
        </button>
        <button 
          className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CustomDialog;
