import React from 'react';

// Propsの型定義
type InputLabelProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

// コンポーネント定義
const InputLabel: React.FC<InputLabelProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center space-x-2 p-1 border border-gray-300 rounded bg-white">
      {/* ラベル表示 */}
      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gray-200 rounded text-black font-bold text-sm">
        {label}
      </span>
      {/* インプットエリア */}
      <input
        type="text"
        className="flex-grow p-1 border-none outline-none text-black"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputLabel;
```