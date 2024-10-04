```tsx
// Import necessary libraries and components
import React from 'react';

// Define the types for the component props
interface ProcessingFormProps {
  updateDate: string;
  startYear: number;
  endYear: number;
  assetCategory: string;
  assetCode: string;
  minAssetNumber: number;
  maxAssetNumber: number;
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
}

// Main component
const ProcessingForm: React.FC<ProcessingFormProps> = ({
  updateDate,
  startYear,
  endYear,
  assetCategory,
  assetCode,
  minAssetNumber,
  maxAssetNumber,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <div className="text-center text-lg font-bold mb-2">法改正対応耐用年数一括処理</div>
      <div className="mb-4">
        <label className="block text-gray-700">更新年月日</label>
        <input type="text" value={updateDate} readOnly className="w-full border px-2 py-1 rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">耐用年数</label>
        <div className="flex space-x-2">
          <input type="number" value={startYear} readOnly className="w-full border px-2 py-1 rounded" />
          <span>〜</span>
          <input type="number" value={endYear} readOnly className="w-full border px-2 py-1 rounded" />
        </div>
      </div>
      <div className="mb-4 border-t pt-2">
        <label className="block text-gray-700">範囲指定</label>
        <div className="flex space-x-2">
          <input type="text" value={assetCode} readOnly className="w-full border px-2 py-1 rounded" />
          <span>{assetCategory}</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">資産番号</label>
        <div className="flex space-x-2">
          <input type="number" value={minAssetNumber} readOnly className="w-full border px-2 py-1 rounded" />
          <span>〜</span>
          <input type="number" value={maxAssetNumber} readOnly className="w-full border px-2 py-1 rounded" />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onEnd} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ProcessingForm;
```