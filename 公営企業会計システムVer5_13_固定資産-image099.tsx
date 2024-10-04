```tsx
import React from 'react';

type ConversionFormProps = {
  sourceCode: string;
  sourceDepartment: string;
  targetCode: string;
  targetDepartment: string;
  onSourceChange: (value: string) => void;
  onTargetChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ConversionForm: React.FC<ConversionFormProps> = ({
  sourceCode,
  sourceDepartment,
  targetCode,
  targetDepartment,
  onSourceChange,
  onTargetChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* Title */}
      <h2 className="text-lg font-bold mb-4">所属／部門コード一括変換</h2>

      {/* Code Selection */}
      <div className="mb-4">
        <label className="block">
          <input type="radio" name="target" value="department" className="mr-2" defaultChecked />部門
        </label>
        <label className="block">
          <input type="radio" name="target" value="division" className="mr-2" />所属
        </label>
      </div>

      {/* Conversion Fields */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="flex-grow">変換前:</span>
          <input
            type="text"
            value={sourceCode}
            onChange={(e) => onSourceChange(e.target.value)}
            className="ml-2 p-1 border rounded"
          />
          <span className="ml-2">{sourceDepartment}</span>
        </div>

        <div className="text-center mb-2">↓</div>

        <div className="flex items-center mb-2">
          <span className="flex-grow">変換後:</span>
          <input
            type="text"
            value={targetCode}
            onChange={(e) => onTargetChange(e.target.value)}
            className="ml-2 p-1 border rounded"
          />
          <span className="ml-2">{targetDepartment}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default ConversionForm;
```