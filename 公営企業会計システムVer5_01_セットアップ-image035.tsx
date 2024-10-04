import React from 'react';

// TypeScriptの型定義
type AllocationRatioProps = {
  year: number;
  allocationCode: string;
  totalRatio: number;
  rows: {
    code: string;
    name: string;
    ratio: number;
  }[];
  onEdit: () => void;
  onDelete: () => void;
  onSubmit: (fieldCode: string, ratio: number) => void;
  onCancel: () => void;
};

// コンポーネント定義
const AllocationRatio: React.FC<AllocationRatioProps> = ({
  year,
  allocationCode,
  totalRatio,
  rows,
  onEdit,
  onDelete,
  onSubmit,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-50 rounded shadow-lg">
      <div className="mb-2 flex items-center">
        <label className="mr-2 font-bold">年度:</label>
        <span>{year}</span>
      </div>
      <div className="mb-4 flex items-center">
        <label className="mr-2 font-bold">按分:</label>
        <span>{allocationCode}</span>
      </div>

      <table className="w-full mb-4">
        <thead>
          <tr className="bg-blue-200">
            <th>科目コード</th>
            <th>科目名称</th>
            <th>構成比率</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="bg-white even:bg-gray-100">
              <td>{row.code}</td>
              <td>{row.name}</td>
              <td>{row.ratio.toFixed(4)}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mb-4">
        <button onClick={onEdit} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          編集
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          行削除
        </button>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-bold">構成比率設定</label>
        <input type="text" placeholder="科目" className="border p-1 mb-2 w-full" />
        <input type="number" placeholder="構成比率" className="border p-1 w-full" />
      </div>

      <div className="flex items-center justify-between">
        <button onClick={() => onSubmit("fieldCodeSample", 0.0000)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
          確定
        </button>
        <button onClick={onCancel} className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AllocationRatio;