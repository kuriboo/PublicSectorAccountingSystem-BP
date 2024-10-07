import React from 'react';

// Type definition for the properties
type ClassificationFormProps = {
  year: number;
  largeCategoryCode: string;
  largeCategoryName: string;
  middleCategoryCode: string;
  middleCategoryName: string;
  smallCategoryCode: string;
  smallCategoryName: string;
  onSubmit: () => void;
};

const ClassificationForm: React.FC<ClassificationFormProps> = ({
  year,
  largeCategoryCode,
  largeCategoryName,
  middleCategoryCode,
  middleCategoryName,
  smallCategoryCode,
  smallCategoryName,
  onSubmit,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="mb-4 text-center">
        <span className="text-blue-800 font-bold">単価性質小分類設定</span>
      </div>
      
      <div className="flex justify-center mb-4">
        <label className="mr-4">
          <input type="radio" name="mode" value="register" /> 登録
        </label>
        <label>
          <input type="radio" name="mode" value="edit" defaultChecked /> 訂正
        </label>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between">
          <span>年度</span>
          <span>{`平成${year}`}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-800">大分類</span>
          <div>{largeCategoryCode} {largeCategoryName}</div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-800">中分類</span>
          <div>{middleCategoryCode} {middleCategoryName}</div>
        </div>
      </div>

      <div className="border border-gray-300 p-2 mb-4">
        <div className="flex justify-between">
          <span className="font-bold text-blue-800">小分類</span>
          <div>{smallCategoryCode} {smallCategoryName}</div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <button className="bg-gray-200 px-4 py-2">前データ</button>
        <button className="bg-gray-200 px-4 py-2">次データ</button>
      </div>

      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-gray-200 px-4 py-2" onClick={onSubmit}>OK</button>
        <button className="bg-gray-200 px-4 py-2">クリア</button>
        <button className="bg-gray-200 px-4 py-2">キャンセル</button>
      </div>
    </div>
  );
};

export default ClassificationForm;
