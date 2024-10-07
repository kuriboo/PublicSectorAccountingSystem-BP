import React from 'react';

// Propsの型定義
type AssetFormProps = {
  assetNumber: string;
  sectionCode: string;
  sectionName: string;
  subSectionCode: string;
  subSectionName: string;
  detailCode: string;
  detailName: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const AssetForm: React.FC<AssetFormProps> = ({
  assetNumber,
  sectionCode,
  sectionName,
  subSectionCode,
  subSectionName,
  detailCode,
  detailName,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h1 className="text-xl font-bold mb-4">リース資産取得登録</h1>
      <form>
        <div className="mb-4">
          <label className="block mb-1">資産番号</label>
          <input
            type="text"
            value={assetNumber}
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">節</label>
          <input
            type="text"
            value={sectionCode}
            className="w-1/4 p-2 border rounded mr-2"
            readOnly
          />
          <input
            type="text"
            value={sectionName}
            className="w-3/4 p-2 border rounded"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">細節</label>
          <input
            type="text"
            value={subSectionCode}
            className="w-1/4 p-2 border rounded mr-2"
            readOnly
          />
          <input
            type="text"
            value={subSectionName}
            className="w-3/4 p-2 border rounded"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">明細</label>
          <input
            type="text"
            value={detailCode}
            className="w-1/4 p-2 border rounded mr-2"
            readOnly
          />
          <input
            type="text"
            value={detailName}
            className="w-3/4 p-2 border rounded"
            readOnly
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onSubmit}>
            OK
          </button>
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClear}>
            クリア
          </button>
          <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={onExit}>
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssetForm;
