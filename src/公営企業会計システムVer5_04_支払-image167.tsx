// ContractForm.tsx
import React from 'react';

type ContractFormProps = {
  minContractDivision: string;
  maxContractDivision: string;
  processingYear: string;
  processingDate: string;
  minResponsibilityNumber: string;
  maxResponsibilityNumber: string;
  amount: string;
  onPrintDataChange: (value: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ContractForm: React.FC<ContractFormProps> = ({
  minContractDivision,
  maxContractDivision,
  processingYear,
  processingDate,
  minResponsibilityNumber,
  maxResponsibilityNumber,
  amount,
  onPrintDataChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">重要契約一覧表作成</h2>
      <div className="mb-4">
        <label className="block text-gray-700">
          重要契約区分: 
          <input type="text" className="ml-2 border rounded p-1" defaultValue={minContractDivision} /> ～
          <input type="text" className="ml-2 border rounded p-1" defaultValue={maxContractDivision} />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          処理年度: 
          <input type="text" className="ml-2 border rounded p-1" defaultValue={processingYear} /> 年度
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          負担処理日: 
          <input type="text" className="ml-2 border rounded p-1" defaultValue={processingDate} />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          負担番号: 
          <input type="text" className="ml-2 border rounded p-1" defaultValue={minResponsibilityNumber} /> ～
          <input type="text" className="ml-2 border rounded p-1" defaultValue={maxResponsibilityNumber} />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          金額: 
          <input type="text" className="ml-2 border rounded p-1" defaultValue={amount} /> 円以上
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          <input type="checkbox" className="mr-2" onChange={(e) => onPrintDataChange(e.target.checked)} />
          処理年度への繰越データを印字する
        </label>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-gray-700 rounded">クリア</button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default ContractForm;