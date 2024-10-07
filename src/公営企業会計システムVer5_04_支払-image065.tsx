import React from 'react';

// 型定義
interface PrintOptionsProps {
  options: { label: string; checked: boolean }[];
  onOptionChange: (index: number) => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onCancelClick: () => void;
}

const PrintOptions: React.FC<PrintOptionsProps> = ({
  options,
  onOptionChange,
  onOkClick,
  onClearClick,
  onCancelClick,
}) => {
  return (
    <div className="p-4 bg-white border rounded shadow-md w-80">
      <h2 className="text-lg font-bold mb-4">印刷対象帳票名</h2>
      <div className="mb-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={option.checked}
              onChange={() => onOptionChange(index)}
              className="mr-2"
            />
            <label>{option.label}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button onClick={onOkClick} className="bg-blue-500 text-white py-1 px-4 rounded">
          OK
        </button>
        <button onClick={onClearClick} className="bg-gray-500 text-white py-1 px-4 rounded">
          クリア
        </button>
        <button onClick={onCancelClick} className="bg-gray-500 text-white py-1 px-4 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintOptions;
