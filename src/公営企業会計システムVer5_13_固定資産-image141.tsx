import React from 'react';

// TypeScriptの型定義
type TableRow = {
  code: string;
  content1: string;
  content2: string;
};

type TableProps = {
  rows: TableRow[];
  filterText: string;
  onFilterChange: (text: string) => void;
  onSubmit: () => void;
  onClear: () => void;
};

const CustomTable: React.FC<TableProps> = ({ rows, filterText, onFilterChange, onSubmit, onClear }) => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded p-4">
      {/* 検索バー */}
      <div className="flex mb-4">
        <input
          type="text"
          value={filterText}
          onChange={(e) => onFilterChange(e.target.value)}
          className="flex-grow px-2 py-1 border rounded"
          placeholder="摘要検索文字"
        />
        <button
          onClick={onSubmit}
          className="ml-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          表示
        </button>
      </div>
      
      {/* テーブル */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border p-2">摘要コード</th>
            <th className="border p-2">内容 (1)</th>
            <th className="border p-2">内容 (2)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.code}>
              <td className="border p-2 text-center">{row.code}</td>
              <td className="border p-2">{row.content1}</td>
              <td className="border p-2">{row.content2}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* ボタン */}
      <div className="flex justify-end mt-4">
        <button
          onClick={onClear}
          className="mr-2 px-4 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          className="px-4 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CustomTable;
```