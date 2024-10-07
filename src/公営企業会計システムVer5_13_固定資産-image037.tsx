import React from 'react';

// Type definitions for component props
type AssetListFormProps = {
  dateCreated: string;
  accountType?: string;
  startAssetNumber: string;
  endAssetNumber: string;
  startDate: string;
  endDate: string;
  onFormSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AssetListForm: React.FC<AssetListFormProps> = ({
  dateCreated,
  accountType,
  startAssetNumber,
  endAssetNumber,
  startDate,
  endDate,
  onFormSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">改良資産リスト作成</h2>
      <div className="mb-4">
        <label className="block mb-2">作表年月日</label>
        <input
          type="text"
          value={dateCreated}
          readOnly
          className="w-full border-2 border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <span>会計区分</span>
        <div className="flex items-center">
          <input type="radio" name="account" checked className="mr-2" readOnly />
          <label>印字しない</label>
          <input
            type="text"
            value={accountType}
            readOnly
            className="ml-4 border-2 border-gray-300 p-2 rounded-md flex-1"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">固定資産科目</label>
        <div className="flex">
          <input
            type="text"
            value={startAssetNumber}
            readOnly
            className="border-2 border-gray-300 p-2 rounded-md flex-1"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={endAssetNumber}
            readOnly
            className="border-2 border-gray-300 p-2 rounded-md flex-1"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">改良年月日</label>
        <div className="flex">
          <input
            type="text"
            value={startDate}
            readOnly
            className="border-2 border-gray-300 p-2 rounded-md flex-1"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={endDate}
            readOnly
            className="border-2 border-gray-300 p-2 rounded-md flex-1"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={onClear} className="bg-yellow-500 text-white py-2 px-4 rounded-md mx-2">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded-md mx-2">
          終了
        </button>
        <button onClick={onFormSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md mx-2">
          OK
        </button>
      </div>
    </div>
  );
};

export default AssetListForm;
