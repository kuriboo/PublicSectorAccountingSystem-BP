import React from 'react';

// Prop types
interface CollectionInputProps {
  value: string;
  onChange: (value: string) => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Reusable Component
const CollectionInput: React.FC<CollectionInputProps> = ({
  value,
  onChange,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="w-80 bg-gray-200 p-4 rounded-lg border border-gray-300 shadow-md">
      <div className="text-lg mb-2">集計先番号</div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="flex justify-around">
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
          onClick={onClose}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CollectionInput;