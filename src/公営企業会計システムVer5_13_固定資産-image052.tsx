'use client';

import React from 'react'

// TypeScript型定義
type AssetFormProps = {
  representationDate?: string;
  assetNumberFrom?: string;
  assetNumberTo?: string;
  fixedAssetSubjectFrom?: string;
  fixedAssetSubjectTo?: string;
  departmentFrom?: string;
  departmentTo?: string;
  acquisitionDateFrom?: string;
  acquisitionDateTo?: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const AssetForm: React.FC<AssetFormProps> = ({
  representationDate = "平成29年09月11日",
  assetNumberFrom = "0",
  assetNumberTo = "999999999",
  fixedAssetSubjectFrom = "0000000000",
  fixedAssetSubjectTo = "9999999999",
  departmentFrom = "001",
  departmentTo = "002",
  acquisitionDateFrom = "平成29年04月",
  acquisitionDateTo = "平成30年03月",
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 max-w-md mx-auto rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">抽出固定資産一覧表作成</h1>

      {/* 作表年月日 */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">作表年月日</label>
        <input
          type="text"
          value={representationDate}
          className="block w-full p-2 border border-gray-300 rounded"
          readOnly
        />
      </div>

      {/* 作表区分 */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">作表区分</label>
        <div>
          <label className="inline-flex items-center mr-4">
            <input type="radio" name="type" className="form-radio" defaultChecked />
            <span className="ml-2">管理（資産番号）</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="type" className="form-radio" />
            <span className="ml-2">管理以外</span>
          </label>
        </div>
      </div>

      {/* 範囲指定 */}
      <fieldset className="mb-4 p-3 border border-gray-300 rounded">
        <legend className="font-semibold">範囲指定</legend>

        {/* 資産番号 */}
        <div className="mb-2">
          <label className="block font-semibold mb-1">資産番号</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={assetNumberFrom}
              className="flex-1 p-2 border border-gray-300 rounded"
              readOnly
            />
            <input
              type="text"
              value={assetNumberTo}
              className="flex-1 p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
        </div>

        {/* 固定資産科目 */}
        <div className="mb-2">
          <label className="block font-semibold mb-1">固定資産科目</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={fixedAssetSubjectFrom}
              className="flex-1 p-2 border border-gray-300 rounded"
              readOnly
            />
            <input
              type="text"
              value={fixedAssetSubjectTo}
              className="flex-1 p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
        </div>

        {/* 部門 */}
        <div className="mb-2">
          <label className="block font-semibold mb-1">部門</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={departmentFrom}
              className="flex-1 p-2 border border-gray-300 rounded"
              readOnly
            />
            <input
              type="text"
              value={departmentTo}
              className="flex-1 p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
        </div>

        {/* 取得年月日 */}
        <div className="mb-2">
          <label className="block font-semibold mb-1">取得年月日</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={acquisitionDateFrom}
              className="flex-1 p-2 border border-gray-300 rounded"
              readOnly
            />
            <input
              type="text"
              value={acquisitionDateTo}
              className="flex-1 p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
        </div>
      </fieldset>

      {/* Buttons */}
      <div className="flex space-x-3">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded">
          クリア
        </button>
        <button onClick={onExit} className="px-4 py-2 bg-gray-300 text-black rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetForm;
```