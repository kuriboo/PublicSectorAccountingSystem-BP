import React from 'react';

type FormProps = {
  decisionType: string;
  onDecisionTypeChange: (value: string) => void;
  currentDate: string;
  storageLocation: string;
  onStorageLocationChange: (value: string) => void;
  productCode: string;
  onProductCodeChange: (value: string) => void;
  outputType: string;
  onOutputTypeChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const InventoryForm: React.FC<FormProps> = ({
  decisionType,
  onDecisionTypeChange,
  currentDate,
  storageLocation,
  onStorageLocationChange,
  productCode,
  onProductCodeChange,
  outputType,
  onOutputTypeChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">貯蔵品在庫状況警告表作成</h1>
      
      <div className="mb-4">
        <label className="block font-medium mb-2">決裁区分</label>
        <select
          value={decisionType}
          onChange={(e) => onDecisionTypeChange(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="管理者">管理者</option>
          <option value="予物">予物</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">現在</label>
        <input
          type="text"
          value={currentDate}
          readOnly
          className="border border-gray-300 p-2 rounded w-full bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">保管場所</label>
        <input
          type="text"
          value={storageLocation}
          onChange={(e) => onStorageLocationChange(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">品番</label>
        <input
          type="text"
          value={productCode}
          onChange={(e) => onProductCodeChange(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">出力区分</label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            checked={outputType === '在庫割れのみ'}
            onChange={() => onOutputTypeChange('在庫割れのみ')}
            className="mr-2"
          />
          <label>在庫割れのみ</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            checked={outputType === 'すべて'}
            onChange={() => onOutputTypeChange('すべて')}
            className="mr-2"
          />
          <label>すべて</label>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default InventoryForm;
```