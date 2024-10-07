import React from 'react';

type JVInfo = {
  id: string;
  name: string;
  companies: CompanyInfo[];
};

type CompanyInfo = {
  code: string;
  name: string;
  contributionRate: number;
  representative: string;
  agent: string;
  type: string;
};

type JVComponentProps = {
  data: JVInfo;
  onCancel: () => void;
};

const JVComponent: React.FC<JVComponentProps> = ({ data, onCancel }) => {
  return (
    <div className="max-w-md mx-auto bg-white border rounded shadow-md">
      <header className="bg-blue-700 text-white p-2">
        <h1 className="text-lg font-bold">JV 構成業者</h1>
      </header>
      <div className="p-4">
        <div className="mb-2">
          <span className="font-bold">JV 名: </span>{data.id}
        </div>
        <div className="mb-4">
          <span className="font-bold">{data.name}</span>
        </div>
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="p-2 border">業者コード</th>
              <th className="p-2 border">構成業者名</th>
              <th className="p-2 border">出資比率</th>
              <th className="p-2 border">代表企業</th>
              <th className="p-2 border">代理人</th>
              <th className="p-2 border">業種</th>
            </tr>
          </thead>
          <tbody>
            {data.companies.map((company, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{company.code}</td>
                <td className="p-2 border">{company.name}</td>
                <td className="p-2 border">{company.contributionRate.toFixed(2)}</td>
                <td className="p-2 border">{company.representative}</td>
                <td className="p-2 border">{company.agent}</td>
                <td className="p-2 border">{company.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="bg-gray-100 p-2">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </footer>
    </div>
  );
};

export default JVComponent;
