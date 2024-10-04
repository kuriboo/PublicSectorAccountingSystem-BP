```tsx
// Import necessary modules from React and Next.js
import React from 'react';

// Define type for component properties
interface BusinessFormProps {
  name: string;
  abbreviation: string;
  businessType: 'Internal' | 'External';
  facilityType: string;
  isEnterprise: boolean;
  constructionReason: string;
  onSave: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Reusable functional component with TypeScript
const BusinessForm: React.FC<BusinessFormProps> = ({
  name,
  abbreviation,
  businessType,
  facilityType,
  isEnterprise,
  constructionReason,
  onSave,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white border rounded shadow-lg">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4">事業・施策・施策内訳マスタ</h1>
      
      {/* Form Section */}
      <div className="space-y-4">
        {/* Name and Abbreviation */}
        <div>
          <label className="block font-semibold">名称</label>
          <input
            type="text"
            value={name}
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>
        <div>
          <label className="block font-semibold">略名</label>
          <input
            type="text"
            value={abbreviation}
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>

        {/* Business Type */}
        <div>
          <label className="block font-semibold">事業内/外</label>
          <div>
            <input
              type="radio"
              checked={businessType === 'Internal'}
              readOnly
            />
            <span className="px-2">内</span>
            <input
              type="radio"
              checked={businessType === 'External'}
              readOnly
            />
            <span className="px-2">外</span>
          </div>
        </div>

        {/* Facility Type */}
        <div>
          <label className="block font-semibold">施設種別</label>
          <select
            value={facilityType}
            className="w-full p-2 border rounded"
            disabled
          >
            {/* Options would be dynamically generated in a real scenario */}
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </div>

        {/* Enterprise Recognition */}
        <div>
          <label className="block font-semibold">企業値対象</label>
          <div>
            <input type="checkbox" checked={isEnterprise} readOnly />
            <span className="px-2">対象</span>
          </div>
        </div>

        {/* Construction Reason */}
        <div>
          <label className="block font-semibold">施工理由</label>
          <input
            type="text"
            value={constructionReason}
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-4 space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onSave}>
          OK
        </button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded" onClick={onClear}>
          クリア
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
          終了
        </button>
      </div>
    </div>
  );
};

export default BusinessForm;
```