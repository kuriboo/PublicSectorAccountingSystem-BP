```tsx
import React, { FC } from 'react';

interface InspectionsInputProps {
  year: string;
  acceptanceNumber: string;
  industryType: string;
  itemName: string;
  secondaryItemName?: string;
  deliveryLocation: string;
  deliveryDate: string;
  inspectionDate: string;
  totalPassCount: number;
  onConfirm: () => void;
  onCancel: () => void;
}

const InspectionsInput: FC<InspectionsInputProps> = ({
  year,
  acceptanceNumber,
  industryType,
  itemName,
  secondaryItemName,
  deliveryLocation,
  deliveryDate,
  inspectionDate,
  totalPassCount,
  onConfirm,
  onCancel
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">物品検査入力</h1>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <span>{year}</span>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">受付番号</label>
        <span>{acceptanceNumber}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">業種</label>
        <span>{industryType}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">件名</label>
        <span>{itemName}</span>
      </div>
      {secondaryItemName && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">件名2</label>
          <span>{secondaryItemName}</span>
        </div>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">納入場所</label>
        <span>{deliveryLocation}</span>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">納入日</label>
          <span>{deliveryDate}</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">検査日</label>
          <span>{inspectionDate}</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">総合格数</label>
        <span>{totalPassCount.toFixed(2)}</span>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default InspectionsInput;
```