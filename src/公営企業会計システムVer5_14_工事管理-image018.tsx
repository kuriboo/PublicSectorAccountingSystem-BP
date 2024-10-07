import React from 'react';

// TypeScript type definitions for the component props
type RevenueSettingsProps = {
  fiscalYear: string; // 年度
  projectName: string; // 工事名
  projectNumber: string; // 工事番号
  location: string; // 工事場所
  onConfirm: () => void; // 確定ボタンを押したときの動作
  onCancel: () => void; // キャンセルボタンを押したときの動作
};

const RevenueSettings: React.FC<RevenueSettingsProps> = ({
  fiscalYear,
  projectName,
  projectNumber,
  location,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">関連収支設定</h1>
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              年度
            </label>
            <input
              type="text"
              value={fiscalYear}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              工事名
            </label>
            <input
              type="text"
              value={projectName}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              工事番号
            </label>
            <input
              type="text"
              value={projectNumber}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              工事場所
            </label>
            <input
              type="text"
              value={location}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          確定
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default RevenueSettings;
