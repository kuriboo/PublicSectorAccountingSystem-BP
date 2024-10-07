// components/DocumentTable.tsx

import React from 'react';

// TypeScriptの型定義
type TableRow = {
  initialValue: string;
  initialLength: number;
  alignment: string;
  editedValue: string;
};

type DocumentTableProps = {
  rows: TableRow[];
  onReset?: () => void;
  onOk?: () => void;
  onClear?: () => void;
};

const DocumentTable: React.FC<DocumentTableProps> = ({
  rows,
  onReset,
  onOk,
  onClear
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-4 py-2">見出し初期値</th>
              <th className="px-4 py-2">見出し桁数</th>
              <th className="px-4 py-2">文字配置</th>
              <th className="px-4 py-2">見出し編集後</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr className="bg-white border-b" key={index}>
                <td className="px-4 py-2">{row.initialValue}</td>
                <td className="px-4 py-2">{row.initialLength}</td>
                <td className="px-4 py-2">{row.alignment}</td>
                <td className="px-4 py-2">{row.editedValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={onReset}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-500"
        >
          初期値に戻す
        </button>
        <button
          onClick={onOk}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-500"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default DocumentTable;