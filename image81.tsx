```tsx
import React from 'react';

interface JVTableProps {
  jvName: string;
  jvCode: string;
  data: Array<{
    contractorCode: string;
    contractorName: string;
    contributionRate: number;
    isRepresentative: boolean;
    agent: string;
    industryType: string;
  }>;
  onCancel: () => void;
}

const JVTable: React.FC<JVTableProps> = ({ jvName, jvCode, data, onCancel }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-lg">
      <div className="text-blue-800 font-bold mb-2">
        <span>JV名: </span>{jvCode}
        <span> {jvName}</span>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="w-1/6 py-2">業者コード</th>
            <th className="w-1/3 py-2">構成業者名</th>
            <th className="w-1/6 py-2">出資比率</th>
            <th className="w-1/6 py-2">代表企業</th>
            <th className="w-1/6 py-2">代理人</th>
            <th className="w-1/6 py-2">業種</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="py-2 text-center">{item.contractorCode}</td>
              <td className="py-2">{item.contractorName}</td>
              <td className="py-2 text-center">{item.contributionRate.toFixed(2)}</td>
              <td className="py-2 text-center">{item.isRepresentative ? '＊' : ''}</td>
              <td className="py-2 text-center">{item.agent}</td>
              <td className="py-2">{item.industryType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right">
        <button 
          className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default JVTable;
```