```tsx
// Import necessary libraries and types
import React from 'react';

// Define the types for the component's props
interface SystemSettingsProps {
  messageCategory?: string;
  selectedBusiness?: string[];
  simulationPath?: string;
  rateAdjustmentFileName?: string;
  ratesFileName?: string;
  aggregationClassification?: string;
  updatePath?: string;
  exclusionPath?: string;
  registrationPath?: string;
  accountLinkagePath?: string;
  areaType?: string;
}

// Define default props
const defaultProps: SystemSettingsProps = {
  messageCategory: '共通設定',
  selectedBusiness: [],
  simulationPath: '',
  rateAdjustmentFileName: '',
  ratesFileName: '',
  aggregationClassification: '',
  updatePath: '',
  exclusionPath: '',
  registrationPath: '',
  accountLinkagePath: '',
  areaType: '',
};

// Create the component using Tailwind CSS for styling
const SystemSettings: React.FC<SystemSettingsProps> = ({
  messageCategory,
  selectedBusiness,
  simulationPath,
  rateAdjustmentFileName,
  ratesFileName,
  aggregationClassification,
  updatePath,
  exclusionPath,
  registrationPath,
  accountLinkagePath,
  areaType,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold mb-4">システム設定</h2>

      <div className="mb-4">
        <label className="block mb-2">業務メッセージ</label>
        <select className="border p-2 w-full">
          <option value="共通設定">{messageCategory}</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">業務</label>
        <div className="grid grid-cols-4 gap-2">
          {['収計', '調定', '収納', '未納', '窓口', 'メータ', '清納', '問合せ'].map((item, index) => (
            <label key={index} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedBusiness?.includes(item)}
                className="mr-2"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">シミュレーションパス</label>
        <input type="text" value={simulationPath} className="border p-2 w-full" readOnly />
      </div>

      <div className="mb-4">
        <label className="block mb-2">料金改定 調定ファイル名</label>
        <input type="text" value={rateAdjustmentFileName} className="border p-2 w-full" readOnly />
      </div>

      <div className="mb-4">
        <label className="block mb-2">料金改定 料金ファイル名</label>
        <input type="text" value={ratesFileName} className="border p-2 w-full" readOnly />
      </div>

      <div className="mb-4">
        <label className="block mb-2">料金改定 集計分類</label>
        <input type="text" value={aggregationClassification} className="border p-2 w-full" readOnly />
      </div>

      <div className="mb-4">
        <label className="block mb-2">年次更新 不納欠損パス</label>
        <input type="text" value={updatePath} className="border p-2 w-full" readOnly />
      </div>

      <div className="mb-4">
        <label className="block mb-2">受欠権精査 登録一覧パス</label>
        <input type="text" value={exclusionPath} className="border p-2 w-full" readOnly />
      </div>

      <div className="mb-4">
        <label className="block mb-2">会計連携データパス</label>
        <input type="text" value={accountLinkagePath} className="border p-2 w-full" readOnly />
      </div>

      <div className="mb-4">
        <label className="block mb-2">地区種別</label>
        <input type="text" value={areaType} className="border p-2 w-full" readOnly />
      </div>

      <div className="flex justify-end space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">OK</button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded">クリア</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

// Assign default props to the component
SystemSettings.defaultProps = defaultProps;

export default SystemSettings;
```