import React from 'react';

type OrganizationTableProps = {
  organizations: { code: string; name: string }[];
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
  onRegister: () => void;
  selectedMode: 'register' | 'correct' | 'delete';
  onChangeMode: (mode: 'register' | 'correct' | 'delete') => void;
};

const OrganizationTable: React.FC<OrganizationTableProps> = ({
  organizations,
  onEdit,
  onDelete,
  onRegister,
  selectedMode,
  onChangeMode
}) => {
  return (
    <div className="p-4">
      <div className="bg-blue-100 rounded p-2 mb-4">
        <h1 className="text-lg font-bold">団体マスタ</h1>
      </div>

      <div className="flex items-center mb-4">
        <label className="mr-2">団体コード</label>
        <input type="text" className="border p-1" />
      </div>

      <div className="flex items-center mb-4">
        <label className="mr-2">名称</label>
        <input type="text" className="border p-1" />
      </div>

      <div className="flex items-center mb-4">
        <label className="mr-2">登録</label>
        <input
          type="radio"
          checked={selectedMode === 'register'}
          onChange={() => onChangeMode('register')}
        />
        <label className="mx-2">訂正</label>
        <input
          type="radio"
          checked={selectedMode === 'correct'}
          onChange={() => onChangeMode('correct')}
        />
        <label className="mx-2">削除</label>
        <input
          type="radio"
          checked={selectedMode === 'delete'}
          onChange={() => onChangeMode('delete')}
        />
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-blue-700 text-white">
            <th className="p-2">コード</th>
            <th className="p-2">名称</th>
            <th className="p-2">アクション</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((org) => (
            <tr key={org.code} className="border-b">
              <td className="p-2">{org.code}</td>
              <td className="p-2">{org.name}</td>
              <td className="p-2">
                <button onClick={() => onEdit(org.code)} className="mr-2">編集</button>
                <button onClick={() => onDelete(org.code)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-1 rounded mr-2">OK</button>
        <button className="bg-gray-300 px-4 py-1 rounded mr-2">クリア</button>
        <button className="bg-gray-300 px-4 py-1 rounded">終了</button>
      </div>
    </div>
  );
};

export default OrganizationTable;