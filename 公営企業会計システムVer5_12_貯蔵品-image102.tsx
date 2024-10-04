import React, { useState } from 'react';

// TypeScript interface for props
interface MasterDataProps {
  code: string;
  name: string;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onClear: () => void;
  onFinish: () => void;
  data: { code: string; name: string }[];
}

const MasterDataComponent: React.FC<MasterDataProps> = ({
  code,
  name,
  onRegister,
  onEdit,
  onDelete,
  onClear,
  onFinish,
  data
}) => {
  // State hooks for form inputs
  const [formCode, setFormCode] = useState(code);
  const [formName, setFormName] = useState(name);

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-lg bg-purple-300 p-2">区分名称マスタ保守</h1>
      <div className="flex items-center my-4">
        <label className="mr-2">コード</label>
        <input
          type="text"
          className="border p-1"
          value={formCode}
          onChange={(e) => setFormCode(e.target.value)}
        />
      </div>
      <div className="flex items-center my-4">
        <label className="mr-2">名称</label>
        <input
          type="text"
          className="border p-1"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <button onClick={onRegister} className="border px-4 py-2 mr-2">登録</button>
        <button onClick={onEdit} className="border px-4 py-2 mr-2">訂正</button>
        <button onClick={onDelete} className="border px-4 py-2 mr-2">削除</button>
      </div>
      <div className="my-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border p-2">コード</th>
              <th className="border p-2">名称</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                <td className="border p-2">{item.code}</td>
                <td className="border p-2">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={onClear} className="border px-4 py-2 mr-2">クリア</button>
        <button onClick={onFinish} className="border px-4 py-2">終了</button>
      </div>
    </div>
  );
};

export default MasterDataComponent;