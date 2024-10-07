import React from 'react';

// TypeScript type definitions for props
interface CreateAssetListProps {
  creationDate: string;
  accountDivision: string;
  startAssetId: string;
  endAssetId: string;
  startAssetNumber: string;
  endAssetNumber: string;
  acquisitionStartMonth: string;
  acquisitionEndMonth: string;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

// CreateAssetList component
const CreateAssetList: React.FC<CreateAssetListProps> = ({
  creationDate,
  accountDivision,
  startAssetId,
  endAssetId,
  startAssetNumber,
  endAssetNumber,
  acquisitionStartMonth,
  acquisitionEndMonth,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-100">
      <h1 className="text-xl font-semibold mb-4">取得資産リスト作成</h1>
      
      <div className="mb-4">
        <label className="block mb-1">作表年月日</label>
        <input
          type="text"
          value={creationDate}
          readOnly
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">会計区分</label>
        <input
          type="text"
          value={accountDivision}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">固定資産科目</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={startAssetId}
            className="w-full p-2 border rounded-lg"
          />
          <span className="self-center">〜</span>
          <input
            type="text"
            value={endAssetId}
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1">資産番号</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={startAssetNumber}
            className="w-full p-2 border rounded-lg"
          />
          <span className="self-center">〜</span>
          <input
            type="text"
            value={endAssetNumber}
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1">取得年月日</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={acquisitionStartMonth}
            className="w-full p-2 border rounded-lg"
          />
          <span className="self-center">〜</span>
          <input
            type="text"
            value={acquisitionEndMonth}
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
          クリア
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-lg">
          終了
        </button>
      </div>
    </div>
  );
};

export default CreateAssetList;
