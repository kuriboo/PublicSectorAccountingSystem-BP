// types.ts
export interface CheckboxListProps {
  options: { label: string; checked: boolean }[];
  onChange: (index: number, checked: boolean) => void;
  okAction: () => void;
  clearAction: () => void;
  cancelAction: () => void;
}

// CheckboxList.tsx
import React from 'react';
import { CheckboxListProps } from './types';

const CheckboxList: React.FC<CheckboxListProps> = ({
  options,
  onChange,
  okAction,
  clearAction,
  cancelAction
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
      <h3 className="text-blue-600 font-semibold mb-2">補てん財源表前回参照設定</h3>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={option.checked}
              onChange={(e) => onChange(index, e.target.checked)}
              className="mr-2"
            />
            <span>{option.label}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={okAction} className="bg-blue-500 text-white py-1 px-4 rounded">OK</button>
        <button onClick={clearAction} className="bg-gray-200 text-black py-1 px-4 rounded">クリア</button>
        <button onClick={cancelAction} className="bg-gray-200 text-black py-1 px-4 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default CheckboxList;

```tailwind.config.js
// Add Tailwind CSS configuration if needed
module.exports = {
  content: ['./**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [],
};
