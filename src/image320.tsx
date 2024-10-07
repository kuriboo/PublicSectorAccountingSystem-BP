import React from 'react';

// Props type definition for the component
interface CustomButtonsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onProcessChange?: (value: string) => void;
  processOption?: string;
}

// CustomButtons component
const CustomButtons: React.FC<CustomButtonsProps> = ({
  onEdit,
  onDelete,
  onProcessChange,
  processOption = 'option1',
}) => {
  return (
    <div className="flex space-x-2 p-4">
      {/* Edit button */}
      <button
        className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
        onClick={onEdit}
      >
        明細編集
      </button>
      
      {/* Delete button */}
      <button
        className="bg-red-200 hover:bg-red-300 text-black font-bold py-2 px-4 rounded"
        onClick={onDelete}
      >
        行削除
      </button>

      {/* Radio buttons for process selection */}
      <div className="flex items-center">
        <label className="mr-2">端数処理</label>
        <label className="mr-2">
          <input
            type="radio"
            name="processOption"
            value="option1"
            checked={processOption === 'option1'}
            onChange={() => onProcessChange && onProcessChange('option1')}
          />
          粗率毎
        </label>
        <label>
          <input
            type="radio"
            name="processOption"
            value="option2"
            checked={processOption === 'option2'}
            onChange={() => onProcessChange && onProcessChange('option2')}
          />
          明細毎
        </label>
      </div>
    </div>
  );
};

export default CustomButtons;
```