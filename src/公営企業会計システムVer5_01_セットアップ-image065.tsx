import React from 'react';

// タイプ定義
interface FinanceMasterProps {
  code: string;
  name: string;
  items: Array<{ code: string; name: string }>;
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

const FinanceMaster: React.FC<FinanceMasterProps> = ({
  code,
  name,
  items,
  onEdit,
  onDelete,
  onOk,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">資金残高金融機関マスタ</h1>
      <div className="mb-4">
        <label className="block">資金残高金融機関コード</label>
        <input
          type="text"
          value={code}
          className="border p-2 rounded w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block">名称</label>
        <input
          type="text"
          value={name}
          className="border p-2 rounded w-full"
          readOnly
        />
      </div>
      <div className="flex space-x-2 mb-4">
        <button className="bg-blue-500 text-white p-2 rounded" onClick={() => onEdit(code)}>編集</button>
        <button className="bg-red-500 text-white p-2 rounded" onClick={() => onDelete(code)}>削除</button>
      </div>
      <table className="w-full border">
        <thead>
          <tr className="bg-blue-100">
            <th className="border p-2">コード</th>
            <th className="border p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.code} className="odd:bg-white even:bg-gray-50">
              <td className="border p-2">{item.code}</td>
              <td className="border p-2">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-4 mt-4">
        <button className="bg-green-500 text-white p-2 rounded" onClick={onOk}>OK</button>
        <button className="bg-yellow-500 text-white p-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-gray-500 text-white p-2 rounded" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default FinanceMaster;
```