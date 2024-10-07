import React from 'react';

// TypeScriptの型定義
type Contractor = {
  id: string;
  name: string;
  selectedWork: string;
  area: string;
  totalValue: number;
  bidDeposit: number;
  contractDeposit: number;
  suspensionPeriod: string;
};

type ContractorTableProps = {
  contractors: Contractor[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const ContractorTable: React.FC<ContractorTableProps> = ({ contractors, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <table className="min-w-full bg-white border">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-2 border">業者コード</th>
            <th className="p-2 border">業者名</th>
            <th className="p-2 border">選定業種名</th>
            <th className="p-2 border">地区名</th>
            <th className="p-2 border">総合数値</th>
            <th className="p-2 border">入札保証金</th>
            <th className="p-2 border">契約保証金</th>
            <th className="p-2 border">指名停止期限</th>
            <th className="p-2 border">操作</th>
          </tr>
        </thead>
        <tbody>
          {contractors.map((contractor) => (
            <tr key={contractor.id} className="text-center">
              <td className="p-2 border">{contractor.id}</td>
              <td className="p-2 border">{contractor.name}</td>
              <td className="p-2 border">{contractor.selectedWork}</td>
              <td className="p-2 border">{contractor.area}</td>
              <td className="p-2 border">{contractor.totalValue}</td>
              <td className="p-2 border">{contractor.bidDeposit}</td>
              <td className="p-2 border">{contractor.contractDeposit}</td>
              <td className="p-2 border">{contractor.suspensionPeriod}</td>
              <td className="p-2 border">
                <button className="text-blue-500 hover:underline" onClick={() => onEdit(contractor.id)}>編集</button>
                <button className="text-red-500 hover:underline ml-2" onClick={() => onDelete(contractor.id)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractorTable;
```