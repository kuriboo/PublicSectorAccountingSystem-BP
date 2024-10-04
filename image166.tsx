```tsx
import React from 'react';

// TypeScript Interface for Table Row
interface TableRow {
  screenId: string;
  accountId: string;
  name: string;
  displayName: string;
  ticket: string;
  linked: string;
}

// TypeScript Interface for Component Props
interface TableProps {
  data: TableRow[];
  onExecute: () => void;
  onClear: () => void;
  onExit: () => void;
}

const MasterTable: React.FC<TableProps> = ({ data, onExecute, onClear, onExit }) => {
  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="bg-blue-100 p-4 rounded mb-4 text-center">
        <h1 className="text-lg font-bold">電子決裁連携マスタ</h1>
      </div>

      {/* Table Section */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="border px-4 py-2">画面ID</th>
            <th className="border px-4 py-2">帳票ID</th>
            <th className="border px-4 py-2">名称</th>
            <th className="border px-4 py-2">表示件名</th>
            <th className="border px-4 py-2">帳票</th>
            <th className="border px-4 py-2">連携有無</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="border px-4 py-2">{row.screenId}</td>
              <td className="border px-4 py-2">{row.accountId}</td>
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.displayName}</td>
              <td className="border px-4 py-2">{row.ticket}</td>
              <td className="border px-4 py-2">{row.linked}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button Section */}
      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onExecute} className="bg-gray-300 px-4 py-2 rounded">実行</button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-gray-300 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default MasterTable;
```