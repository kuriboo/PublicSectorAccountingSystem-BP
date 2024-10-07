import React from 'react';

// コンポーネントのプロパティの型定義
type FormComponentProps = {
  year: string;
  majorCategoryCode: string;
  majorCategoryName: string;
  middleCategoryCode: string;
  middleCategoryName: string;
  minorCategoryCode: string;
  minorCategoryName: string;
  onSave: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  year,
  majorCategoryCode,
  majorCategoryName,
  middleCategoryCode,
  middleCategoryName,
  minorCategoryCode,
  minorCategoryName,
  onSave,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-white border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">単価性質小分類設定</h2>
      <div className="flex justify-between items-center mb-2">
        <label className="pr-2 cursor-pointer">
          <input type="radio" name="action" value="register" className="mr-1" />
          登録
        </label>
        <label className="pr-2 cursor-pointer">
          <input
            type="radio"
            name="action"
            value="edit"
            className="mr-1"
            defaultChecked
          />
          訂正
        </label>
      </div>
      <div className="mb-4">
        <div>年度: {year}</div>
        <div>コード 大分類: {majorCategoryCode} 名称: {majorCategoryName}</div>
        <div>コード 中分類: {middleCategoryCode} 名称: {middleCategoryName}</div>
      </div>
      <div className="border-t border-b py-2 mb-4">
        <strong>小分類 </strong>
        <input
          type="text"
          value={minorCategoryCode}
          readOnly
          className="border p-1 mx-2 rounded"
        />
        <input
          type="text"
          value={minorCategoryName}
          readOnly
          className="border p-1 rounded w-full"
        />
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button
          className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
          onClick={onSave}
        >
          OK
        </button>
        <button
          className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
