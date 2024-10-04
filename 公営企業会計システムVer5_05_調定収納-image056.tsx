```tsx
import React from 'react';

// TypeScript interface for component props
interface InputProps {
  section: string;
  subSection: string;
  detail: string;
  taxCategory: string;
  onSearch: () => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Functional React component using TypeScript and Tailwind CSS for styling
const AdjustmentInput: React.FC<InputProps> = ({
  section,
  subSection,
  detail,
  taxCategory,
  onSearch,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-blue-100 rounded shadow-lg">
      <h4 className="text-lg font-bold">調定入力修正積入力</h4>

      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          <label className="block font-semibold">節</label>
          <input
            type="text"
            value={section}
            readOnly
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">細節</label>
          <input
            type="text"
            value={subSection}
            readOnly
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        
        <div>
          <label className="block font-semibold">明細</label>
          <input
            type="text"
            value={detail}
            readOnly
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        
        {/* Search Button */}
        <button
          onClick={onSearch}
          className="mt-6 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          科目検索
        </button>
      </div>

      <div className="my-4">
        <p className="font-semibold">税区分</p>
        <p>{taxCategory}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={onOk}
          className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AdjustmentInput;
```