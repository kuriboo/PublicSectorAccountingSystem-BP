// components/AssetForm.tsx
import React from 'react';

type AssetFormProps = {
  assetNumber: string;
  accountingDivision: string;
  department: string;
  facility: string;
  belonging: string;
  name: string;
  location: string;
  area: string;
  acquisitionDate: string;
  initialAcquisitionValue: string;
  onSubmit: (e: React.FormEvent) => void;
};

const AssetForm: React.FC<AssetFormProps> = ({
  assetNumber,
  accountingDivision,
  department,
  facility,
  belonging,
  name,
  location,
  area,
  acquisitionDate,
  initialAcquisitionValue,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="p-4 bg-white rounded-md shadow-md">
      {/* 資産番号 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">資産番号</label>
        <input
          type="text"
          value={assetNumber}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          readOnly
        />
      </div>

      {/* 会計区分 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">会計区分</label>
        <input
          type="text"
          value={accountingDivision}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          readOnly
        />
      </div>

      {/* 部門 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">部門</label>
        <input
          type="text"
          value={department}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          readOnly
        />
      </div>

      {/* 施設 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">施設</label>
        <input
          type="text"
          value={facility}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          readOnly
        />
      </div>

      {/* 所属 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">所属</label>
        <input
          type="text"
          value={belonging}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          readOnly
        />
      </div>

      {/* 名称 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">名称</label>
        <input
          type="text"
          value={name}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          readOnly
        />
      </div>

      {/* 所在地 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">所在地</label>
        <input
          type="text"
          value={location}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          readOnly
        />
      </div>

      {/* 地区 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">地区</label>
        <input
          type="text"
          value={area}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          readOnly
        />
      </div>

      {/* 取得年月日 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">取得年月日</label>
        <input
          type="date"
          value={acquisitionDate}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          readOnly
        />
      </div>

      {/* 当初取得価額 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">当初取得価額</label>
        <input
          type="text"
          value={initialAcquisitionValue}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          readOnly
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          保存
        </button>
      </div>
    </form>
  );
};

export default AssetForm;
```