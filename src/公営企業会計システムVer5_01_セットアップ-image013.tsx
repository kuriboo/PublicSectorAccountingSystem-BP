import React from 'react';
import 'tailwindcss/tailwind.css';

type Item = {
  code: string;
  content: string;
};

type Props = {
  title: string;
  masterCode: string;
  name: string;
  alias: string;
  items: Item[];
  onRegister?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onItemEdit?: (item: Item) => void;
  onItemDelete?: (code: string) => void;
};

const MasterForm: React.FC<Props> = ({
  title,
  masterCode,
  name,
  alias,
  items,
  onRegister,
  onEdit,
  onDelete,
  onItemEdit,
  onItemDelete,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold text-center mb-4">{title}</h1>
      
      {/* Code Section */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">自由設定項目コード</label>
        <input
          type="text"
          value={masterCode}
          readOnly
          className="w-full p-2 border rounded-md"
        />
      </div>
      
      {/* Name Section */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">名称</label>
        <input
          type="text"
          value={name}
          readOnly
          className="w-full p-2 border rounded-md"
        />
      </div>
      
      {/* Alias Section */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">略名</label>
        <input
          type="text"
          value={alias}
          readOnly
          className="w-full p-2 border rounded-md"
        />
      </div>
      
      {/* Buttons */}
      <div className="flex space-x-2 mb-4">
        <button onClick={onRegister} className="bg-blue-500 text-white py-1 px-4 rounded-md">
          登録
        </button>
        <button onClick={onEdit} className="bg-teal-500 text-white py-1 px-4 rounded-md">
          訂正
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white py-1 px-4 rounded-md">
          削除
        </button>
      </div>
      
      {/* Table */}
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr>
            <th className="border px-2 py-1 bg-blue-500 text-white">内容コード</th>
            <th className="border px-2 py-1 bg-blue-500 text-white">内容</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.code} className="hover:bg-gray-100">
              <td className="border px-2 py-1">{item.code}</td>
              <td className="border px-2 py-1">{item.content}</td>
              <td className="border px-2 py-1">
                <button onClick={() => onItemEdit && onItemEdit(item)} className="text-blue-500 mr-2">
                  明細編集
                </button>
                <button onClick={() => onItemDelete && onItemDelete(item.code)} className="text-red-500">
                  行削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MasterForm;
