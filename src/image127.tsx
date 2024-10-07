import React from 'react';
import { FC } from 'react';

interface AssetDetailFormProps {
  masterType: '部' | '明細';
  selectedAsset: string;
  remainingRate: number;
  limitRate: number;
  onChange: (field: string, value: string | number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const AssetDetailForm: FC<AssetDetailFormProps> = ({
  masterType,
  selectedAsset,
  remainingRate,
  limitRate,
  onChange,
  onSubmit,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">固定資産/明細マスタ</h2>

      {/* Master Type Selection */}
      <div className="my-4">
        <label>
          <input
            type="radio"
            value="部"
            checked={masterType === '部'}
            onChange={() => onChange('masterType', '部')}
          />
          部
        </label>
        <label className="ml-4">
          <input
            type="radio"
            value="明細"
            checked={masterType === '明細'}
            onChange={() => onChange('masterType', '明細')}
          />
          明細
        </label>
      </div>

      {/* Asset Selection */}
      <div className="my-4">
        <span>部:</span>
        <input
          type="text"
          value={selectedAsset}
          onChange={(e) => onChange('selectedAsset', e.target.value)}
          className="ml-2 border border-gray-300 p-1 rounded"
        />
      </div>

      {/* Remaining Rate */}
      <div className="my-4">
        <span>残存率:</span>
        <input
          type="number"
          value={remainingRate}
          onChange={(e) => onChange('remainingRate', parseFloat(e.target.value))}
          className="ml-2 border border-gray-300 p-1 rounded"
        />
      </div>

      {/* Limit Rate */}
      <div className="my-4">
        <span>限度率:</span>
        <input
          type="number"
          value={limitRate}
          onChange={(e) => onChange('limitRate', parseFloat(e.target.value))}
          className="ml-2 border border-gray-300 p-1 rounded"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-6">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetDetailForm;
