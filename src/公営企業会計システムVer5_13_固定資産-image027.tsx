import React from 'react';

// Propsの型定義
interface LeaseAssetFormProps {
  leaseNumber?: string;
  exclusionDate?: string;
  movementType?: string;
  description?: string;
  category?: string;
  subCategory?: string;
  specifics?: string;
  assetName?: string;
  location?: string;
  memo?: string;
  onRegister?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const LeaseAssetForm: React.FC<LeaseAssetFormProps> = ({
  leaseNumber = '',
  exclusionDate = '',
  movementType = '',
  description = '',
  category = '',
  subCategory = '',
  specifics = '',
  assetName = '',
  location = '',
  memo = '',
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="w-full p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">リース資産除却登録</h1>
      <div className="flex flex-col mb-2">
        <label className="text-sm font-semibold">資産番号</label>
        <input
          type="text"
          value={leaseNumber}
          className="p-2 border border-gray-300 rounded"
          readOnly
        />
      </div>
      <div className="flex flex-col mb-2">
        <label className="text-sm font-semibold">除却年月日</label>
        <input
          type="text"
          value={exclusionDate}
          className="p-2 border border-gray-300 rounded"
          readOnly
        />
      </div>
      {/* 繰り返し同様のパターンで他のフィールドも設定 */}
      <div className="flex flex-col mb-2">
        <label className="text-sm font-semibold">異動区分</label>
        <input
          type="text"
          value={movementType}
          className="p-2 border border-gray-300 rounded"
          readOnly
        />
      </div>
      <div className="flex flex-col mb-2">
        <label className="text-sm font-semibold">摘要</label>
        <input
          type="text"
          value={description}
          className="p-2 border border-gray-300 rounded"
          readOnly
        />
      </div>
      {/* カスタマイズ可能なボタン */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={onRegister}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          登録
        </button>
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
        >
          訂正
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          削除
        </button>
      </div>
    </div>
  );
};

export default LeaseAssetForm;
```