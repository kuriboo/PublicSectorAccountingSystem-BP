import React from 'react';

// TypeScriptの型定義
type RowData = {
  date: string;
  number: number;
  category: string;
  amount: number;
  description: string;
};

type TableProps = {
  data: RowData[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// Tailwind CSSを利用したスタイリングのコンポーネント
const DataTable: React.FC<TableProps> = ({ data, onOk, onClear, onCancel }) => {
  return (
    <div className="p-4">
      <table className="min-w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">処理日</th>
            <th className="px-4 py-2">予定番号</th>
            <th className="px-4 py-2">支払種別</th>
            <th className="px-4 py-2">予定額</th>
            <th className="px-4 py-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{row.date}</td>
              <td className="px-4 py-2">{row.number}</td>
              <td className="px-4 py-2">{row.category}</td>
              <td className="px-4 py-2">{row.amount.toLocaleString()}</td>
              <td className="px-4 py-2">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-4 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DataTable;
