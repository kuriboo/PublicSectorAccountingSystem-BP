```tsx
import React from 'react';

// TypeScript interface for the component's props
interface FacilityInfoProps {
  facilityCode: string;
  facilityName: string;
  abbreviation: string;
  details: {
    businessType: string;
    managementEntity: string;
    profitLossType: string;
    scale: string;
    utilizationRate: string;
    waterSourceType: string;
    originType: string;
  };
  onConfirm: () => void;
  onCancel: () => void;
}

const FacilityInfo: React.FC<FacilityInfoProps> = ({
  facilityCode,
  facilityName,
  abbreviation,
  details,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium">
          施設コード
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            type="text"
            value={facilityCode}
            readOnly
          />
        </label>
      </div>

      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block text-sm font-medium">
            施設名称
            <input
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              type="text"
              value={facilityName}
              readOnly
            />
          </label>
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-sm font-medium">
            略名
            <input
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              type="text"
              value={abbreviation}
              readOnly
            />
          </label>
        </div>
      </div>

      <div className="grid gap-4 mb-4">
        <label className="block text-sm font-medium">
          事業区分
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            type="text"
            value={details.businessType}
            readOnly
          />
        </label>

        <label className="block text-sm font-medium">
          経営主体
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            type="text"
            value={details.managementEntity}
            readOnly
          />
        </label>

        <label className="block text-sm font-medium">
          黒・赤字別
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            type="text"
            value={details.profitLossType}
            readOnly
          />
        </label>

        <label className="block text-sm font-medium">
          規模別
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            type="text"
            value={details.scale}
            readOnly
          />
        </label>

        <label className="block text-sm font-medium">
          用達区分
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            type="text"
            value={details.utilizationRate}
            readOnly
          />
        </label>

        <label className="block text-sm font-medium">
          水源区分
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            type="text"
            value={details.waterSourceType}
            readOnly
          />
        </label>

        <label className="block text-sm font-medium">
          原価区分
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            type="text"
            value={details.originType}
            readOnly
          />
        </label>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onConfirm}
        >
          確定
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FacilityInfo;
```