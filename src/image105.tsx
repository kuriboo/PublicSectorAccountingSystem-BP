import React from 'react';

type ContractManagementProps = {
  year: string;
  code: string;
  name: string;
  onPrevious: () => void;
  onNext: () => void;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ContractManagementComponent: React.FC<ContractManagementProps> = ({
  year,
  code,
  name,
  onPrevious,
  onNext,
  onConfirm,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-500 text-white p-2 rounded">
        <span>契約管理区分保存</span>
        <span>{`平成${year}年`}</span>
      </div>

      {/* Controls */}
      <div className="my-4">
        <fieldset className="border p-2 rounded">
          <legend className="text-sm">契約管理区分種別名称</legend>
          <div className="flex items-center my-2">
            <label className="mr-2">コード</label>
            <input
              type="text"
              value={code}
              className="border rounded px-2"
              readOnly
            />
            <button onClick={onPrevious} className="mx-2 px-4 py-1 bg-gray-200 rounded">前データ</button>
            <button onClick={onNext} className="px-4 py-1 bg-gray-200 rounded">次データ</button>
          </div>
          <div className="flex items-center my-2">
            <label className="mr-2">名称</label>
            <input
              type="text"
              value={name}
              className="border rounded px-2 w-full"
              readOnly
            />
          </div>
        </fieldset>
      </div>

      {/* Buttons */}
      <div className="flex justify-center my-4">
        <button onClick={onConfirm} className="mx-2 px-4 py-1 bg-blue-500 text-white rounded">確定</button>
      </div>

      <div className="flex justify-center my-4 space-x-4">
        <button onClick={onClear} className="px-4 py-1 bg-gray-200 rounded">クリア</button>
        <button onClick={onExit} className="px-4 py-1 bg-gray-200 rounded">終了</button>
      </div>
    </div>
  );
};

export default ContractManagementComponent;
