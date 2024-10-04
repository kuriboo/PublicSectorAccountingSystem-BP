```tsx
import React from 'react';

type Props = {
  title: string;
  dateLabel: string;
  dateValue: string;
  formTypeLabel: string;
  formTypes: { id: string; label: string }[];
  message: string;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const FixedAssetForm: React.FC<Props> = ({
  title,
  dateLabel,
  dateValue,
  formTypeLabel,
  formTypes,
  message,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-md mx-auto p-4 border bg-white rounded shadow">
      {/* Title */}
      <h1 className="text-lg font-bold text-center mb-4">{title}</h1>
      
      {/* Date Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">{dateLabel}</label>
        <input
          type="text"
          value={dateValue}
          readOnly
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      
      {/* Form Types (Radio Buttons) */}
      <div className="mb-4">
        <p className="block text-sm font-medium text-gray-600">{formTypeLabel}</p>
        {formTypes.map((formType) => (
          <label key={formType.id} className="inline-flex items-center">
            <input
              type="radio"
              name="formType"
              value={formType.id}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">{formType.label}</span>
          </label>
        ))}
      </div>
      
      {/* Message */}
      <p className="text-sm text-gray-500 mb-4">{message}</p>
      
      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onOk}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FixedAssetForm;
```