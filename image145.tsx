```tsx
import React from 'react';

// Propsの型定義
type AssetFormProps = {
  assetNumber: string;
  assetName: string;
  constructionNumber: string;
  unit: string;
  currentQuantity: string;
  currentAmount: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AssetForm: React.FC<AssetFormProps> = ({
  assetNumber,
  assetName,
  constructionNumber,
  unit,
  currentQuantity,
  currentAmount,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">構造資産累計マスタ</h1>
      <form>
        <div className="mb-4">
          <label className="font-bold mr-2">資産番号:</label>
          <input
            type="text"
            value={assetNumber}
            readOnly
            className="border p-1 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold mr-2">資産名称:</label>
          <span>{assetName}</span>
        </div>
        <div className="mb-4">
          <label className="font-bold mr-2">構造枝番号:</label>
          <input
            type="text"
            value={constructionNumber}
            readOnly
            className="border p-1 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold mr-2">単位:</label>
          <input
            type="text"
            value={unit}
            readOnly
            className="border p-1 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold mr-2">現在数量:</label>
          <input
            type="text"
            value={currentQuantity}
            readOnly
            className="border p-1 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold mr-2">現在金額:</label>
          <input
            type="text"
            value={currentAmount}
            readOnly
            className="border p-1 rounded"
          />
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            OK
          </button>
          <button type="button" onClick={onClear} className="bg-red-500 text-white px-4 py-2 rounded">
            クリア
          </button>
          <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssetForm;
```