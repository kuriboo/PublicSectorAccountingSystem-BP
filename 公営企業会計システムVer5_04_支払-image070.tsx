```tsx
import React from 'react';

// Propsの型定義
interface CheckboxFormProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

// チェックボックスフォームコンポーネント
const CheckboxForm: React.FC<CheckboxFormProps> = ({ options, selectedOptions, onChange }) => {

  // チェックボックスの状態変更ハンドラー
  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter(item => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md space-y-2 bg-white">
      <h2 className="text-lg font-bold">印刷対象帳票名</h2>
      <div className="ml-4">
        {options.map(option => (
          <div key={option} className="flex items-center">
            <input 
              type="checkbox" 
              checked={selectedOptions.includes(option)} 
              onChange={() => handleCheckboxChange(option)}
              className="mr-2"
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">OK</button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">クリア</button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">キャンセル</button>
      </div>
    </div>
  );
};

export default CheckboxForm;
```