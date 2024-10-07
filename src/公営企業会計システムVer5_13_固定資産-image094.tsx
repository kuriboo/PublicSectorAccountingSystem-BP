import React from 'react';

// 型定義
interface AssetSearchProps {
  assetNumber: string;
  accountDivision: string;
  acquisitionMonth?: string;
  depreciationMethod?: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const AssetSearch: React.FC<AssetSearchProps> = ({
  assetNumber,
  accountDivision,
  acquisitionMonth,
  depreciationMethod,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-lg">
      <h1 className="text-lg font-bold mb-4">予測固定資産照会条件設定</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* 資産番号入力フィールド */}
        <div>
          <label className="block text-sm font-medium">資産番号:</label>
          <input
            type="text"
            value={assetNumber}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* 会計区分入力フィールド */}
        <div>
          <label className="block text-sm font-medium">会計区分コード:</label>
          <input
            type="text"
            value={accountDivision}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* 取得年月入力フィールド */}
        <div>
          <label className="block text-sm font-medium">取得年月:</label>
          <input
            type="text"
            value={acquisitionMonth}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* 償却方法入力フィールド */}
        <div>
          <label className="block text-sm font-medium">償却方法:</label>
          <input
            type="text"
            value={depreciationMethod}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetSearch;
