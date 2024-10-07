import React from 'react';

type TableRow = {
  code: string;
  title: string;
  groupCode: string;
};

type Props = {
  rows: TableRow[];
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const ApplicationMaster: React.FC<Props> = ({ rows, onRegister, onEdit, onDelete }) => {
  return (
    <div className="p-4">
      <div className="bg-blue-100 p-2 rounded mb-4">
        <h2 className="text-xl font-bold">アプリケーションマスタ</h2>
      </div>

      <div className="flex items-center mb-4">
        <span className="mr-2">画面タイトル</span>
        <input type="text" className="border p-1 rounded mr-4" />
        
        <span className="mr-2">APグループコード</span>
        <input type="text" className="border p-1 rounded" />
      </div>

      <div className="flex space-x-2 mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onRegister}>
          登録
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={onEdit}>
          訂正
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onDelete}>
          削除
        </button>
      </div>

      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-200 p-2">画面タイトルコード</th>
            <th className="border border-gray-200 p-2">画面タイトル</th>
            <th className="border border-gray-200 p-2">APグループコード</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-200 p-2">{row.code}</td>
              <td className="border border-gray-200 p-2">{row.title}</td>
              <td className="border border-gray-200 p-2">{row.groupCode}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex space-x-2">
        <button className="bg-gray-300 px-4 py-2 rounded">前データ</button>
        <button className="bg-gray-300 px-4 py-2 rounded">次データ</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ApplicationMaster;
