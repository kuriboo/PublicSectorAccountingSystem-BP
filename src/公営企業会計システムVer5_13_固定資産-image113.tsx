import React from 'react';

type AssetManagementProps = {
  assetNumber: string;
  facilityName: string;
  category: string[];
  importanceLevels: string[];
  onAssetNumberChange: (value: string) => void;
  onFacilityNameChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onImportanceChange: (value: string) => void;
};

const AssetManagement: React.FC<AssetManagementProps> = ({
  assetNumber,
  facilityName,
  category,
  importanceLevels,
  onAssetNumberChange,
  onFacilityNameChange,
  onCategoryChange,
  onImportanceChange,
}) => (
  <div className="p-4 bg-white">
    <h1 className="text-xl font-bold mb-4">アセットマネジメント 耐震診断保守</h1>
    <div className="mb-4">
      <label className="block text-sm font-medium">資産番号</label>
      <input
        type="text"
        value={assetNumber}
        onChange={(e) => onAssetNumberChange(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium">施設名</label>
      <input
        type="text"
        value={facilityName}
        onChange={(e) => onFacilityNameChange(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium">分類</label>
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full"
      >
        {category.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium">重要度</label>
      <select
        value={importanceLevels}
        onChange={(e) => onImportanceChange(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full"
      >
        {importanceLevels.map((level, index) => (
          <option key={index} value={level}>
            {level}
          </option>
        ))}
      </select>
    </div>
    <button className="bg-blue-500 text-white py-2 px-4 rounded">OK</button>
  </div>
);

export default AssetManagement;
```