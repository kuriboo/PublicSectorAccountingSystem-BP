// AssetForm.tsx
import React from 'react';

interface AssetFormProps {
  assetNumber?: string;
  accountSection?: string;
  departmentOptions?: string[];
  facility?: string;
  belonging?: string;
  name?: string;
  location?: string;
  region?: string;
  remarks?: string;
  constructionYear?: number;
  constructionMonth?: number;
  removalYearMonthDay?: string;
  acquisitionDate?: string;
  acquisitionPrice?: number;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const AssetForm: React.FC<AssetFormProps> = ({
  assetNumber = '',
  accountSection = '',
  departmentOptions = [],
  facility = '',
  belonging = '',
  name = '',
  location = '',
  region = '',
  remarks = '',
  constructionYear,
  constructionMonth,
  removalYearMonthDay = '',
  acquisitionDate = '',
  acquisitionPrice,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h1 className="text-xl font-bold mb-4">固定資産マスタ</h1>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">資産番号</label>
        <input type="text" className="mt-1 block w-full" defaultValue={assetNumber} />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">会計区分</label>
        <select className="mt-1 block w-full" defaultValue={accountSection}>
          {departmentOptions.map(dept => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">施設</label>
        <input type="text" className="mt-1 block w-full" defaultValue={facility} />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">所属</label>
        <input type="text" className="mt-1 block w-full" defaultValue={belonging} />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">名称</label>
        <input type="text" className="mt-1 block w-full" defaultValue={name} />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">所在地</label>
        <input type="text" className="mt-1 block w-full" defaultValue={location} />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">地区</label>
        <input type="text" className="mt-1 block w-full" defaultValue={region} />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">摘要</label>
        <input type="text" className="mt-1 block w-full" defaultValue={remarks} />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">施工年度</label>
        <input
          type="number"
          className="mt-1 block w-full"
          defaultValue={constructionYear}
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">月</label>
        <input
          type="number"
          className="mt-1 block w-full"
          defaultValue={constructionMonth}
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">除却年月日</label>
        <input
          type="date"
          className="mt-1 block w-full"
          defaultValue={removalYearMonthDay}
        />
      </div>
      <h2 className="text-lg font-bold mt-4">取得情報</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">取得年月日</label>
        <input
          type="date"
          className="mt-1 block w-full"
          defaultValue={acquisitionDate}
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">当初取得価額</label>
        <input
          type="number"
          className="mt-1 block w-full"
          defaultValue={acquisitionPrice}
        />
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onSubmit}>
          OK
        </button>
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onExit}>
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetForm;
