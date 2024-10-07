import React from 'react';

// Types for props
interface SystemSettingsProps {
  readonlyMode: boolean;
  message: string;
  businessSettings: string[];
  simulationPath: string;
  fareAdjustmentFileName: string;
  fareDataFileName: string;
  fareAggregationType: string;
  yearRenewalPath: string;
  customerManagementPath: string;
  accountingDataPath: string;
  regionType: string;
  onApply: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Reusable component
const SystemSettings: React.FC<SystemSettingsProps> = ({
  readonlyMode,
  message,
  businessSettings,
  simulationPath,
  fareAdjustmentFileName,
  fareDataFileName,
  fareAggregationType,
  yearRenewalPath,
  customerManagementPath,
  accountingDataPath,
  regionType,
  onApply,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">システム設定</h2>
      {/* Display Message */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">業務メッセージ</label>
        <input
          type="text"
          value={message}
          readOnly={readonlyMode}
          className="p-2 border rounded w-full"
        />
      </div>
      
      {/* Business Settings */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">業務CDなし</label>
        <div className="flex space-x-2">
          {businessSettings.map((setting, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                checked={true}
                className="h-4 w-4 border-gray-300 rounded"
                readOnly={readonlyMode}
              />
              <span className="ml-2">{setting}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Paths and Files Settings */}
      <div className="grid grid-cols-1 gap-4">
        {/* Simulation Path */}
        <div>
          <label className="block mb-2 font-semibold">シミュレーションパス</label>
          <input
            type="text"
            value={simulationPath}
            readOnly={readonlyMode}
            className="p-2 border rounded w-full"
          />
        </div>
        {/* Fare Adjustment File */}
        <div>
          <label className="block mb-2 font-semibold">料金改定 調定ファイル名</label>
          <input
            type="text"
            value={fareAdjustmentFileName}
            readOnly={readonlyMode}
            className="p-2 border rounded w-full"
          />
        </div>
        {/* Fare Data File */}
        <div>
          <label className="block mb-2 font-semibold">料金改定 料金データファイル名</label>
          <input
            type="text"
            value={fareDataFileName}
            readOnly={readonlyMode}
            className="p-2 border rounded w-full"
          />
        </div>
        {/* Fare Aggregation */}
        <div>
          <label className="block mb-2 font-semibold">料金改定 集計分類</label>
          <input
            type="text"
            value={fareAggregationType}
            readOnly={readonlyMode}
            className="p-2 border rounded w-full"
          />
        </div>
        {/* Year Renewal Path */}
        <div>
          <label className="block mb-2 font-semibold">年次更新・不納欠損パス</label>
          <input
            type="text"
            value={yearRenewalPath}
            readOnly={readonlyMode}
            className="p-2 border rounded w-full"
          />
        </div>
        {/* Customer Management Path */}
        <div>
          <label className="block mb-2 font-semibold">受入情報送信一覧表パス</label>
          <input
            type="text"
            value={customerManagementPath}
            readOnly={readonlyMode}
            className="p-2 border rounded w-full"
          />
        </div>
        {/* Accounting Data Path */}
        <div>
          <label className="block mb-2 font-semibold">会計連携データパス</label>
          <input
            type="text"
            value={accountingDataPath}
            readOnly={readonlyMode}
            className="p-2 border rounded w-full"
          />
        </div>
        {/* Region Type */}
        <div>
          <label className="block mb-2 font-semibold">地区種別</label>
          <input
            type="text"
            value={regionType}
            readOnly={readonlyMode}
            className="p-2 border rounded w-full"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <button
          onClick={onApply}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default SystemSettings;
```