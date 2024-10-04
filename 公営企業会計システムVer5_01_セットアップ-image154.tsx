// IncomeCategoryForm.tsx
import React from 'react';

// TypeScript interface for component props
interface IncomeCategoryFormProps {
  year: string;
  mainCategoryCode: string;
  mainCategoryName: string;
  subCategoryCode: string;
  subCategoryName: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const IncomeCategoryForm: React.FC<IncomeCategoryFormProps> = ({
  year,
  mainCategoryCode,
  mainCategoryName,
  subCategoryCode,
  subCategoryName,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded shadow-lg bg-white">
      {/* Year and Category Codes */}
      <div className="mb-4">
        <h2 className="text-lg">{year}年度</h2>
        <div className="flex justify-between">
          <div>
            <label className="block font-medium">コード</label>
            <input
              className="border p-1 mt-1"
              type="text"
              value={mainCategoryCode}
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">名称</label>
            <input
              className="border p-1 mt-1"
              type="text"
              value={mainCategoryName}
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Sub Category Details */}
      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <label className="block font-medium">小分類</label>
            <input
              className="border p-1 mt-1"
              type="text"
              value={subCategoryCode}
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium">名称</label>
            <input
              className="border p-1 mt-1"
              type="text"
              value={subCategoryName}
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default IncomeCategoryForm;