```tsx
import React from 'react';

type SpecificCostInputProps = {
  title: string;
  fiscalYear: string;
  projectNumber: string;
  projectName: string;
  location: string;
  budget: number;
  taxAmount: number;
  onSave: () => void;
  onCancel: () => void;
};

const SpecificCostInput: React.FC<SpecificCostInputProps> = ({
  title,
  fiscalYear,
  projectNumber,
  projectName,
  location,
  budget,
  taxAmount,
  onSave,
  onCancel
}) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      {/* Header */}
      <h1 className="text-xl font-bold mb-4">{title}</h1>

      {/* Project Details */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">年度:</label>
        <input
          type="text"
          value={fiscalYear}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">工事番号:</label>
        <input
          type="text"
          value={projectNumber}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">工事名:</label>
        <input
          type="text"
          value={projectName}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">工事場所:</label>
        <input
          type="text"
          value={location}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      {/* Budget Details */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">予算額:</label>
        <input
          type="number"
          value={budget}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">税抜金額:</label>
        <input
          type="number"
          value={taxAmount}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          onClick={onSave}
        >
          確定
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default SpecificCostInput;
```