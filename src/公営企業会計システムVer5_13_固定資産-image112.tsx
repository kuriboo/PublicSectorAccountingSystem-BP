import React from 'react';

// TypeScript interface for component props
interface AssetManagementFormProps {
  assetNumber?: string;
  systemOptions: string[];
  divisionOptions: string[];
  categoryOptions: string[];
  priorityOptions: string[];
  onSubmit: () => void;
  onClear: () => void;
  onPrevData: () => void;
  onNextData: () => void;
}

const AssetManagementForm: React.FC<AssetManagementFormProps> = ({
  assetNumber = '',
  systemOptions,
  divisionOptions,
  categoryOptions,
  priorityOptions,
  onSubmit,
  onClear,
  onPrevData,
  onNextData,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-bold mb-4">アセットマネジメント区分保守</h2>
      <div className="mb-6">
        <label className="block mb-2">資産番号</label>
        <input type="text" value={assetNumber} className="w-full p-2 border" readOnly />
      </div>

      <div className="grid gap-4 grid-cols-2">
        <div>
          <label className="block mb-2">区分</label>
          <select className="w-full p-2 border">
            {divisionOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">システム</label>
          <select className="w-full p-2 border">
            {systemOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">工種</label>
          <select className="w-full p-2 border">
            {categoryOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">重要度</label>
          <select className="w-full p-2 border">
            {priorityOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={onPrevData} className="px-4 py-2 bg-gray-300 rounded">前データ</button>
        <button onClick={onNextData} className="px-4 py-2 bg-gray-300 rounded">次データ</button>
      </div>

      <div className="flex justify-end space-x-2 mt-6">
        <button onClick={onClear} className="px-4 py-2 bg-yellow-400 rounded">クリア</button>
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default AssetManagementForm;
