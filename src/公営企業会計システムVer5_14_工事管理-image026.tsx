// components/ConstructionForm.tsx
import React from 'react';

type ConstructionFormProps = {
  constructionNumber?: string;
  startDate?: string;
  endDate?: string;
  place?: string;
  projectName?: string;
  onRegisterClick?: () => void;
  onClearClick?: () => void;
  onCloseClick?: () => void;
};

const ConstructionForm: React.FC<ConstructionFormProps> = ({
  constructionNumber = '',
  startDate = '',
  endDate = '',
  place = '',
  projectName = '',
  onRegisterClick,
  onClearClick,
  onCloseClick
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">工事番号</label>
        <input
          type="text"
          value={constructionNumber}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">着手年月日</label>
        <input
          type="date"
          value={startDate}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">完了年月日</label>
        <input
          type="date"
          value={endDate}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">工事場所</label>
        <input
          type="text"
          value={place}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">工事名称</label>
        <input
          type="text"
          value={projectName}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onRegisterClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          登録
        </button>
        <button
          onClick={onClearClick}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onCloseClick}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ConstructionForm;
