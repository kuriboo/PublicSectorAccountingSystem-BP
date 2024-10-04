```tsx
import React from 'react';

// TypeScript interface for component props
interface FormProps {
  code: string;
  name: string;
  abbreviation: string;
  onCodeChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onAbbreviationChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
}

const FormComponent: React.FC<FormProps> = ({
  code,
  name,
  abbreviation,
  onCodeChange,
  onNameChange,
  onAbbreviationChange,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="m-4 p-4 border rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">指定工事店マスタ</h1>
        
      {/* Form fields */}
      <div className="mb-4">
        <label className="font-semibold">指定工事店コード</label>
        <input
          type="text"
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          className="border-b block w-full mt-1 p-1"
        />
      </div>

      <div className="mb-4">
        <label className="font-semibold">名称</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="border-b block w-full mt-1 p-1"
        />
      </div>

      <div className="mb-6">
        <label className="font-semibold">略名</label>
        <input
          type="text"
          value={abbreviation}
          onChange={(e) => onAbbreviationChange(e.target.value)}
          className="border-b block w-full mt-1 p-1"
        />
      </div>

      {/* Action buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onEnd}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```