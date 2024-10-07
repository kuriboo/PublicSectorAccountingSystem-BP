import React from 'react';

// Prop definitions for the ContractTable component
type ContractTableProps = {
  contracts: {
    id: string;
    jobName: string;
    location: string;
    method: string;
  }[];
  onOk: () => void;
  onCancel: () => void;
};

// ContractTable component definition
const ContractTable: React.FC<ContractTableProps> = ({ contracts, onOk, onCancel }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between mb-2">
        <span className="text-sm">業種 土木一式工事</span>
        <span className="text-sm">業者名 工事の受付登録Å・特定工事企業体</span>
        <span className="text-sm">実績年度 平成29年度</span>
      </div>

      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2 text-left">受付番号</th>
            <th className="p-2 text-left">件名</th>
            <th className="p-2 text-left">場所</th>
            <th className="p-2 text-left">方法</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id} className="odd:bg-white even:bg-gray-100">
              <td className="p-2 border-t">{contract.id}</td>
              <td className="p-2 border-t">{contract.jobName}</td>
              <td className="p-2 border-t">{contract.location}</td>
              <td className="p-2 border-t">{contract.method}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none mr-2"
        >
          キャンセル
        </button>
        <button
          onClick={onOk}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ContractTable;
```