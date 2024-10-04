```tsx
import React from 'react';

// Propsの型定義
type StorageFormProps = {
  storageLocation?: string;
  itemNumber?: string;
  reportingMonth?: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

// コンポーネント定義
const StorageForm: React.FC<StorageFormProps> = ({
  storageLocation = '000000',
  itemNumber = '000000000',
  reportingMonth = '平成29年06月',
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="mb-6 text-lg font-bold text-purple-700">
        貯蔵品月次集計表作成
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-inner">
        <div className="mb-4">
          <label className="block font-medium text-gray-700">
            決裁区分
          </label>
          <div className="mt-2 flex space-x-4">
            <span className="block bg-gray-300 p-2 rounded-md">保管場所</span>
            <input
              type="text"
              defaultValue={storageLocation}
              className="border border-gray-300 rounded-md p-2 w-32"
            />
            <span className="block bg-gray-300 p-2 rounded-md">~</span>
            <input
              type="text"
              defaultValue="999999"
              className="border border-gray-300 rounded-md p-2 w-32"
            />
          </div>
          <div className="mt-2 flex space-x-4">
            <span className="block bg-gray-300 p-2 rounded-md">品番</span>
            <input
              type="text"
              defaultValue={itemNumber}
              className="border border-gray-300 rounded-md p-2 w-32"
            />
            <span className="block bg-gray-300 p-2 rounded-md">~</span>
            <input
              type="text"
              defaultValue="999999999"
              className="border border-gray-300 rounded-md p-2 w-32"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">作表月</label>
          <input
            type="text"
            defaultValue={reportingMonth}
            className="border border-gray-300 rounded-md p-2 w-40"
          />
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        <button
          className="bg-purple-700 text-white py-2 px-4 rounded-md"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-md"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-md"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default StorageForm;
```