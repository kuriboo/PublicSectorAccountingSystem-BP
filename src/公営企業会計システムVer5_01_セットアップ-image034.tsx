import React from 'react';

type GroupMasterProps = {
  name: string;
  summary: string;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const GroupMaster: React.FC<GroupMasterProps> = ({ name, summary, onSubmit, onClear, onFinish }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">按分グループマスタ</h1>
      
      <div className="mb-4">
        <label className="block font-medium">名称</label>
        <input
          type="text"
          value={name}
          className="border border-gray-300 rounded-md w-full px-2 py-1"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">摘要</label>
        <input
          type="text"
          value={summary}
          className="border border-gray-300 rounded-md w-full px-2 py-1"
          readOnly
        />
      </div>

      <div className="flex space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded-md">クリア</button>
        <button onClick={onFinish} className="bg-red-500 text-white px-4 py-2 rounded-md">終了</button>
      </div>
    </div>
  );
};

export default GroupMaster;
```