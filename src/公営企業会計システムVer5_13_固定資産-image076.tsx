// AssetForm.tsx

import React from 'react';

// TypeScript type for the component props
interface AssetFormProps {
  reportDate: string;
  assetCategoryStart: string;
  assetCategoryEnd: string;
  division: 'facility' | 'area';
  facilityStart: string;
  facilityEnd: string;
  areaStart: string;
  areaEnd: string;
  assetNumber: string;
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
}

const AssetForm: React.FC<AssetFormProps> = ({
  reportDate,
  assetCategoryStart,
  assetCategoryEnd,
  division,
  facilityStart,
  facilityEnd,
  areaStart,
  areaEnd,
  assetNumber,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4">
      <div className="bg-purple-200 p-2 mb-4 rounded">
        <h1 className="text-lg font-bold">施設別固定資産一覧表作成</h1>
        <p>作表年月日: {reportDate}</p>
      </div>
      <div className="border p-4 rounded mb-4">
        <h2 className="font-semibold">範囲指定</h2>
        <div className="mb-2">
          <label>固定資産科目: </label>
          <input type="text" value={assetCategoryStart} className="border rounded px-1" />
          <span> ~ </span>
          <input type="text" value={assetCategoryEnd} className="border rounded px-1" />
        </div>

        <div className="mb-2">
          <div>
            <label>発行区分: </label>
            <label>
              <input type="radio" checked={division === 'facility'} />
              施設別
            </label>
            <label>
              <input type="radio" checked={division === 'area'} />
              地区別
            </label>
          </div>
        </div>

        <div className="mb-2">
          <label>施設: </label>
          <input type="text" value={facilityStart} className="border rounded px-1" />
          <span> ~ </span>
          <input type="text" value={facilityEnd} className="border rounded px-1" />
        </div>

        <div className="mb-2">
          <label>地区: </label>
          <input type="text" value={areaStart} className="border rounded px-1" />
          <span> ~ </span>
          <input type="text" value={areaEnd} className="border rounded px-1" />
        </div>

        <div className="mb-2">
          <label>資産番号: </label>
          <input type="text" value={assetNumber} className="border rounded px-1" />
        </div>
      </div>

      <div className="flex space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onEnd} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetForm;
