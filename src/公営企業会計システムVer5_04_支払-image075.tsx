import React from 'react';

// プロパティの型定義
type CheckboxOption = {
  id: string;
  label: string;
  checked: boolean;
};

type Props = {
  options: CheckboxOption[];
  onChange: (id: string, checked: boolean) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const CheckboxForm: React.FC<Props> = ({ options, onChange, onOk, onClear, onCancel }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md w-72 bg-white">
      <h2 className="text-lg font-bold mb-4">印刷対象帳票名</h2>
      <ul>
        {options.map((option) => (
          <li key={option.id} className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={option.checked}
                onChange={(e) => onChange(option.id, e.target.checked)}
                className="mr-2"
              />
              {option.label}
            </label>
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-4">
        <button 
          onClick={onOk} 
          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CheckboxForm;
```