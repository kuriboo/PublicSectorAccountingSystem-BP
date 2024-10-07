// components/AppGroupForm.tsx

import React, { useState } from 'react';

type AppGroupFormProps = {
  initialCode?: string;
  initialGroupName?: string;
  onSubmit: (data: { code: string; individualSetting: boolean; groupName: string }) => void;
};

const AppGroupForm: React.FC<AppGroupFormProps> = ({ initialCode = '', initialGroupName = '', onSubmit }) => {
  const [code, setCode] = useState<string>(initialCode);
  const [individualSetting, setIndividualSetting] = useState<boolean>(true);
  const [groupName, setGroupName] = useState<string>(initialGroupName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ code, individualSetting, groupName });
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">アプリケーショングループマスタ</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="code">
            APグループコード
          </label>
          <input
            id="code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            id="individualSetting"
            type="checkbox"
            checked={individualSetting}
            onChange={(e) => setIndividualSetting(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="individualSetting" className="text-sm font-medium text-gray-700">
            個別設定可能フラグ
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="groupName">
            グループ名称
          </label>
          <input
            id="groupName"
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow">
            登録
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppGroupForm;
```