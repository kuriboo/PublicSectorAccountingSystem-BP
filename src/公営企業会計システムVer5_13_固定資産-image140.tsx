import React from 'react';

// 定義可能なプロパティの型
interface FormProps {
  category: string;
  subCategory1: string;
  subCategory2: string;
  years: string;
  searchText: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// レスポンシブに対応したスタイルを設定
const FormComponent: React.FC<FormProps> = ({
  category,
  subCategory1,
  subCategory2,
  years,
  searchText,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="max-w-lg w-full mx-auto bg-white p-6 shadow-md rounded-lg">
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">種類</label>
          <input
            type="text"
            value={category}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">分類1</label>
          <input
            type="text"
            value={subCategory1}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">分類2</label>
          <input
            type="text"
            value={subCategory2}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">耐用年数</label>
          <input
            type="text"
            value={years}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">検索文字列</label>
          <input
            type="text"
            value={searchText}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onOk}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            OK
          </button>
          <button
            type="button"
            onClick={onClear}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            クリア
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            キャンセル
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
