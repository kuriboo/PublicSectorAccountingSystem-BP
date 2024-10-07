import React from 'react';

// Props interface for the component
interface PrintOptionsProps {
  items: { label: string; checked: boolean }[];
  reprintOptions: { label: string; value: string }[];
  changeOptions: { label: string; value: string }[];
  correctionOptions: { label: string; value: string }[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Functional component using Tailwind CSS for styling
const PrintOptions: React.FC<PrintOptionsProps> = ({
  items,
  reprintOptions,
  changeOptions,
  correctionOptions,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-2">印刷対象帳票名</h2>
      <ul className="mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={item.checked}
              className="mr-2"
            />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      
      <div className="mb-4">
        <label className="block font-bold mb-1">再発行印字</label>
        {reprintOptions.map((option, index) => (
          <label key={index} className="mr-4">
            <input
              type="radio"
              name="reprint"
              value={option.value}
              className="mr-1"
            />
            {option.label}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">変更回数指定</label>
        {changeOptions.map((option, index) => (
          <label key={index} className="mr-4">
            <input
              type="radio"
              name="change"
              value={option.value}
              className="mr-1"
            />
            {option.label}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">訂正回数指定</label>
        {correctionOptions.map((option, index) => (
          <label key={index} className="mr-4">
            <input
              type="radio"
              name="correction"
              value={option.value}
              className="mr-1"
            />
            {option.label}
          </label>
        ))}
      </div>

      <div className="flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onOk}
        >OK</button>
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onClear}
        >クリア</button>
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onCancel}
        >キャンセル</button>
      </div>
    </div>
  );
};

export default PrintOptions;
```