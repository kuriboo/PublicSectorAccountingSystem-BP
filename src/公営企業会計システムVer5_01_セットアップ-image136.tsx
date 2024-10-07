import React from 'react';

type BankBranchMasterProps = {
  bankCode: string;
  bankName: string;
  fdKanaName: string;
  branchCode: string;
  branchName: string;
  branchFdKanaName: string;
  onPreviousData: () => void;
  onNextData: () => void;
  onConfirm: () => void;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export const BankBranchMaster: React.FC<BankBranchMasterProps> = ({
  bankCode,
  bankName,
  fdKanaName,
  branchCode,
  branchName,
  branchFdKanaName,
  onPreviousData,
  onNextData,
  onConfirm,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-white border rounded-lg">
      <h1 className="text-lg font-bold mb-4">銀行／支店マスタ</h1>
      
      {/* Bank Section */}
      <div className="mb-4">
        <h2 className="text-md font-semibold">銀行</h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <label className="w-16">コード:</label>
            <input className="border p-1" value={bankCode} readOnly />
          </div>
          <div className="flex items-center">
            <label className="w-16">名称:</label>
            <input className="border p-1" value={bankName} readOnly />
          </div>
          <div className="flex items-center">
            <label className="w-16">FD用カナ名称:</label>
            <input className="border p-1" value={fdKanaName} readOnly />
          </div>
          <div>
            <button className="mr-2 bg-gray-200 p-1 rounded" onClick={onPreviousData}>前データ</button>
            <button className="bg-gray-200 p-1 rounded" onClick={onNextData}>次データ</button>
          </div>
        </div>
      </div>
      
      {/* Branch Section */}
      <div className="mb-4">
        <h2 className="text-md font-semibold">支店</h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <label className="w-16">コード:</label>
            <input className="border p-1" value={branchCode} readOnly />
          </div>
          <div className="flex items-center">
            <label className="w-16">名称:</label>
            <input className="border p-1" value={branchName} readOnly />
          </div>
          <div className="flex items-center">
            <label className="w-16">FD用カナ名称:</label>
            <input className="border p-1" value={branchFdKanaName} readOnly />
          </div>
          <div>
            <button className="bg-gray-200 p-1 rounded" onClick={onConfirm}>確定</button>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white p-2 rounded" onClick={onRegister}>登録</button>
        <button className="bg-green-500 text-white p-2 rounded" onClick={onEdit}>訂正</button>
        <button className="bg-red-500 text-white p-2 rounded" onClick={onDelete}>削除</button>
      </div>
    </div>
  );
};
```