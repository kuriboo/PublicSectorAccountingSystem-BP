```tsx
import React from 'react';

// TypeScriptの型定義
type TantoshaTableProps = {
  employees: { code: string, name: string }[];
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
};

const TantoshaTable: React.FC<TantoshaTableProps> = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">担当マスタ</h1>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded">登録</button>
          <button className="px-3 py-1 bg-green-500 text-white rounded">訂正</button>
          <button className="px-3 py-1 bg-red-500 text-white rounded">削除</button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">担当コード</label>
        <input type="text" className="mt-1 px-3 py-2 border rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">名称</label>
        <input type="text" className="mt-1 px-3 py-2 border rounded-md w-full" />
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-4 py-2">コード</th>
            <th className="px-4 py-2">名称</th>
            <th className="px-4 py-2">アクション</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.code} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{employee.code}</td>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">
                <button className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                  onClick={() => onEdit(employee.code)}>編集</button>
                <button className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => onDelete(employee.code)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TantoshaTable;
```