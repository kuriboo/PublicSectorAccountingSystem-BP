import React from 'react';

type Props = {
  majorCategoryCode?: string;
  majorCategoryName?: string;
  middleCategoryCode?: string;
  middleCategoryName?: string;
  minorCategoryCode?: string;
  minorCategoryName?: string;
  categoryName?: string;
  onDisplayClick?: () => void;
  onConfirmClick?: () => void;
  onClearClick?: () => void;
  onCancelClick?: () => void;
};

const CategorySearch: React.FC<Props> = ({
  majorCategoryCode = '',
  majorCategoryName = '',
  middleCategoryCode = '',
  middleCategoryName = '',
  minorCategoryCode = '',
  minorCategoryName = '',
  categoryName = '',
  onDisplayClick,
  onConfirmClick,
  onClearClick,
  onCancelClick,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <label className="mr-2">所属大分類</label>
        <input
          type="text"
          value={majorCategoryCode}
          className="border p-2 mr-2"
          readOnly
        />
        <input
          type="text"
          value={majorCategoryName}
          className="border p-2 mr-4 flex-grow"
          readOnly
        />
        <input type="radio" name="categoryLevel" className="mr-1" />
        <label className="mr-4">大分類レベル</label>
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-2">所属中分類</label>
        <input
          type="text"
          value={middleCategoryCode}
          className="border p-2 mr-2"
          readOnly
        />
        <input
          type="text"
          value={middleCategoryName}
          className="border p-2 mr-4 flex-grow"
          readOnly
        />
        <input type="radio" name="categoryLevel" className="mr-1" />
        <label className="mr-4">中分類レベル</label>
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-2">所属小分類</label>
        <input
          type="text"
          value={minorCategoryCode}
          className="border p-2 mr-2"
          readOnly
        />
        <input
          type="text"
          value={minorCategoryName}
          className="border p-2 mr-4 flex-grow"
          readOnly
        />
        <input type="radio" name="categoryLevel" className="mr-1" />
        <label className="mr-4">小分類レベル</label>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={onDisplayClick}
        >
          表示
        </button>
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2">分類名称</label>
        <input
          type="text"
          value={categoryName}
          className="border p-2 flex-grow"
          readOnly
        />
      </div>
      <div className="flex justify-evenly">
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={onConfirmClick}
        >
          確定
        </button>
        <button
          className="bg-gray-500 text-white p-2 rounded"
          onClick={onClearClick}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={onCancelClick}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CategorySearch;
