import React, { useState } from 'react';

// TypeScriptの型定義
interface TableRow {
  id: number;
  code: number;
  name: string;
  selected: boolean;
}

interface DataTableProps {
  rows: TableRow[];
  onConfirm: (selectedRows: TableRow[]) => void;
}

// Tailwind CSSを使用してスタイリングを行う
const DataTable: React.FC<DataTableProps> = ({ rows, onConfirm }) => {
  const [rowData, setRowData] = useState<TableRow[]>(rows);

  // 全選択/全解除のトグル
  const toggleSelectAll = () => {
    const allSelected = rowData.every(row => row.selected);
    const updatedRows = rowData.map(row => ({ ...row, selected: !allSelected }));
    setRowData(updatedRows);
  };

  // 行の選択/非選択のトグル
  const toggleSelect = (id: number) => {
    const updatedRows = rowData.map(row => 
      row.id === id ? { ...row, selected: !row.selected } : row
    );
    setRowData(updatedRows);
  };

  // OKボタン押下時の処理
  const handleConfirm = () => {
    onConfirm(rowData.filter(row => row.selected));
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold text-blue-800">決算統計集計根拠出力</h1>
      <div className="my-4">
        <button onClick={toggleSelectAll} className="text-blue-600">
          全選択
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-200">
            <th className="border p-2">選択</th>
            <th className="border p-2">表番号</th>
            <th className="border p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map(row => (
            <tr key={row.id} className="border-b">
              <td className="p-2 text-center">
                <input 
                  type="checkbox" 
                  checked={row.selected}
                  onChange={() => toggleSelect(row.id)} 
                />
              </td>
              <td className="border p-2 text-center">{row.code}</td>
              <td className="border p-2">{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={handleConfirm} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          OK
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          クリア
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          終了
        </button>
      </div>
    </div>
  );
};

export default DataTable;
