// ContractManagementForm.tsx

import React from 'react';

interface ContractManagementFormProps {
  code: string;
  name: string;
  onCodeChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onPrevDataClick: () => void;
  onNextDataClick: () => void;
  onSubmit: () => void;
}

const ContractManagementForm: React.FC<ContractManagementFormProps> = ({
  code,
  name,
  onCodeChange,
  onNameChange,
  onPrevDataClick,
  onNextDataClick,
  onSubmit,
}) => {
  return (
    <div className="max-w-lg p-4 border border-gray-300 rounded-md shadow-md bg-white">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label className="mr-2 text-gray-700">コード</label>
          <input
            type="text"
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            className="flex-grow p-1 border border-gray-400 rounded"
          />
          <button
            onClick={onPrevDataClick}
            className="ml-2 px-4 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            前データ
          </button>
          <button
            onClick={onNextDataClick}
            className="ml-2 px-4 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            次データ
          </button>
        </div>
        <div className="flex items-center">
          <label className="mr-2 text-gray-700">名称</label>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="flex-grow p-1 border border-gray-400 rounded"
          />
        </div>
      </div>
      <button
        onClick={onSubmit}
        className="w-full py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        確定
      </button>
    </div>
  );
};

export default ContractManagementForm;