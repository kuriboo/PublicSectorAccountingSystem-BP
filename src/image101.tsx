import React from 'react';

// 型定義
type ContractorFormProps = {
  year: string;
  contractorCode: string;
  contractorName: string;
  workTypeCode: string;
  workTypeName: string;
  contractType: string;
  nominationCount: number;
  biddingCount: number;
  amount: number;
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
};

// コンポーネントの定義
const ContractorForm: React.FC<ContractorFormProps> = ({
  year,
  contractorCode,
  contractorName,
  workTypeCode,
  workTypeName,
  contractType,
  nominationCount,
  biddingCount,
  amount,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="text"
          value={year}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">業者</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={contractorCode}
            readOnly
            className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm"
          />
          <input
            type="text"
            value={contractorName}
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">業種</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={workTypeCode}
            readOnly
            className="mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm"
          />
          <input
            type="text"
            value={workTypeName}
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">契約区分</label>
        <input
          type="text"
          value={contractType}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">指名回数</label>
        <input
          type="number"
          value={nominationCount}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">落札回数</label>
        <input
          type="number"
          value={biddingCount}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">金額</label>
        <input
          type="text"
          value={`${amount.toLocaleString()} 円`}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button 
          className="py-2 px-4 bg-blue-500 text-white rounded shadow"
          onClick={onSubmit}
        >
          OK
        </button>
        <button 
          className="py-2 px-4 bg-gray-300 text-black rounded shadow"
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="py-2 px-4 bg-red-500 text-white rounded shadow"
          onClick={onEnd}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ContractorForm;
