import React from 'react';

type Props = {
  value: number;
  onChange: (value: number) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ExampleComponent: React.FC<Props> = ({ value, onChange, onOk, onClear, onCancel }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white border rounded-md shadow-md">
      <h2 className="mb-4 text-lg font-semibold text-blue-700">集計先番号</h2>
      <div className="mb-4">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-16 p-2 text-center border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onOk}
          className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ExampleComponent;