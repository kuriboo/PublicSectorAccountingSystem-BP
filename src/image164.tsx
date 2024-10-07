import React, { useState } from 'react';

// TypeScriptの型定義
type BankBranchProps = {
  name: string;
  onConfirm: (name: string) => void;
  onCancel: () => void;
};

const BankBranch: React.FC<BankBranchProps> = ({ name, onConfirm, onCancel }) => {
  const [branchName, setBranchName] = useState<string>(name);

  return (
    <div className="w-full max-w-md mx-auto bg-white p-4 shadow-lg rounded-md">
      <div className="flex justify-between mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">編集</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md">行削除</button>
      </div>
      <table className="w-full mb-4 border-collapse">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">名称</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">{branchName}</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="branchName">
          名称
        </label>
        <input
          id="branchName"
          type="text"
          value={branchName}
          onChange={(e) => setBranchName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onConfirm(branchName)}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          行確定
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default BankBranch;
```