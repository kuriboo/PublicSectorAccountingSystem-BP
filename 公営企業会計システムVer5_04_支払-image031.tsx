import React, { FC } from 'react';

// Define the types for the component's props
interface ContractFormProps {
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
  contractType: string;
  contractTypeOptions: string[];
  onContractTypeChange: (value: string) => void;
  completionDate: string;
  onCompletionDateChange: (value: string) => void;
  payments: number;
  onPaymentsChange: (value: number) => void;
  onSupervisorClick: () => void;
  onInspectorClick: () => void;
}

const ContractForm: FC<ContractFormProps> = ({
  onConfirm,
  onClear,
  onCancel,
  contractType,
  contractTypeOptions,
  onContractTypeChange,
  completionDate,
  onCompletionDateChange,
  payments,
  onPaymentsChange,
  onSupervisorClick,
  onInspectorClick,
}) => {
  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">自由設定内容</h2>
        <div className="space-x-2">
          <button 
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-2 rounded"
            onClick={onSupervisorClick}
          >
            監督員
          </button>
          <button 
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-2 rounded"
            onClick={onInspectorClick}
          >
            検査員
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">契約方法</label>
        <select 
          value={contractType}
          onChange={(e) => onContractTypeChange(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        >
          {contractTypeOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">完了年月日</label>
        <input 
          type="text" 
          value={completionDate}
          onChange={(e) => onCompletionDateChange(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">支払回数</label>
        <input 
          type="number" 
          value={payments}
          onChange={(e) => onPaymentsChange(Number(e.target.value))}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      <div className="flex space-x-2 justify-end">
        <button 
          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded"
          onClick={onConfirm}
        >
          OK
        </button>
        <button 
          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ContractForm;