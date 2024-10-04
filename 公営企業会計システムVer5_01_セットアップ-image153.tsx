```tsx
// Import necessary modules and types
import React from 'react';

// Define props type
type CategoryMasterProps = {
  year: string;
  mainCategory: string;
  subCategory: string;
  code: string;
  departmentName: string;
  abbreviation: string;
  onMainPrev: () => void;
  onMainNext: () => void;
  onSubPrev: () => void;
  onSubNext: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onShow: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const CategoryMaster: React.FC<CategoryMasterProps> = ({
  year,
  mainCategory,
  subCategory,
  code,
  departmentName,
  abbreviation,
  onMainPrev,
  onMainNext,
  onSubPrev,
  onSubNext,
  onEdit,
  onDelete,
  onShow,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg space-y-4">
      {/* Header */}
      <div className="bg-blue-100 p-2 rounded">
        <h1 className="text-xl font-bold">所属マスタ</h1>
      </div>

      {/* Year selection */}
      <div className="flex items-center space-x-4">
        <span>年度</span>
        <span className="bg-gray-100 p-2 rounded">{year}</span>
      </div>

      {/* Main category input */}
      <div className="flex items-center space-x-2">
        <label>大分類</label>
        <input
          type="text"
          value={mainCategory}
          readOnly
          className="border p-2 rounded flex-grow"
        />
        <button onClick={onMainPrev} className="px-2 py-1 border rounded">
          前データ
        </button>
        <button onClick={onMainNext} className="px-2 py-1 border rounded">
          次データ
        </button>
      </div>

      {/* Subcategory input */}
      <div className="flex items-center space-x-2">
        <label>中分類</label>
        <input
          type="text"
          value={subCategory}
          readOnly
          className="border p-2 rounded flex-grow"
        />
        <button onClick={onSubPrev} className="px-2 py-1 border rounded">
          前データ
        </button>
        <button onClick={onSubNext} className="px-2 py-1 border rounded">
          次データ
        </button>
      </div>

      {/* Edit and Delete buttons */}
      <div className="flex space-x-2">
        <button onClick={onEdit} className="px-4 py-1 bg-gray-200 rounded">
          編集
        </button>
        <button onClick={onDelete} className="px-4 py-1 bg-gray-200 rounded">
          行削除
        </button>
      </div>

      {/* Department table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-200">
            <th>コード</th>
            <th>名称</th>
            <th>略名</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>{code}</td>
            <td>{departmentName}</td>
            <td>{abbreviation}</td>
          </tr>
        </tbody>
      </table>

      {/* Show button */}
      <button onClick={onShow} className="px-4 py-1 bg-gray-200 rounded">
        表示
      </button>

      {/* Footer buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="px-4 py-1 bg-gray-200 rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-1 bg-gray-200 rounded">
          クリア
        </button>
        <button onClick={onExit} className="px-4 py-1 bg-gray-200 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default CategoryMaster;
```