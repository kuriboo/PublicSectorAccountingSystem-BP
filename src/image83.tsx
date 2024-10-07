import React from 'react';

// 型定義
interface ContractData {
  receptionNumber: string;
  caseName: string;
  location: string;
  method: string;
}

interface ContractTableProps {
  data: ContractData[];
  className?: string;
}

const ContractTable: React.FC<ContractTableProps> = ({ data, className }) => {
  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="bg-blue-700 text-white p-2">
        <h1 className="text-lg">契約内容</h1>
      </div>
      <table className="w-full border-collapse mt-2">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="text-left p-2">業種</th>
            <th className="text-left p-2">業者名</th>
            <th className="text-left p-2">実績年度</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-t">
            <td className="p-2">土木一式工事</td>
            <td className="p-2">工事の受付登録JV・特定工事企業体</td>
            <td className="p-2">平成29年度</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full border-collapse mt-2">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="text-left p-2">受付番号</th>
            <th className="text-left p-2">件名</th>
            <th className="text-left p-2">場所</th>
            <th className="text-left p-2">方法</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <td className="p-2">{item.receptionNumber}</td>
              <td className="p-2">{item.caseName}</td>
              <td className="p-2">{item.location}</td>
              <td className="p-2">{item.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-500 text-white p-2 rounded mr-2">OK</button>
        <button className="bg-gray-500 text-white p-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default ContractTable;
