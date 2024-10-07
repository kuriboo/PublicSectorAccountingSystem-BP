import React from 'react';

// TypeScriptの型定義
type AssetFormProps = {
  creationDate: string;
  accountSection: string;
  fixedAssetNumber: string;
  assetNumber: string;
  startDate: string;
  endDate: string;
  operationSection: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

// コンポーネントの定義
const AssetForm: React.FC<AssetFormProps> = ({
  creationDate,
  accountSection,
  fixedAssetNumber,
  assetNumber,
  startDate,
  endDate,
  operationSection,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h1 className="text-xl mb-4">除却・減損資産リスト作成</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">作表年月日</label>
        <input
          type="text"
          value={creationDate}
          className="border rounded p-1 w-full"
          readOnly
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">会計区分</label>
        <input
          type="text"
          value={accountSection}
          className="border rounded p-1 w-full"
          readOnly
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">固定資産科目</label>
        <input
          type="text"
          value={fixedAssetNumber}
          className="border rounded p-1 w-full"
          readOnly
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">資産番号</label>
        <input
          type="text"
          value={assetNumber}
          className="border rounded p-1 w-full"
          readOnly
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">異動年月日</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={startDate}
            className="border rounded p-1 flex-1"
            readOnly
          />
          <span>〜</span>
          <input
            type="text"
            value={endDate}
            className="border rounded p-1 flex-1"
            readOnly
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">異動区分</label>
        <input
          type="text"
          value={operationSection}
          className="border rounded p-1 w-full"
          readOnly
        />
      </div>

      <div className="flex space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white rounded p-2"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white rounded p-2"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-red-500 text-white rounded p-2"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetForm;
```