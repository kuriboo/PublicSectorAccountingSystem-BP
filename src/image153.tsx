import React from 'react';

interface StaffMasterProps {
  code: string;
  name: string;
  data: Array<{ code: string; name: string }>;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onClear: () => void;
  onClose: () => void;
}

const StaffMaster: React.FC<StaffMasterProps> = ({
  code,
  name,
  data,
  onRegister,
  onEdit,
  onDelete,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">担当マスタ</h1>
      <div className="flex items-center space-x-4 mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onRegister}>登録</button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onEdit}>訂正</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onDelete}>削除</button>
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">担当コード</label>
        <input className="w-full px-2 py-1 border rounded" value={code} readOnly />
      </div>
      <div className="mb-6">
        <label className="block font-bold mb-2">名称</label>
        <input className="w-full px-2 py-1 border rounded" value={name} readOnly />
      </div>
      <table className="w-full border-collapse mb-6">
        <thead>
          <tr>
            <th className="border p-2 bg-blue-100">コード</th>
            <th className="border p-2 bg-blue-100">名称</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.code}</td>
              <td className="border p-2">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={onEdit}>編集</button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={onDelete}>行削除</button>
      </div>
      <div className="flex items-center space-x-4 mt-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClear}>クリア</button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>終了</button>
      </div>
    </div>
  );
};

export default StaffMaster;