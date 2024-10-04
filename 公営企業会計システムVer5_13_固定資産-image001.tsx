```tsx
import React, { FC } from 'react';

type AssetRegisterFormProps = {
  assetNumber?: string;
  section?: string;
  detail?: string;
  assetName?: string;
  summary?: string;
  location?: string;
  category?: string;
  useCount?: number;
  discardRate?: number;
  remainingRate?: number;
  annualDepreciation?: number;
  limitRate?: number;
  remainingAmount?: number;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const AssetRegisterForm: FC<AssetRegisterFormProps> = ({
  assetNumber = '',
  section = '',
  detail = '',
  assetName = '',
  summary = '',
  location = '',
  category = '',
  useCount = 0,
  discardRate = 0,
  remainingRate = 0,
  annualDepreciation = 0,
  limitRate = 0,
  remainingAmount = 0,
  onSubmit,
  onClear,
  onExit,
}) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-xl font-bold mb-4">取得資産対象登録</h1>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block mb-2">資産番号</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={assetNumber}
        />
      </div>

      <div>
        <label className="block mb-2">節</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={section}
        />
      </div>
      
      {/* Repeat similar blocks for other fields */}
      
      <div>
        <label className="block mb-2">耐用年数</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={useCount}
        />
      </div>

      <div>
        <label className="block mb-2">償却率</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={discardRate}
        />
      </div>

      {/* Repeat remaining blocks */}

      <div className="col-span-2 flex justify-end space-x-2 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onSubmit}>
          OK
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={onClear}>
          クリア
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onExit}>
          終了
        </button>
      </div>
    </div>
  </div>
);

export default AssetRegisterForm;
```