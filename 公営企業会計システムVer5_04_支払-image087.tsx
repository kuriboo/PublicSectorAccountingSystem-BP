```tsx
import React from 'react';

// Props type definition
type CommandFormProps = {
  title: string;
  checkboxLabel: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const CommandForm: React.FC<CommandFormProps> = ({ title, checkboxLabel, onOk, onClear, onCancel }) => {
  const [checked, setChecked] = React.useState<boolean>(true);

  // Handle checkbox toggle
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="p-4 border border-gray-300 w-80">
      <h1 className="text-lg font-bold mb-2">{title}</h1>
      <div className="border border-gray-400 p-4 mb-4">
        <label className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            checked={checked} 
            onChange={handleCheckboxChange} 
            className="w-4 h-4"
          />
          <span>{checkboxLabel}</span>
        </label>
      </div>
      <div className="flex justify-between">
        <button 
          onClick={onOk} 
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CommandForm;
```