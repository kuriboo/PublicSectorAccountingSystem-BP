import React from 'react';

// TypeScriptの型定義
interface DataRow {
  category: string;
  accountCode: string;
  name: string;
  department: string;
  amount: number;
}

interface DataTableProps {
  rows: DataRow[];
  onEdit: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const DataTable: React.FC<DataTableProps> = ({ rows, onEdit, onCancel, onConfirm }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">流用措正データ編集</h2>
      <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded" onClick={onEdit}>
        編集
      </button>

      <div className="mt-4 bg-gray-100 p-4 rounded">
        <h3 className="font-bold">科目名称表示レベル</h3>
        <div className="flex space-x-4">
          <label>
            <input type="radio" name="level" value="日" /> 日
          </label>
          <label>
            <input type="radio" name="level" value="節" /> 節
          </label>
          <label>
            <input type="radio" name="level" value="細節" /> 細節
          </label>
          <label>
            <input type="radio" name="level" value="明細" /> 明細
          </label>
        </div>
      </div>

      <table className="min-w-full mt-4 border border-gray-300">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-4 py-2">区分</th>
            <th className="px-4 py-2">流用増予算科目</th>
            <th className="px-4 py-2">名称</th>
            <th className="px-4 py-2">所属</th>
            <th className="px-4 py-2">流用金額</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td className="border px-4 py-2">{row.category}</td>
              <td className="border px-4 py-2">{row.accountCode}</td>
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.department}</td>
              <td className="border px-4 py-2 text-right">{row.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex space-x-4 mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DataTable;
