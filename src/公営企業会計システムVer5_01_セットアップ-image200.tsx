import React from 'react';

type Props = {
  code: string;
  name: string;
  records: { id: string; name: string }[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onChange: (field: 'code' | 'name', value: string) => void;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

const EntityManagement: React.FC<Props> = ({
  code,
  name,
  records,
  onEdit,
  onDelete,
  onChange,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">団体マスタ</h1>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block mb-1">団体コード</label>
          <input
            type="text"
            value={code}
            onChange={(e) => onChange('code', e.target.value)}
            className="border p-1"
          />
        </div>
        <div>
          <label className="block mb-1">名称</label>
          <input
            type="text"
            value={name}
            onChange={(e) => onChange('name', e.target.value)}
            className="border p-1"
          />
        </div>
      </div>
      <table className="min-w-full table-auto mb-4">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2">コード</th>
            <th className="px-4 py-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} className="even:bg-gray-100">
              <td className="border px-4 py-2">{record.id}</td>
              <td className="border px-4 py-2">{record.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between">
        <div>
          <button
            onClick={() => onEdit(code)}
            className="bg-gray-300 px-4 py-2 mr-2"
          >
            編集
          </button>
          <button
            onClick={() => onDelete(code)}
            className="bg-gray-300 px-4 py-2"
          >
            行削除
          </button>
        </div>
        <div>
          <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 mr-2">
            OK
          </button>
          <button onClick={onClear} className="bg-gray-300 px-4 py-2 mr-2">
            クリア
          </button>
          <button onClick={onClose} className="bg-gray-300 px-4 py-2">
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntityManagement;
```