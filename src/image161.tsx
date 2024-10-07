import React from 'react';

// Data type definition for table rows
type TableRow = {
  initialValue: string;
  index: number;
  textAlign: string;
  editedValue: string;
};

// Props type definition for the Table component
interface TableProps {
  rows: TableRow[];
  onReset: () => void;
  onOk: () => void;
  onClear: () => void;
}

const TableComponent: React.FC<TableProps> = ({ rows, onReset, onOk, onClear }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Heading */}
      <div className="flex justify-between mb-4">
        <div className="font-bold text-lg">帳票フォーマット</div>
        <div>MAP0060v1</div>
      </div>
      <div className="mb-2 text-center">調書兼命令書(一般) 改善様式</div>

      {/* Table */}
      <table className="w-full table-auto border-collapse border border-gray-400">
        <thead className="bg-blue-100">
          <tr>
            <th className="border border-gray-400 p-2">見出し初期値</th>
            <th className="border border-gray-400 p-2">見出し桁数</th>
            <th className="border border-gray-400 p-2">文字配置</th>
            <th className="border border-gray-400 p-2">見出し編集後</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="even:bg-blue-50">
              <td className="border border-gray-400 p-2">{row.initialValue}</td>
              <td className="border border-gray-400 p-2">{row.index}</td>
              <td className="border border-gray-400 p-2">{row.textAlign}</td>
              <td className="border border-gray-400 p-2">{row.editedValue}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button 
          onClick={onReset} 
          className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded"
        >
          初期値に戻す
        </button>
        <button 
          onClick={onOk} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          クリア
        </button>
        <button 
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
