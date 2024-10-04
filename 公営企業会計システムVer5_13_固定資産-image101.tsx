```tsx
// AssetInfo.tsx
import React from 'react';

type AssetInfoProps = {
  assetNumber: string;
  assetName: string;
  location: string;
  acquisitionDate: string;
  depreciationType: string;
  department: string;
  acquisitionCost: number;
  duration: number;
  depreciationRate: number;
  sx?: string; // Tailwind CSS classes
};

const AssetInfo: React.FC<AssetInfoProps> = ({
  assetNumber,
  assetName,
  location,
  acquisitionDate,
  depreciationType,
  department,
  acquisitionCost,
  duration,
  depreciationRate,
  sx = ""
}) => (
  <div className={`p-4 bg-white shadow-md ${sx}`}>
    <h2 className="text-xl font-bold mb-4">固定資産異動情報修正</h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label>資産番号:</label>
        <p>{assetNumber}</p>
      </div>
      <div>
        <label>資産名称:</label>
        <p>{assetName}</p>
      </div>
      <div>
        <label>所在地:</label>
        <p>{location}</p>
      </div>
      <div>
        <label>取得年月日:</label>
        <p>{acquisitionDate}</p>
      </div>
      <div>
        <label>償却方法:</label>
        <p>{depreciationType}</p>
      </div>
      <div>
        <label>部署:</label>
        <p>{department}</p>
      </div>
      <div>
        <label>取得価額:</label>
        <p>{acquisitionCost} 円</p>
      </div>
      <div>
        <label>経過年数:</label>
        <p>{duration} 年</p>
      </div>
      <div>
        <label>償却完了率:</label>
        <p>{depreciationRate} %</p>
      </div>
    </div>
    <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">編集</button>
  </div>
);

export default AssetInfo;
```