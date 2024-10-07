import React from 'react';

type TableData = {
  date: string;
  changeCount: number;
  changeContent: string;
  taxRate: number;
  designAmountExclTax: number;
  designAmountInclTax: number;
  contractAmountExclTax: number;
};

type ContractTableProps = {
  title: string;
  caseNumber: string;
  data: TableData[];
  onCancel: () => void;
};

const ContractTable: React.FC<ContractTableProps> = ({ title, caseNumber, data, onCancel }) => {
  return (
    <div className="bg-white shadow-md">
      <div className="bg-blue-600 p-2 text-white flex justify-between">
        <span>受付番号 {caseNumber}</span>
        <span>件名 {title}</span>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-blue-100 text-xs">
            <th className="border px-4 py-2">契約日</th>
            <th className="border px-4 py-2">変更回数</th>
            <th className="border px-4 py-2">変更内容</th>
            <th className="border px-4 py-2">消費税率</th>
            <th className="border px-4 py-2">設計額(税抜)</th>
            <th className="border px-4 py-2">設計額(税込)</th>
            <th className="border px-4 py-2">契約額(税抜)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2 text-center">{item.changeCount}</td>
              <td className="border px-4 py-2">{item.changeContent}</td>
              <td className="border px-4 py-2 text-center">{item.taxRate}</td>
              <td className="border px-4 py-2 text-right">{item.designAmountExclTax.toLocaleString()}</td>
              <td className="border px-4 py-2 text-right">{item.designAmountInclTax.toLocaleString()}</td>
              <td className="border px-4 py-2 text-right">{item.contractAmountExclTax.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end p-2">
        <button 
          onClick={onCancel} 
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ContractTable;
