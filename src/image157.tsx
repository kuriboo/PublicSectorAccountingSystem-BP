import React from 'react';

// 型定義
type ScreenTitleMasterProps = {
  code: string;
  title: string;
  projectNumber?: string;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onRowDelete: () => void;
  data: {
    code: string;
    title: string;
    projectNumber?: string;
  }[];
};

const ScreenTitleMaster: React.FC<ScreenTitleMasterProps> = ({
  code,
  title,
  projectNumber,
  onRegister,
  onEdit,
  onDelete,
  onRowDelete,
  data,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">画面タイトルマスタ</h1>
      <div className="mb-4">
        <label className="block font-bold mb-2">画面タイトルコード</label>
        <input
          type="text"
          value={code}
          className="border p-2 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">タイトル</label>
        <input
          type="text"
          value={title}
          className="border p-2 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">起工番号</label>
        <input
          type="text"
          value={projectNumber}
          className="border p-2 w-full"
          readOnly
        />
      </div>
      <div className="flex space-x-2 mb-4">
        <button onClick={onRegister} className="bg-blue-500 text-white py-2 px-4 rounded">
          登録
        </button>
        <button onClick={onEdit} className="bg-yellow-500 text-white py-2 px-4 rounded">
          修正
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white py-2 px-4 rounded">
          削除
        </button>
      </div>
      <table className="table-auto w-full mb-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">コード</th>
            <th className="px-4 py-2">タイトル</th>
            <th className="px-4 py-2">起工番号</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b">
              <td className="border px-4 py-2">{row.code}</td>
              <td className="border px-4 py-2">{row.title}</td>
              <td className="border px-4 py-2">{row.projectNumber || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onRowDelete} className="bg-gray-500 text-white py-2 px-4 rounded">
        行削除
      </button>
    </div>
  );
};

export default ScreenTitleMaster;
```