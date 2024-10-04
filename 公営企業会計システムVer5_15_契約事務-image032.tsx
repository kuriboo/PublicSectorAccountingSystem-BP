```tsx
import React from 'react';

// Define types for props
type SelectionComponentProps = {
  year: string;
  receptionNumber: string;
  agencyName: string;
  businessType: string;
  onSearch: () => void;
  onClear: () => void;
  onClose: () => void;
};

// Reusable component
const SelectionComponent: React.FC<SelectionComponentProps> = ({
  year,
  receptionNumber,
  agencyName,
  businessType,
  onSearch,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">業者選定</h2>
      <div className="bg-white p-4 shadow rounded">
        {/* Form fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">年度:</label>
            <input
              type="text"
              value={year}
              className="mt-1 block w-full border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">受付番号:</label>
            <input
              type="text"
              value={receptionNumber}
              className="mt-1 block w-full border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">件名:</label>
            <input
              type="text"
              value={agencyName}
              className="mt-1 block w-full border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">業種:</label>
            <input
              type="text"
              value={businessType}
              className="mt-1 block w-full border border-gray-300 rounded"
            />
          </div>
        </div>
        {/* Action buttons */}
        <div className="flex space-x-4">
          <button
            onClick={onSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            選定結果
          </button>
          <button
            onClick={onClear}
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            クリア
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionComponent;
```