// types.ts
export interface FormProps {
  year: number;
  organizationCode: string;
  organizationName: string;
  accountTitleCode: string;
  businessCode: string;
  facilityCode: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// FormComponent.tsx
import React from 'react';
import { FormProps } from './types';

const FormComponent: React.FC<FormProps> = ({
  year,
  organizationCode,
  organizationName,
  accountTitleCode,
  businessCode,
  facilityCode,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-lg font-bold mb-4">決算統計調査表連携</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          決算年度
        </label>
        <input type="number" value={year} className="border p-2 rounded" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          団体コード
        </label>
        <input type="text" value={organizationCode} className="border p-2 rounded" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          団体名称
        </label>
        <input type="text" value={organizationName} className="border p-2 rounded" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          業務コード
        </label>
        <input type="text" value={businessCode} className="border p-2 rounded" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          施設コード
        </label>
        <input type="text" value={facilityCode} className="border p-2 rounded" readOnly />
      </div>
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          集計
        </button>
        <button
          type="button"
          onClick={onClear}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```