import React from 'react';

// TypeScriptの型定義
type DocumentSelectorProps = {
  options: { label: string; value: string; checked: boolean }[];
  onChange: (selected: string[]) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const DocumentSelector: React.FC<DocumentSelectorProps> = ({ options, onChange, onOk, onClear, onCancel }) => {
  // チェックボックスが選択されたときの処理
  const handleCheckboxChange = (value: string) => {
    const updatedOptions = options.map(option =>
      option.value === value ? { ...option, checked: !option.checked } : option
    );
    onChange(updatedOptions.filter(option => option.checked).map(option => option.value));
  };

  return (
    <div className="border-2 border-gray-300 p-4">
      <h2 className="font-bold mb-2">印刷対象帳票名</h2>
      <div className="space-y-2">
        {options.map(option => (
          <div key={option.value}>
            <input
              type="checkbox"
              checked={option.checked}
              onChange={() => handleCheckboxChange(option.value)}
              id={option.value}
            />
            <label htmlFor={option.value} className="ml-2">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onOk}>
          OK
        </button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded" onClick={onClear}>
          クリア
        </button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded" onClick={onCancel}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DocumentSelector;
```