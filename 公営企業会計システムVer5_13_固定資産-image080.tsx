```tsx
import React, { useState } from 'react';

type Props = {
  currentDate: string;
  fiscalYear: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AssetManagementForm: React.FC<Props> = ({
  currentDate,
  fiscalYear,
  onSubmit,
  onClear,
  onClose,
}) => {
  const [accountingOption, setAccountingOption] = useState('');
  const [assetCodeStart, setAssetCodeStart] = useState('');
  const [assetCodeEnd, setAssetCodeEnd] = useState('');
  const [managementNameStart, setManagementNameStart] = useState('');
  const [managementNameEnd, setManagementNameEnd] = useState('');
  const [managementStandardStart, setManagementStandardStart] = useState('');
  const [managementStandardEnd, setManagementStandardEnd] = useState('');

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">管理別固定資産一覧表作成</h1>
      
      <div className="mb-4">
        <label className="block font-medium">作表年月日</label>
        <input
          type="text"
          value={currentDate}
          readOnly
          className="mt-1 block w-full border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">会計区分</label>
        <div className="mt-1">
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="accountingOption"
              value="印写しない"
              checked={accountingOption === '印写しない'}
              onChange={(e) => setAccountingOption(e.target.value)}
              className="form-radio"
            />
            <span className="ml-2">印写しない</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="accountingOption"
              value="会計区分別"
              checked={accountingOption === '会計区分別'}
              onChange={(e) => setAccountingOption(e.target.value)}
              className="form-radio"
            />
            <span className="ml-2">会計区分別</span>
          </label>
        </div>
      </div>

      <div className="mb-4 p-4 bg-white rounded-md border border-gray-300">
        <h2 className="font-medium">範囲指定</h2>
        
        <div className="mb-4">
          <label className="block font-medium">固定資産科目</label>
          <div className="flex">
            <input
              type="text"
              value={assetCodeStart}
              onChange={(e) => setAssetCodeStart(e.target.value)}
              className="flex-1 mt-1 border-gray-300 rounded-md"
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              value={assetCodeEnd}
              onChange={(e) => setAssetCodeEnd(e.target.value)}
              className="flex-1 mt-1 border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium">管理名称</label>
          <div className="flex">
            <input
              type="text"
              value={managementNameStart}
              onChange={(e) => setManagementNameStart(e.target.value)}
              className="flex-1 mt-1 border-gray-300 rounded-md"
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              value={managementNameEnd}
              onChange={(e) => setManagementNameEnd(e.target.value)}
              className="flex-1 mt-1 border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium">管理規格</label>
          <div className="flex">
            <input
              type="text"
              value={managementStandardStart}
              onChange={(e) => setManagementStandardStart(e.target.value)}
              className="flex-1 mt-1 border-gray-300 rounded-md"
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              value={managementStandardEnd}
              onChange={(e) => setManagementStandardEnd(e.target.value)}
              className="flex-1 mt-1 border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium">取得年度</label>
          <input
            type="text"
            value={fiscalYear}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetManagementForm;
```