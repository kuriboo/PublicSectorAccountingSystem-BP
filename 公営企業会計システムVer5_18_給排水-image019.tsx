```tsx
import React from 'react';

// Type definitions for the component props
interface EmployeeData {
  code: string;
  name: string;
  password: string;
}

interface EmployeeTableProps {
  employees: EmployeeData[];
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
}

// EmployeeTable component
const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-2">職員マスタ</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="w-full bg-blue-500 text-white">
            <th className="py-2 px-4">コード</th>
            <th className="py-2 px-4">名称</th>
            <th className="py-2 px-4">パスワード</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.code} className="border-b">
              <td className="py-2 px-4">{employee.code}</td>
              <td className="py-2 px-4">{employee.name}</td>
              <td className="py-2 px-4">{employee.password}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-yellow-300 hover:bg-yellow-400 text-black py-1 px-2 rounded mr-2"
                  onClick={() => onEdit(employee.code)}
                >
                  編集
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                  onClick={() => onDelete(employee.code)}
                >
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2">OK</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded mr-2">クリア</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default EmployeeTable;
```