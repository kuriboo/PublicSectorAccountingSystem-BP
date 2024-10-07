// Import necessary libraries
import React from 'react';

// Define Prop Types for the component
type AttributeMasterProps = {
  year: string;
  categoryCode: string;
  categoryName: string;
  subcategoryCode: string;
  subcategoryName: string;
  onPreviousCategory: () => void;
  onNextCategory: () => void;
  onPreviousSubCategory: () => void;
  onNextSubCategory: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onDisplay: () => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Define the Functional Component
const AttributeMaster: React.FC<AttributeMasterProps> = ({
  year,
  categoryCode,
  categoryName,
  subcategoryCode,
  subcategoryName,
  onPreviousCategory,
  onNextCategory,
  onPreviousSubCategory,
  onNextSubCategory,
  onEdit,
  onDelete,
  onDisplay,
  onOk,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      {/* Year Selection */}
      <div className="mb-4">
        <label className="text-xl">年度: {year}</label>
      </div>
      
      {/* Category Code & Name */}
      <div className="flex mb-4">
        <input
          type="text"
          value={categoryCode}
          className="mr-2 p-1 border rounded"
          readOnly
        />
        <input
          type="text"
          value={categoryName}
          className="mr-2 p-1 border rounded"
          readOnly
        />
        <button onClick={onPreviousCategory} className="mr-2 px-4 py-1 bg-gray-200 rounded">
          前データ
        </button>
        <button onClick={onNextCategory} className="px-4 py-1 bg-gray-200 rounded">
          次データ
        </button>
      </div>
      
      {/* Subcategory Code & Name */}
      <div className="flex mb-4">
        <input
          type="text"
          value={subcategoryCode}
          className="mr-2 p-1 border rounded"
          readOnly
        />
        <input
          type="text"
          value={subcategoryName}
          className="mr-2 p-1 border rounded"
          readOnly
        />
        <button onClick={onPreviousSubCategory} className="mr-2 px-4 py-1 bg-gray-200 rounded">
          前データ
        </button>
        <button onClick={onNextSubCategory} className="px-4 py-1 bg-gray-200 rounded">
          次データ
        </button>
      </div>
      
      {/* Edit and Action Buttons */}
      <div className="flex items-center mb-4">
        <button onClick={onEdit} className="mr-2 px-4 py-1 bg-gray-300 rounded-lg">編集</button>
        <button onClick={onDelete} className="mr-2 px-4 py-1 bg-gray-300 rounded-lg">行削除</button>
        <button onClick={onDisplay} className="px-4 py-1 bg-gray-300 rounded-lg">表示</button>
      </div>
      
      {/* Footer Buttons */}
      <div className="flex justify-between">
        <button onClick={onOk} className="mr-2 px-4 py-1 bg-gray-400 rounded-lg">OK</button>
        <button onClick={onClear} className="mr-2 px-4 py-1 bg-gray-400 rounded-lg">クリア</button>
        <button onClick={onExit} className="px-4 py-1 bg-gray-400 rounded-lg">終了</button>
      </div>
    </div>
  );
};

export default AttributeMaster;
