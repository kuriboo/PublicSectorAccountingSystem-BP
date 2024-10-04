```tsx
// Import necessary libraries
import React from 'react';

// Define the type for props
type ClassificationSearchProps = {
  largeCategoryCode: string;
  largeCategoryName: string;
  mediumCategoryCode: string;
  mediumCategoryName: string;
  smallCategoryCode: string;
  smallCategoryName: string;
  onDisplayClick: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// Define a reusable functional component
const ClassificationSearch: React.FC<ClassificationSearchProps> = ({
  largeCategoryCode,
  largeCategoryName,
  mediumCategoryCode,
  mediumCategoryName,
  smallCategoryCode,
  smallCategoryName,
  onDisplayClick,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-blue-900 p-4 rounded-lg shadow-lg">
      <div className="bg-white p-4 rounded-lg space-y-4">
        <div className="flex items-center space-x-4">
          <div>
            <label>所属大分類</label>
            <input
              type="text"
              value={largeCategoryCode}
              className="border p-1"
              disabled
            />
            <input
              type="text"
              value={largeCategoryName}
              className="border p-1"
              disabled
            />
          </div>
          <div>
            <input type="radio" name="level" value="large" />
            <label>大分類レベル</label>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <label>所属中分類</label>
            <input
              type="text"
              value={mediumCategoryCode}
              className="border p-1"
              disabled
            />
            <input
              type="text"
              value={mediumCategoryName}
              className="border p-1"
              disabled
            />
          </div>
          <div>
            <input type="radio" name="level" value="medium" />
            <label>中分類レベル</label>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <label>所属小分類</label>
            <input
              type="text"
              value={smallCategoryCode}
              className="border p-1"
              disabled
            />
            <input
              type="text"
              value={smallCategoryName}
              className="border p-1"
              disabled
            />
          </div>
          <div>
            <input type="radio" name="level" value="small" checked />
            <label>小分類レベル</label>
            <button
              className="ml-4 p-1 bg-gray-200 rounded"
              onClick={onDisplayClick}
            >
              表示
            </button>
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={onSubmit}
          >
            確定
          </button>
          <button
            className="bg-gray-300 p-2 rounded"
            onClick={onDisplayClick}
          >
            OK
          </button>
          <button
            className="bg-gray-300 p-2 rounded"
            onClick={onClear}
          >
            クリア
          </button>
          <button
            className="bg-gray-300 p-2 rounded"
            onClick={onCancel}
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassificationSearch;
```