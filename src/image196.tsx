import React from 'react';

// Props type definition
interface Entry {
  code: string;
  name: string;
}

interface MasterComponentProps {
  title: string;
  entries: Entry[];
  selectedCode: string;
  onCodeChange: (code: string) => void;
  onNameChange: (name: string) => void;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const MasterComponent: React.FC<MasterComponentProps> = ({
  title,
  entries,
  selectedCode,
  onCodeChange,
  onNameChange,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow-md rounded-lg">
      {/* Header */}
      <h1 className="text-xl font-bold mb-4">{title}</h1>

      {/* Form */}
      <div className="mb-4">
        <label className="block mb-2">
          <span className="text-gray-700">仕訳性質区分コード</span>
          <input
            type="text"
            value={selectedCode}
            onChange={(e) => onCodeChange(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">名称</span>
          <input
            type="text"
            onChange={(e) => onNameChange(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 mb-4">
        <button onClick={onRegister} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          登録
        </button>
        <button onClick={onEdit} className="px-4 py-2 bg-yellow-500 text-white rounded-md">
          訂正
        </button>
        <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded-md">
          削除
        </button>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-left text-sm font-semibold text-gray-700">コード</th>
            <th className="py-2 text-left text-sm font-semibold text-gray-700">名称</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.code} className={entry.code === selectedCode ? 'bg-blue-100' : ''}>
              <td className="py-2 border-t border-gray-300">{entry.code}</td>
              <td className="py-2 border-t border-gray-300">{entry.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Buttons */}
      <div className="flex justify-end space-x-3 mt-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">OK</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">クリア</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">終了</button>
      </div>
    </div>
  );
};

export default MasterComponent;
