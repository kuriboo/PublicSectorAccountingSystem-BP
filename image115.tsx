```tsx
import React from 'react';

// 型定義
type AssetManagementProps = {
  assetNumber?: string;
  facilityName?: string;
  classification?: string;
  importanceLevel?: string;
  onAssetNumberChange?: (value: string) => void;
  onFacilityNameChange?: (value: string) => void;
  onClassificationChange?: (value: string) => void;
  onImportanceLevelChange?: (value: string) => void;
};

// コンポーネント定義
const AssetManagement: React.FC<AssetManagementProps> = ({
  assetNumber,
  facilityName,
  classification,
  importanceLevel,
  onAssetNumberChange,
  onFacilityNameChange,
  onClassificationChange,
  onImportanceLevelChange,
}) => {
  return (
    <div className="p-4 border rounded-md bg-gray-100">
      <h1 className="text-xl font-bold text-purple-700">アセットマネジメント耐震診断保守</h1>
      
      <div className="my-4">
        <label className="block font-medium">資産番号</label>
        <input
          type="text"
          value={assetNumber}
          onChange={(e) => onAssetNumberChange && onAssetNumberChange(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="my-4">
        <h2 className="font-medium">施設</h2>
        <div className="flex">
          <div className="mr-4">
            <label className="block font-medium">施設名</label>
            <input
              type="text"
              value={facilityName}
              onChange={(e) => onFacilityNameChange && onFacilityNameChange(e.target.value)}
              className="p-2 border rounded"
            />
          </div>
          <div className="mr-4">
            <label className="block font-medium">分類</label>
            <input
              type="text"
              value={classification}
              onChange={(e) => onClassificationChange && onClassificationChange(e.target.value)}
              className="p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">重要度</label>
            <input
              type="text"
              value={importanceLevel}
              onChange={(e) => onImportanceLevelChange && onImportanceLevelChange(e.target.value)}
              className="p-2 border rounded"
            />
          </div>
        </div>
      </div>
      
      {/* 他のコンポーネント要素をここに加えることができます */}
    </div>
  );
};

export default AssetManagement;
```