import React from 'react';

// TypeScriptの型定義
type FlowDivisionProps = {
  code: string;
  name: string;
};

type FlowDivisionMasterProps = {
  divisions: FlowDivisionProps[];
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

// FlowDivisionMasterコンポーネント
const FlowDivisionMaster: React.FC<FlowDivisionMasterProps> = ({
  divisions,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white border rounded-lg p-4 shadow-md">
      <h1 className="text-lg font-bold mb-4">流用区分マスタ</h1>
      <div className="flex items-center mb-2">
        <span className="mr-2">流用区分コード:</span>
        <input type="text" className="border p-1 flex-grow" />
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">名称:</span>
        <input type="text" className="border p-1 flex-grow" />
      </div>
      <div className="flex justify-between mb-4">
        <button onClick={onRegister} className="bg-blue-500 text-white px-3 py-1 rounded">
          登録
        </button>
        <button onClick={onEdit} className="bg-yellow-500 text-white px-3 py-1 rounded">
          編集
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white px-3 py-1 rounded">
          削除
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">コード</th>
            <th className="border-b p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {divisions.map((division, index) => (
            <tr key={index}>
              <td className="border-b p-2">{division.code}</td>
              <td className="border-b p-2">{division.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlowDivisionMaster;
