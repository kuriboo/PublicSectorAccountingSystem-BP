```tsx
// Import necessary modules and types
import React from 'react';

// Define the prop types
type DocumentFormProps = {
  date: string;
  storageLocationMin: number;
  storageLocationMax: number;
  projectLocationMin: number;
  projectLocationMax: number;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

// DocumentForm component
const DocumentForm: React.FC<DocumentFormProps> = ({
  date,
  storageLocationMin,
  storageLocationMax,
  projectLocationMin,
  projectLocationMax,
  onConfirm,
  onClear,
  onClose
}) => {
  return (
    <div className="p-8 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">出庫予定明細書作成</h2>
      <div className="border p-4 bg-white rounded-md">
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-2">作表年月日</label>
            <input
              type="text"
              value={date}
              readOnly
              className="border p-2 w-full"
            />
          </div>
          
          <div className="mb-4">
            <label className="block font-bold mb-2">保管場所</label>
            <div className="flex space-x-4">
              <input
                type="number"
                value={storageLocationMin}
                className="border p-2 w-full"
              />
              <span>～</span>
              <input
                type="number"
                value={storageLocationMax}
                className="border p-2 w-full"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block font-bold mb-2">工事名場所</label>
            <div className="flex space-x-4">
              <input
                type="number"
                value={projectLocationMin}
                className="border p-2 w-full"
              />
              <span>～</span>
              <input
                type="number"
                value={projectLocationMax}
                className="border p-2 w-full"
              />
            </div>
          </div>
          
          <div className="mb-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm">
              工事名称場所を文字のみで入力した場合も印字
            </label>
          </div>
          
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onConfirm}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              OK
            </button>
            <button
              type="button"
              onClick={onClear}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              クリア
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              終了
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentForm;
```