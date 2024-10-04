```tsx
import React, { FC } from 'react';

// Type definitions for component props
interface AssetCorrectionFormProps {
  reportDate: string;
  startAssetNumber: number;
  endAssetNumber: number;
  correctionStartDate: string;
  correctionEndDate: string;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Reusable component with Tailwind CSS styling
const AssetCorrectionForm: FC<AssetCorrectionFormProps> = ({
  reportDate,
  startAssetNumber,
  endAssetNumber,
  correctionStartDate,
  correctionEndDate,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4">更正 資産リスト作成</h2>

      {/* Report Date Section */}
      <div className="mb-4">
        <label className="block text-gray-700">作表年月日</label>
        <input
          type="text"
          value={reportDate}
          readOnly
          className="mt-1 px-2 py-1 border rounded w-full bg-gray-200"
        />
      </div>

      {/* Range Specification Section */}
      <div className="mb-4 border p-4 rounded bg-white shadow">
        <h3 className="text-lg font-medium mb-2">範囲指定</h3>

        <div className="flex items-center justify-between mb-4">
          {/* Start Asset Number */}
          <div>
            <label className="block text-gray-700">資産番号</label>
            <input
              type="number"
              value={startAssetNumber}
              readOnly
              className="mt-1 px-2 py-1 border rounded bg-gray-200"
            />
          </div>
          <span className="text-gray-500 mx-4">~</span>
          {/* End Asset Number */}
          <div>
            <label className="block text-gray-700">資産番号</label>
            <input
              type="number"
              value={endAssetNumber}
              readOnly
              className="mt-1 px-2 py-1 border rounded bg-gray-200"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Correction Start Date */}
          <div>
            <label className="block text-gray-700">更正年月日</label>
            <input
              type="text"
              value={correctionStartDate}
              readOnly
              className="mt-1 px-2 py-1 border rounded w-full bg-gray-200"
            />
          </div>
          <span className="text-gray-500 mx-4">~</span>
          {/* Correction End Date */}
          <div>
            <label className="block text-gray-700">更正年月日</label>
            <input
              type="text"
              value={correctionEndDate}
              readOnly
              className="mt-1 px-2 py-1 border rounded w-full bg-gray-200"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetCorrectionForm;
```