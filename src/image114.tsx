// AssetManagementForm.tsx
import React from 'react';

type Option = {
  value: string;
  label: string;
};

type AssetManagementFormProps = {
  assetNumber?: string;
  assetTypes: Option[];
  divisions: Option[];
  categories: Option[];
  systems: Option[];
  importances: Option[];
  facilityName?: string;
  managementName?: string;
  managementRegion?: string;
  baseYears: {
    current?: string;
    update?: string;
  };
  managementFacility?: string;
  basicTypes: { [key: string]: string };
  detailedTypes: { [key: string]: string };
  onPreviousClick: () => void;
  onNextClick: () => void;
  onOKClick: () => void;
  onClearClick: () => void;
  onEndClick: () => void;
};

const AssetManagementForm: React.FC<AssetManagementFormProps> = ({
  assetNumber,
  assetTypes,
  divisions,
  categories,
  systems,
  importances,
  facilityName,
  managementName,
  managementRegion,
  baseYears,
  managementFacility,
  basicTypes,
  detailedTypes,
  onPreviousClick,
  onNextClick,
  onOKClick,
  onClearClick,
  onEndClick,
}) => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">アセットマネジメント区分保守</h2>
      <div className="mb-4">
        <label>資産番号</label>
        <input
          type="text"
          value={assetNumber}
          className="w-full p-2 border rounded"
          readOnly
        />
      </div>
      <div className="mb-4 grid grid-cols-3 gap-4">
        <div>
          <label>区分</label>
          <select className="w-full p-2 border rounded">
            {divisions.map((division) => (
              <option key={division.value} value={division.value}>
                {division.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>工種</label>
          <select className="w-full p-2 border rounded">
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>重要度</label>
          <select className="w-full p-2 border rounded">
            {importances.map((importance) => (
              <option key={importance.value} value={importance.value}>
                {importance.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label>施設名</label>
        <input
          type="text"
          value={facilityName}
          className="w-full p-2 border rounded"
          readOnly
        />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label>管理名称</label>
          <input
            type="text"
            value={managementName}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>管理規格</label>
          <input
            type="text"
            value={managementRegion}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="mb-4">
        <label>更新基準年数</label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span>(現有)</span>
            <input
              type="text"
              value={baseYears.current}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <span>(更新後)</span>
            <input
              type="text"
              value={baseYears.update}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label>管理施設名</label>
        <input
          type="text"
          value={managementFacility}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4 grid grid-cols-3 gap-4">
        {Object.keys(basicTypes).map((key) => (
          <div key={key}>
            <label>{`基本種別${key}`}</label>
            <input
              type="text"
              value={basicTypes[key]}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
      </div>
      <div className="mb-4 grid grid-cols-3 gap-4">
        {Object.keys(detailedTypes).map((key) => (
          <div key={key}>
            <label>{`詳細区分${key}`}</label>
            <input
              type="text"
              value={detailedTypes[key]}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onPreviousClick}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          前データ
        </button>
        <button
          onClick={onNextClick}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          次データ
        </button>
        <button
          onClick={onOKClick}
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded"
        >
          OK
        </button>
        <button
          onClick={onClearClick}
          className="px-4 py-2 bg-yellow-500 text-white hover:bg-yellow-600 rounded"
        >
          クリア
        </button>
        <button
          onClick={onEndClick}
          className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetManagementForm;
