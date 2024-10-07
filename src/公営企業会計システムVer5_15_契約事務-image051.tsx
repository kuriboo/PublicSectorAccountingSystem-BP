import React from 'react';

type JVComponentProps = {
  rows: {
    representative: string;
    code: string;
    name: string;
    ratio: number;
    contribution: number;
  }[];
  totalContractAmount: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const JVComponent: React.FC<JVComponentProps> = ({
  rows,
  totalContractAmount,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Table */}
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th className="px-4 py-2">代表</th>
            <th className="px-4 py-2">構成業者コード</th>
            <th className="px-4 py-2">構成業者名</th>
            <th className="px-4 py-2">出資比率</th>
            <th className="px-4 py-2">出資金額</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-4 py-2">{row.representative}</td>
              <td className="px-4 py-2">{row.code}</td>
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.ratio}</td>
              <td className="px-4 py-2">{row.contribution.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Details Section */}
      <div className="mt-4 p-4 bg-gray-100 rounded-md">
        <div>契約金額(税込): {totalContractAmount.toLocaleString()}</div>

        <div className="flex items-center mt-2">
          <div className="mr-2">構成業者</div>
          <input
            type="number"
            className="border border-gray-300 p-1 rounded w-full"
          />
        </div>

        <div className="flex items-center mt-2">
          <div className="mr-2">出資比率</div>
          <input
            type="number"
            className="border border-gray-300 p-1 rounded w-full"
          />
        </div>

        <div className="flex items-center mt-2">
          <div className="mr-2">出資金額</div>
          <input
            type="number"
            className="border border-gray-300 p-1 rounded w-full"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 text-black py-1 px-4 rounded hover:bg-gray-400"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default JVComponent;
```