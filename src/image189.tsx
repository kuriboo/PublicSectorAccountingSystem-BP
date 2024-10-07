import React from 'react';

// Type definition for the component props
type CodeEntry = {
  id: number;
  name: string;
};

type CodeMasterProps = {
  entries: CodeEntry[];
  selectedId?: number;
  onSelect: (id: number) => void;
  onAdd: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const CodeMaster: React.FC<CodeMasterProps> = ({
  entries,
  selectedId,
  onSelect,
  onAdd,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-lg font-bold mb-4">流用区分マスタ</h2>
      <div className="mb-4">
        <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={onAdd}>
          登録
        </button>
        <button className="mr-2 px-4 py-2 bg-green-500 text-white rounded" onClick={onEdit}>
          修正
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onDelete}>
          削除
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead className="bg-blue-200">
          <tr>
            <th className="w-1/4 py-2 text-left">コード</th>
            <th className="w-3/4 py-2 text-left">名称</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}
                className={`hover:bg-gray-200 cursor-pointer ${
                  selectedId === entry.id ? 'bg-gray-300' : ''
                }`}
                onClick={() => onSelect(entry.id)}>
              <td className="py-2 px-4 border-b">{entry.id}</td>
              <td className="py-2 px-4 border-b">{entry.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CodeMaster;
```