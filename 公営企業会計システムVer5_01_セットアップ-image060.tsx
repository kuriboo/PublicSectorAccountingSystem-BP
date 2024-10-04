```tsx
import React from 'react';

// TypeScript interface for the component props
interface InputFormProps {
  initialValue: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const InputForm: React.FC<InputFormProps> = ({ initialValue, onOk, onClear, onCancel }) => {
  const [value, setValue] = React.useState<number>(initialValue);

  // Function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">集計先番号</label>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full py-2 px-3"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onOk}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InputForm;
```