```tsx
import React from 'react';

type TableRow = {
  code: string;
  name: string;
};

type Props = {
  rows: TableRow[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const AgreementDivisionTable: React.FC<Props> = ({ rows, onOk, onClear, onCancel }) => {
  return (
    <div className="bg-white border p-4 max-w-3xl mx-auto">
      <div className="flex justify-between mb-4">
        <div className="text-lg font-bold">会計年度 平成29 年度</div>
        <div className="text-sm">契約係 上水課／上水課長補佐／上水経理係長／上水係／決裁</div>
      </div>
      <table className="w-full border-collapse border mb-4">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border px-2 py-1">合議区分コード</th>
            <th className="border px-2 py-1">合議区分名称</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-2 py-1">{row.code}</td>
              <td className="border px-2 py-1">{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <button onClick={onOk} className="bg-blue-600 text-white px-4 py-2 m-1 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-600 text-white px-4 py-2 m-1 rounded">クリア</button>
        <button onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 m-1 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default AgreementDivisionTable;
```