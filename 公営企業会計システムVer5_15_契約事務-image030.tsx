```tsx
// Import necessary packages
import React from 'react';

type ManagementSectionProps = {
  typeLabel: string;
  nameLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClear: () => void;
};

const ManagementSection: React.FC<ManagementSectionProps> = ({
  typeLabel,
  nameLabel,
  onConfirm,
  onCancel,
  onClear,
}) => {
  return (
    <div className="p-4 bg-white border rounded-md shadow-md">
      {/* Form Section */}
      <div className="flex flex-col mb-4">
        <label className="mb-2 font-semibold">{typeLabel}</label>
        <select className="mb-4 p-2 bg-blue-100 border rounded">
          {/* Options would be added here */}
        </select>
        <label className="mb-2 font-semibold">{nameLabel}</label>
        <input type="text" className="p-2 border rounded" />
      </div>
      
      {/* Button Section */}
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded shadow"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded shadow"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded shadow"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ManagementSection;
```