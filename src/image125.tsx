import React from 'react';

// 型定義
interface PropertyMasterProps {
  year: number;
  majorCategories: Array<{ code: string; name: string }>;
  minorCategories: Array<{ code: string; name: string }>;
  onNextDataClick: () => void;
  onPrevDataClick: () => void;
  onDetailsEditClick: () => void;
  onDeleteActionClick: () => void;
}

// コンポーネント定義
const PropertyMaster: React.FC<PropertyMasterProps> = ({
  year,
  majorCategories,
  minorCategories,
  onNextDataClick,
  onPrevDataClick,
  onDetailsEditClick,
  onDeleteActionClick,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">単価性質マスタ</h2>
      <div className="mb-4">
        <span className="mr-2">年 度: {year}</span>
      </div>
      <div className="mb-4">
        {/* 大分類リスト */}
        {majorCategories.map((category, index) => (
          <div key={index} className="flex items-center mb-2">
            <button className="bg-blue-500 text-white py-1 px-4 rounded mr-2">{category.name}</button>
            <span className="bg-teal-200 py-1 px-3 rounded">{category.code}</span>
            <button onClick={onPrevDataClick} className="bg-gray-400 text-white ml-2 py-1 px-3 rounded">
              前データ
            </button>
            <button onClick={onNextDataClick} className="bg-gray-400 text-white ml-2 py-1 px-3 rounded">
              次データ
            </button>
          </div>
        ))}
      </div>
      <div className="mb-4">
        {/* 中分類リスト */}
        {minorCategories.map((subcategory, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="bg-teal-200 py-1 px-3 rounded mr-2">{subcategory.code}</span>
            <span>{subcategory.name}</span>
            <button onClick={onDetailsEditClick} className="bg-gray-400 text-white ml-2 py-1 px-3 rounded">
              明細編集
            </button>
            <button onClick={onDeleteActionClick} className="bg-gray-400 text-white ml-2 py-1 px-3 rounded">
              行削除
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-gray-400 text-white py-1 px-4 rounded mx-2">OK</button>
        <button className="bg-gray-400 text-white py-1 px-4 rounded mx-2">クリア</button>
        <button className="bg-gray-400 text-white py-1 px-4 rounded mx-2">終了</button>
      </div>
    </div>
  );
};

export default PropertyMaster;
