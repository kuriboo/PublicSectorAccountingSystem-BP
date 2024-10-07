import React from 'react';

// プロパティの型定義
interface TableRow {
  code: string;
  title: string;
}

interface MasterComponentProps {
  year: string;
  code: string;
  title: string;
  rows: TableRow[];
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

// コンポーネントの定義
const MasterComponent: React.FC<MasterComponentProps> = ({
  year,
  code,
  title,
  rows,
  onRegister,
  onEdit,
  onDelete,
  onOk,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* Header */}
      <div className="mb-4 p-2 bg-purple-200 rounded-lg">
        <h1 className="text-lg font-bold">作表制御表区分マスタ</h1>
      </div>
      
      {/* Controls */}
      <div className="flex space-x-4 mb-4">
        <button onClick={onRegister} className="px-4 py-2 bg-blue-500 text-white rounded-md">登録</button>
        <button onClick={onEdit} className="px-4 py-2 bg-yellow-500 text-white rounded-md">訂正</button>
        <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded-md">削除</button>
      </div>
      
      {/* Form */}
      <div className="mb-4">
        <label className="block mb-2">会計年度</label>
        <input type="text" value={year} readOnly className="w-full p-2 border rounded-md" />
        
        <label className="block mt-4 mb-2">作表制御表区分</label>
        <input type="text" value={code} readOnly className="w-full p-2 border rounded-md" />
        
        <label className="block mt-4 mb-2">タイトル</label>
        <input type="text" value={title} readOnly className="w-full p-2 border rounded-md" />
      </div>
      
      {/* Table */}
      <table className="w-full mb-4 border-collapse border">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border p-2">作表制御表コード</th>
            <th className="border p-2">タイトル</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
              <td className="border p-2">{row.code}</td>
              <td className="border p-2">{row.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Footer Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button onClick={onOk} className="px-4 py-2 bg-green-500 text-white rounded-md">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded-md">クリア</button>
        <button onClick={onClose} className="px-4 py-2 bg-gray-700 text-white rounded-md">終了</button>
      </div>
    </div>
  );
}

export default MasterComponent;
