// types.ts
export interface InspectionInputProps {
  year: string;
  receiptNumber: string;
  businessType: string;
  case1: string;
  case2?: string;
  deliveryLocation: string;
  deliveryDate: string;
  inspectionDate: string;
  totalAmount: number;
  onSubmit: () => void;
  onClear: () => void;
  onComplete: () => void;
}

// InspectionInput.tsx
import React from 'react';
import { InspectionInputProps } from './types';

const InspectionInput: React.FC<InspectionInputProps> = ({
  year,
  receiptNumber,
  businessType,
  case1,
  case2,
  deliveryLocation,
  deliveryDate,
  inspectionDate,
  totalAmount,
  onSubmit,
  onClear,
  onComplete,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="font-bold text-lg mb-4">物品検査入力</h2>
      <div className="mb-4">
        <label className="block mb-1">年度</label>
        <input
          type="text"
          value={year}
          readOnly
          className="border p-2 w-full"
        />

        <label className="block mt-3 mb-1">受付番号</label>
        <input
          type="text"
          value={receiptNumber}
          readOnly
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">業種</label>
        <input
          type="text"
          value={businessType}
          readOnly
          className="border p-2 w-full"
        />

        <label className="block mt-3 mb-1">件名1</label>
        <input
          type="text"
          value={case1}
          readOnly
          className="border p-2 w-full"
        />

        {case2 && (
          <>
            <label className="block mt-3 mb-1">件名2</label>
            <input
              type="text"
              value={case2}
              readOnly
              className="border p-2 w-full"
            />
          </>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1">納入場所</label>
        <input
          type="text"
          value={deliveryLocation}
          readOnly
          className="border p-2 w-full"
        />

        <label className="block mt-3 mb-1">納入日</label>
        <input
          type="text"
          value={deliveryDate}
          readOnly
          className="border p-2 w-full"
        />

        <label className="block mt-3 mb-1">検査日</label>
        <input
          type="text"
          value={inspectionDate}
          readOnly
          className="border p-2 w-full"
        />

        <label className="block mt-3 mb-1">総合格数</label>
        <input
          type="number"
          value={totalAmount}
          readOnly
          className="border p-2 w-full"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          行確定
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white p-2 rounded"
        >
          行キャンセル
        </button>
        <button
          onClick={onComplete}
          className="bg-green-500 text-white p-2 rounded"
        >
          完了
        </button>
      </div>
    </div>
  );
};

export default InspectionInput;
```